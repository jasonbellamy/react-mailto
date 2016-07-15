import { expect } from 'chai';
import Mailto from '../src/react-mailto.js';
import shallowOutput from 'react-shallow-output';

describe('Mailto component', () => {
  it('should hide the email address if obfuscate is true', () => {
    const component = shallowOutput(Mailto, {email: 'j@sonbellamy.com', obfuscate: true});
    expect(component.props.href).to.equal('mailto:obfuscated');
  });

  it('should not hide the email address if obsfuscate is false', () => {
    const component = shallowOutput(Mailto, {email: 'j@sonbellamy.com', obfuscate: false});
    expect(component.props.href).to.equal('mailto:j@sonbellamy.com');
  });

  it('should not hide the email address if obsfuscate is not set', () => {
    const component = shallowOutput(Mailto, {email: 'j@sonbellamy.com'});
    expect(component.props.href).to.equal('mailto:j@sonbellamy.com');
  });

  it('should add a header to the url', () => {
    const subject = 'This is a Subject';
    const component = shallowOutput(Mailto, {email: 'j@sonbellamy.com', headers: { subject }});
    expect(component.props.href).to.equal(`mailto:j@sonbellamy.com?subject=${encodeURIComponent(subject)}`);
  });
});
