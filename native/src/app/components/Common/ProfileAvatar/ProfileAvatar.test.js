import 'react-native'
import React from 'react'
import ProfileAvatar from './ProfileAvatar'
import renderer from 'react-test-renderer'

it('renders component correctly', () => {
  const tree = renderer
    .create(
      <ProfileAvatar
        sourceImage={{ uri: 'mock.jpg' }}
        callback={() => {}}
      />
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('profileAvatar will render the image larger', () => {
  const profileAvatarInstance = renderer.create(
    <ProfileAvatar
      sourceImage={{ uri: 'mock.jpg' }}
      callback={() => {}}
      size={'large'}
    />
  ).root

  profileAvatarInstance.findByType('Image').props.style ==
    { width: NaN, height: 50 }
})

it('profileAvatar will default to small image if no props has been entered', () => {
  const profileAvatarInstance = renderer.create(
    <ProfileAvatar
      sourceImage={{ uri: 'mock.jpg' }}
      callback={() => {}}
    />
  ).root

  profileAvatarInstance.findByType('Image').props.style ==
    { width: 50, height: 50 }
})
