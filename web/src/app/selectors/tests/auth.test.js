import { getAccessTokenSelector } from '../auth'

describe('getAccessTokenSelector', () => {
  it('should return access token', () => {
    const mockAccesstoken = 'wjqdiojqwdoijqwd928921'
    const mock = {
      data: {
        access_token: mockAccesstoken
      }
    }

    const resultAccessToken = getAccessTokenSelector(mock)

    expect(resultAccessToken).toBe(mockAccesstoken)
  })
})
