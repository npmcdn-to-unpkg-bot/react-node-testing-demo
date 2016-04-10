import React from 'react';

export default class TextInput extends React.Component {
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
            <input type="text"
                   required
                   onBlur={e => onChange(e.target.value)}
                   className="form-control"
                   placeholder={placeholder}/>
          </label>
        </div>
    );
  }
}
