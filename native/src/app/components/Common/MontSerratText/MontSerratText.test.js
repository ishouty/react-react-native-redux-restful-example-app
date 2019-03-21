import 'react-native'
import React from 'react'
import { MontSerratText } from './MontSerratText'
import renderer from 'react-test-renderer'

it('renders component correctly', () => {
    const tree = renderer.create(<MontSerratText>Snapshot test!</MontSerratText>).toJSON();

    expect(tree).toMatchSnapshot();
});