import assert from 'assert';
import filterReactDomProps from '../src/';

describe('filter invalid DOM props', () => {
  it('it should filter invalid DOM props', done => {
    const props = {
      value: "value",
      invalidProp: "invalidProp",
      onClick: () => {}
    };
    const filterProps = filterReactDomProps(props);

    assert.equal(Object.keys(filterProps).length, 2);
    assert.equal(filterProps.value, props.value);
    assert.equal(filterProps.onClick, props.onClick);
    assert.notEqual(filterProps.invalidProp, props.invalidProp);
    done();
  });
});
