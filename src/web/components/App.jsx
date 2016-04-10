import React from 'react';
import { connect } from 'react-redux'

import ContactForm from './ContactForm.jsx';
import AdminPanel from './AdminPanel.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        const {
          api,
        } = this.props;

        // Get all existing messages.
        fetch(api + '/messages')
            .then(res => res.json())
            .then(messages=>messages.forEach(message => this.props.addMessage(message)))
            .catch(err => console.log(err));
    }

    handleSubmit(name, email, message) {
        // Send the message to the Node server.
        fetch(this.props.api + '/messages', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                message,
            }),
        })
            .then(res => res.json())
            .then(message => {
                this.props.addMessage(message);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <h1>Contact form demo</h1>
                <ContactForm onSubmit={this.handleSubmit}/>
                <hr/>
                <AdminPanel title="All messages"
                            messages={this.props.messages}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages,
    };
};

const mapDispatchToProps = dispatch => ({
    addMessage: message => dispatch({
        type: 'ADD_MESSAGE',
        data: message
    }),
});

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default ConnectedApp;
