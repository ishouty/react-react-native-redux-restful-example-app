import { MockedProvider } from '@apollo/client/testing'
import { Provider } from 'react-redux'

import Products from './Products'
import { GET_PRODUCTS } from '../../gql/Products'
import React from 'react'
import configureStore from 'redux-mock-store'
import { mount, shallow } from 'enzyme'
import 'jsdom-global/register'
import thunk from 'redux-thunk'

const mock = [
  {
    request: {
      query: GET_PRODUCTS
    },
    result: {
      data: {
        products: [
          {
            title: 'update product test 123',
            price: 45,
            description: 'updated product description',
            imagesUrl: []
          },
          {
            title: 'Example title - 0.5758645923145482',
            price: 20,
            description: 'Example description - 0.6696883964614986',
            imagesUrl: ['test']
          },
          {
            title: 'Example title - 0.45397506868127824',
            price: 20,
            description: 'Example description - 0.41950702808386153',
            imagesUrl: ['test']
          },
          {
            title:
              'Example title - delete product - 0.7756082328088967',
            price: 20,
            description:
              'Example description - delete product - 0.10141527756372937',
            imagesUrl: ['test']
          },
          {
            title:
              'Example title - delete product - 0.7389270191064203',
            price: 20,
            description:
              'Example description - delete product - 0.6120252890873839',
            imagesUrl: ['test']
          },
          {
            title:
              'Example title - delete product - 0.7652017141606751',
            price: 20,
            description:
              'Example description - delete product - 0.6401018624147279',
            imagesUrl: ['test']
          },
          {
            title:
              'Example title - delete product - 0.8049186366337762',
            price: 20,
            description:
              'Example description - delete product - 0.6179005735436838',
            imagesUrl: ['test']
          },
          {
            title:
              'Example title - delete product - 0.0705555430183058',
            price: 20,
            description:
              'Example description - delete product - 0.7745051026748251',
            imagesUrl: ['test']
          },
          {
            title:
              'Example title - delete product - 0.07482406919986628',
            price: 20,
            description:
              'Example description - delete product - 0.4359798824015042',
            imagesUrl: ['test']
          },
          {
            title:
              'Example title - delete product - 0.12316198019762425',
            price: 20,
            description:
              'Example description - delete product - 0.29841896503672904',
            imagesUrl: ['test']
          },
          {
            title:
              'Example title - delete product - 0.9430712331461675',
            price: 20,
            description:
              'Example description - delete product - 0.9060528625571174',
            imagesUrl: ['test']
          },
          {
            title:
              'Example title - delete product - 0.8596184396008077',
            price: 20,
            description:
              'Example description - delete product - 0.3926787245580048',
            imagesUrl: ['test']
          },
          {
            title:
              'Example title - delete product - 0.9132493092710028',
            price: 20,
            description:
              'Example description - delete product - 0.18670245114358175',
            imagesUrl: ['test']
          },
          {
            title:
              'Example title - delete product - 0.2730635356846496',
            price: 20,
            description:
              'Example description - delete product - 0.6867941894945155',
            imagesUrl: ['test']
          },
          {
            title:
              'Example title - delete product - 0.16816561857029733',
            price: 20,
            description:
              'Example description - delete product - 0.07504741627217926',
            imagesUrl: ['test']
          },
          {
            title:
              'Example title - delete product - 0.6600907051066371',
            price: 20,
            description:
              'Example description - delete product - 0.7415029087610225',
            imagesUrl: ['test']
          },
          {
            title: 'Example title - 0.0889826663907527',
            price: 20,
            description: 'Example description - 0.3569805889924187',
            imagesUrl: ['test']
          },
          {
            title: 'Example title - 0.5896690333226859',
            price: 20,
            description: 'Example description - 0.8294819497668877',
            imagesUrl: ['test']
          },
          {
            title: 'Example title - 0.1264973619033638',
            price: 20,
            description: 'Example description - 0.8233475358302105',
            imagesUrl: ['test']
          },
          {
            title:
              'Example title - delete product - 0.7173661506740385',
            price: 20,
            description:
              'Example description - delete product - 0.08033821514700623',
            imagesUrl: ['test']
          },
          {
            title:
              'Example title - delete product - 0.18368938737992502',
            price: 20,
            description:
              'Example description - delete product - 0.31035279341397604',
            imagesUrl: ['test']
          },
          {
            title:
              'Example title - delete product - 0.3440030688530158',
            price: 20,
            description:
              'Example description - delete product - 0.012580443473381608',
            imagesUrl: ['test']
          },
          {
            title: 'Example title - 0.091668173038568',
            price: 20,
            description: 'Example description - 0.7173383688655999',
            imagesUrl: ['test']
          },
          {
            title:
              'Example title - delete product - 0.5151724111024554',
            price: 20,
            description:
              'Example description - delete product - 0.25655504427267095',
            imagesUrl: ['test']
          },
          {
            title:
              'Example title - delete product - 0.5430379065691016',
            price: 20,
            description:
              'Example description - delete product - 0.6762897717448075',
            imagesUrl: ['test']
          },
          {
            title: 'Example title - 0.43768151187509474',
            price: 20,
            description: 'Example description - 0.08141906268237964',
            imagesUrl: ['test']
          },
          {
            title: 'Example title - 0.24630625117101834',
            price: 20,
            description: 'Example description - 0.6518401339626698',
            imagesUrl: ['test']
          },
          {
            title: 'Example title - 0.4508516533881459',
            price: 20,
            description: 'Example description - 0.5934924095066647',
            imagesUrl: ['test']
          },
          {
            title: 'Example title - 0.8257651264114687',
            price: 20,
            description: 'Example description - 0.15742345229011234',
            imagesUrl: ['test']
          },
          {
            title: 'Example title - 0.8523629389101302',
            price: 20,
            description: 'Example description - 0.9661302688878131',
            imagesUrl: ['test']
          },
          {
            title: 'Example title - 0.986999386596985',
            price: 20,
            description: 'Example description - 0.19404552061804092',
            imagesUrl: ['test']
          },
          {
            title:
              'Example title - delete product - 0.7247842935856401',
            price: 20,
            description:
              'Example description - delete product - 0.8440714357470516',
            imagesUrl: ['test']
          },
          {
            title: 'Example title - 0.6161617459417634',
            price: 20,
            description: 'Example description - 0.18321327367148954',
            imagesUrl: ['test']
          },
          {
            title: 'Example title - 0.7698370232058875',
            price: 20,
            description: 'Example description - 0.0432334217378898',
            imagesUrl: ['test']
          },
          {
            title: 'Example title - 0.09464946489623349',
            price: 20,
            description: 'Example description - 0.791248494107593',
            imagesUrl: ['test']
          },
          {
            title: 'Example title - 0.27797681735155577',
            price: 20,
            description: 'Example description - 0.24115678085236603',
            imagesUrl: ['test']
          },
          {
            title: 'Example title - 0.3781029445648516',
            price: 20,
            description: 'Example description - 0.47110915121285557',
            imagesUrl: ['test']
          }
        ]
      }
    }
  }
]

const noResultsMock = [
  {
    request: {
      query: GET_PRODUCTS
    },
    result: {
      data: {
        products: []
      }
    }
  }
]

import { initialState } from '../../mocks/initialState'

const mockStore = configureStore([thunk])
const store = mockStore({ ...initialState })

//https://spectrum.chat/apollo/apollo-client/mockedprovider-doesnt-inject-client-in-context~a17546fa-d73c-4b4b-8237-c81680799ebb

describe('Products', () => {
  it('Should render loading whilst products are loading', async () => {
    const component = mount(
      <Provider store={store}>
        <MockedProvider mocks={noResultsMock} addTypename={false}>
          <Products route={{ title: 'test' }} />
        </MockedProvider>
      </Provider>
    )

    await new Promise((resolve) => setTimeout(resolve, 0)) // wait for response
  })

  it('Should render list of products', async () => {
    const wrapper = mount(
      <Provider store={store}>
        <MockedProvider mocks={mock} addTypename={false}>
          <Products route={{ title: 'test' }} />
        </MockedProvider>
      </Provider>
    )

    await new Promise((resolve) => setTimeout(resolve, 0)) // wait for response

    expect(
      wrapper.html().match(/class="user-container"/gi).length
    ).toBe(37)
  })
})
