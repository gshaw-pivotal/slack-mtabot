require('../../src/requesters/status_requester')
const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')

describe('for status requests', function () {

    const rootUrl = 'http://web.mta.info'

    const statusFile = '/status/serviceStatus.txt'

    const expectedResponse = 'A response'

    describe('for successful response', () => {
        it('should return the response received', () => {
            const mock = new MockAdapter(axios)
            mock.onGet(rootUrl + statusFile).reply(200, expectedResponse)

            requestForStatusFile().then(response => {
                expect(response).toEqual(expectedResponse)
                done()
            })
        })
    })
})