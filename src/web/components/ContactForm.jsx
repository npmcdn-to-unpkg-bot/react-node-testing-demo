import React from 'react';
import { connect } from 'react-redux';

import TextInput from './TextInput.jsx';
import EmailInput from './EmailInput.jsx';
import TextArea from './TextArea.jsx';

class ContactForm extends React.Component {
  render() {
    const {
      onSubmit,
    } = this.props;

    const {
      name,
      email,
      message,
    } = this.props.contactInfo;

    return (
        <div className="form">
          <form onSubmit={e => {
            onSubmit(name, email, message)
            e.preventDefault();
          }}>
            <TextInput label="Your name"
                       onChange={name => this.props.updateContactInfo(name, email, message)}
                       placeholder="Name"/>
            <EmailInput label="Your email"
                        onChange={email => this.props.updateContactInfo(name, email, message)}
                        placeholder="someone@example.com"/>
            <TextArea label="Your message"
                      onChange={message => this.props.updateContactInfo(name, email, message)}
                      placeholder="Your message here"/>
            <button className="btn btn-primary">Send!</button>
          </form>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contactInfo: state.contactInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateContactInfo: (name, email, message) => dispatch({
      type: 'UPDATE_CONTACT_INFO',
      data: {name, email, message},
    }),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactForm);
