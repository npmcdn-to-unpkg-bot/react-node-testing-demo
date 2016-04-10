import React from 'react';

export default class TextArea extends React.Component {
  render() {
    const {
      onChange,
      label,
      placeholder,
    } = this.props;

    return (
        <div className="form-group">
          <label>
            {label}
            <textarea className="form-control"
                      rows="5"
                      required
                      placeholder={placeholder}
                      onBlur={e => onChange(e.target.value)}>
            </textarea>
          </label>
        </div>
    );
  }
};
