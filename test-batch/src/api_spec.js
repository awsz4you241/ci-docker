//////////////////////////////////////////////////////////////////
const axios = require("axios")
//①
const baseUrl = 'http://' + process.env.API_HOST + ':3000/api/tax'
describe('GET /price', () => {
  it('tax for normal tax rate', async done => {
    const price = 'price=2000'
    const flag = ''
    const testUrl = baseUrl + '?' + price + '&' + flag
    const { data: { tax, included } } = await axios.get(testUrl)
    expect(tax).toBe(200)
    expect(included).toBe(2200)
    done()
  })
  it('tax for reduced tax rate', async done => {
    const price = 'price=2000'
    const flag = 'flag=true'
    const testUrl = baseUrl + '?' + price + '&' + flag
    const { data: { tax, included } } = await axios.get(testUrl)
    expect(tax).toBe(160)
    expect(included).toBe(2160)
    done()
  })
})
//////////////////////////////////////////////////////////////////
