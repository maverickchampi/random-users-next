import { getUsersRandoms } from '@/pages/users/api'
import axios from 'axios'

jest.mock('axios')

describe('getUsersRandoms', () => {
  it('returns the data from the API', async () => {
    const results = 1;
    const expectedParams = { results }
  
    await getUsersRandoms(results)
  
    expect(axios.get).toHaveBeenCalledWith(
      'https://randomuser.me/api',
      expect.objectContaining({
        params: expectedParams,
      })
    )
  })
})