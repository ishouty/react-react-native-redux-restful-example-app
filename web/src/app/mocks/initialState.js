import { NavigationLinkText } from '../constants/text/text'

export const initialState = {
  users: {
    users: [],
    page: 0,
    totalPages: 20
  },
  loading: {
    loading: {
      common: false
    }
  },
  notifications: {
    banner: {
      fail: false,
      success: false,
      message: ''
    }
  },
  modal: {
    modal: {
      userDetails: {
        display: false,
        details: {
          name: {
            first: '',
            last: ''
          },
          gender: '',
          email: '',
          phone: '',
          picture: '',
          location: {
            street: {
              number: '',
              street: ''
            },
            city: '',
            postcode: ''
          }
        }
      }
    }
  },
  previousRoute: [],
  navigation: {
    navigationLinks: {
      links: [
        {
          title: NavigationLinkText.item1,
          href: '/app/users',
          className: 'nav-users',
          icon: 'fa-user-circle-o'
        },
        {
          title: NavigationLinkText.item2,
          href: '/app/female-users',
          className: 'nav-female-users',
          icon: 'fa-female'
        },
        {
          title: NavigationLinkText.item3,
          href: '/app/male-users',
          className: 'nav-male-users',
          icon: 'fa-male'
        },
        {
          title: NavigationLinkText.item4,
          href: '/app/products',
          className: 'nav-products',
          icon: 'fa-newspaper-o'
        },
        {
          title: NavigationLinkText.item5,
          href: '/sign-out',
          className: 'nav-sign-out',
          icon: 'fa-sign-out'
        }
      ]
    }
  }
}
