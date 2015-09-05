import { expect } from 'chai';
import React from 'react/addons';
import Mailto from '../src/react-mailto.js';

const createComponent = (component, props) => {
  const renderer = React.addons.TestUtils.createRenderer();
  renderer.render(React.createElement(component, props));
  return renderer.getRenderOutput();
};

describe('Mailto component', () => {
  it('should hide the email address if obfuscate is true', () => {
    const component = createComponent(Mailto, {email: 'j@sonbellamy.com', obfuscate: true});
    expect(component.props.href).to.equal('mailto:obfuscated');
  });

  it('should not hide the email address if obsfuscate is false', () => {
    const component = createComponent(Mailto, {email: 'j@sonbellamy.com', obfuscate: false});
    expect(component.props.href).to.equal('mailto:j@sonbellamy.com');
  });

  it('should not hide the email address if obsfuscate is not set', () => {
    const component = createComponent(Mailto, {email: 'j@sonbellamy.com'});
    expect(component.props.href).to.equal('mailto:j@sonbellamy.com');
  });
});
