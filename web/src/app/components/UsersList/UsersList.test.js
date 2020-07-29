import React, { Component } from 'React'
import { mount } from 'enzyme'
import UsersList from './UsersList'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import 'jsdom-global/register'
import thunk from 'redux-thunk'

import { initialState } from '../../mocks/initialState'

const mockStore = configureStore([thunk])

const renderUserList = (
  users = {
    users: [],
    page: 0,
    totalPages: 20
  }
) => {
  const store = mockStore({ ...initialState, users })

  return mount(
    <Provider store={store}>
      <UsersList />
    </Provider>
  )
}

describe('UsersList', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('render a list of users', () => {
    const wrapper = renderUserList({
      users: [
        {
          gender: 'female',
          name: {
            title: 'Ms',
            first: 'Mikaela',
            last: 'Larssen'
          },
          location: {
            street: {
              number: 6351,
              name: 'Tangerudveien'
            },
            city: 'Folkestad',
            state: 'Telemark',
            country: 'Norway',
            postcode: '5058',
            coordinates: {
              latitude: '50.1836',
              longitude: '66.3938'
            },
            timezone: {
              offset: '+9:30',
              description: 'Adelaide, Darwin'
            }
          },
          email: 'mikaela.larssen@example.com',
          login: {
            uuid: '7eead2cc-f6da-4866-9d29-d733dfa581ae',
            username: 'bluelion838',
            password: 'squirt',
            salt: '0y2OFBz2',
            md5: '62dd686962ed2e1e78f271a24e4420a7',
            sha1: '2d9bcf95d9153570e3afce159ec6791e50f37716',
            sha256:
              'efef68fa84da647bc11c640879177ed46ed27ad9fe67e4e10747c2fdcdaab989'
          },
          dob: {
            date: '1968-06-06T08:51:56.197Z',
            age: 52
          },
          registered: {
            date: '2006-01-11T02:45:18.481Z',
            age: 14
          },
          phone: '79635169',
          cell: '99485721',
          id: {
            name: 'FN',
            value: '06066816077'
          },
          picture: {
            large: 'https://randomuser.me/api/portraits/women/19.jpg',
            medium:
              'https://randomuser.me/api/portraits/med/women/19.jpg',
            thumbnail:
              'https://randomuser.me/api/portraits/thumb/women/19.jpg'
          },
          nat: 'NO'
        },
        {
          gender: 'female',
          name: {
            title: 'Mrs',
            first: 'Deniz',
            last: 'Önür'
          },
          location: {
            street: {
              number: 2654,
              name: 'Necatibey Cd'
            },
            city: 'Iğdır',
            state: 'Siirt',
            country: 'Turkey',
            postcode: 21861,
            coordinates: {
              latitude: '86.1360',
              longitude: '163.7768'
            },
            timezone: {
              offset: '+6:00',
              description: 'Almaty, Dhaka, Colombo'
            }
          },
          email: 'deniz.onur@example.com',
          login: {
            uuid: '6d8b31a8-e4f9-4c48-bb24-e13f82acd136',
            username: 'ticklishbutterfly318',
            password: 'sadie1',
            salt: 'p3hp7HjP',
            md5: 'e22b5cd7f5026d1dbe1f4d9c50a4b5ae',
            sha1: 'b8ca3281059532ee09886133baee57f1e2e38379',
            sha256:
              '966e1e72c626ceac7e33b3fccd053b6fb9d1c60b61a213259026065c11d59cd9'
          },
          dob: {
            date: '1968-02-04T15:21:43.176Z',
            age: 52
          },
          registered: {
            date: '2008-03-14T12:06:56.655Z',
            age: 12
          },
          phone: '(330)-319-7146',
          cell: '(467)-837-6370',
          id: {
            name: '',
            value: null
          },
          picture: {
            large: 'https://randomuser.me/api/portraits/women/17.jpg',
            medium:
              'https://randomuser.me/api/portraits/med/women/17.jpg',
            thumbnail:
              'https://randomuser.me/api/portraits/thumb/women/17.jpg'
          },
          nat: 'TR'
        },
        {
          gender: 'female',
          name: {
            title: 'Ms',
            first: 'Alice',
            last: 'Wilson'
          },
          location: {
            street: {
              number: 4778,
              name: 'Russell Street'
            },
            city: 'Napier',
            state: 'Marlborough',
            country: 'New Zealand',
            postcode: 88710,
            coordinates: {
              latitude: '-28.5170',
              longitude: '-115.5192'
            },
            timezone: {
              offset: '+5:45',
              description: 'Kathmandu'
            }
          },
          email: 'alice.wilson@example.com',
          login: {
            uuid: '56062eb2-7b7a-4be5-8a5b-1d0edc7c76de',
            username: 'ticklishostrich634',
            password: 'test2',
            salt: '6UBXH6Nm',
            md5: 'a73cb5c2463a07c32d7f15583a5f6de6',
            sha1: 'b0c7f2afae85a5f2455c04423b83dd0fcdbe3c7e',
            sha256:
              '6bdaa14cd64b011e7cf5dbb1eb2d1e58e4cfea992a302b0772e76f529e6aee48'
          },
          dob: {
            date: '1959-03-16T01:14:10.805Z',
            age: 61
          },
          registered: {
            date: '2007-06-12T21:11:21.374Z',
            age: 13
          },
          phone: '(799)-586-6360',
          cell: '(769)-245-2065',
          id: {
            name: '',
            value: null
          },
          picture: {
            large: 'https://randomuser.me/api/portraits/women/30.jpg',
            medium:
              'https://randomuser.me/api/portraits/med/women/30.jpg',
            thumbnail:
              'https://randomuser.me/api/portraits/thumb/women/30.jpg'
          },
          nat: 'NZ'
        },
        {
          gender: 'female',
          name: {
            title: 'Mrs',
            first: 'Valerie',
            last: 'Miles'
          },
          location: {
            street: {
              number: 7486,
              name: 'Avondale Ave'
            },
            city: 'Austin',
            state: 'Idaho',
            country: 'United States',
            postcode: 34178,
            coordinates: {
              latitude: '46.1570',
              longitude: '-20.6522'
            },
            timezone: {
              offset: '+5:30',
              description: 'Bombay, Calcutta, Madras, New Delhi'
            }
          },
          email: 'valerie.miles@example.com',
          login: {
            uuid: 'c8ea3eda-9445-4bee-9daa-5a0b9e369409',
            username: 'bigduck696',
            password: '1976',
            salt: '5uxfwlZ9',
            md5: 'c36c7ca89fbd29ee9107bb83f417a508',
            sha1: 'd1148f67f56c78029f56586afb45ad191064c48f',
            sha256:
              '730a9a5cfe1b613190e30b97416eef72a9f27079d94c45383a8adfdabb150909'
          },
          dob: {
            date: '1993-12-13T16:13:48.316Z',
            age: 27
          },
          registered: {
            date: '2016-02-14T14:56:22.672Z',
            age: 4
          },
          phone: '(017)-425-8876',
          cell: '(401)-851-6532',
          id: {
            name: 'SSN',
            value: '235-64-3218'
          },
          picture: {
            large: 'https://randomuser.me/api/portraits/women/76.jpg',
            medium:
              'https://randomuser.me/api/portraits/med/women/76.jpg',
            thumbnail:
              'https://randomuser.me/api/portraits/thumb/women/76.jpg'
          },
          nat: 'US'
        }
      ],
      usersPage: 1,
      usersTotalPages: 100
    })

    expect(wrapper.find('User').length).toEqual(3)
    expect(
      wrapper.find('.users-list-container').exists()
    ).toBeTruthy()
  })

  it('should render place holder of no new users', () => {
    const wrapper = renderUserList()

    wrapper.update()
    expect(wrapper.exists('.help-title')).toEqual(true)
    expect(wrapper.find('.help-title').html()).toContain(
      '<div class="help-title">No new users </div>'
    )
  })
})
