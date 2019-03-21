import 'react-native'
import React from 'react'
import Button from './Button'
import renderer from 'react-test-renderer'

it('renders component correctly', () => {
    const tree = renderer.create(<Button title={'Test Button'} callback={()=> { }} bsClass={{button: {marginTop: 5}}} />).toJSON();

    expect(tree).toMatchSnapshot();
});
