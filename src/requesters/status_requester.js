const axios = require('axios')

const rootUrl = 'http://web.mta.info'
const statusFile = '/status/serviceStatus.txt'

requestForStatusFile = function () {
    return axios
        .get(rootUrl + statusFile)
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return 'Unable to obtain status file'
        })
}