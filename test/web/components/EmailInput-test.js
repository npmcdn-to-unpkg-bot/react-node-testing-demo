import { expect }  from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import EmailInput from '../../../src/web/components/EmailInput.jsx';

describe('EmailInput', () => {
  it('uses HTML5 to verify email input', () => {
    const label = 'Email goes here';
    const placeholder = 'someone@example.xyz';
    const onChange = email => {};

    const renderer = TestUtils.createRenderer();

    renderer.render(
      <EmailInput label={label}
        placeholder={placeholder}
        onChange={onChange}/>
    );

    const component = renderer.getRenderOutput();

    // Verify that a div is displayed
    expect(component.type).to.equal('div');

    // ... that contains only a label
    const labelElement = component.props.children;
    expect(labelElement.type).to.equal('label');
    expect(labelElement.props.children[0]).to.equal(label);
    
    const inputElement = labelElement.props.children[1];
    expect(inputElement.type).to.equal('input');
  });
});
