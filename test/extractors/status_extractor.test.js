require('../../src/extractors/status_extractor')
const fs = require('fs')

describe('processing status extractor', () => {

    beforeAll(() => {
        try {
            const statusResponse = fs.readFileSync('./test/extractors/sample_status_response.txt', 'utf8')
            extractSubwayStatus(statusResponse)
        } catch (e) {
            console.log('Unable to read file for test:', e.stack)
        }
    })

    it('for a subway line that does not exist, it returns line not found', () => {
        const result = getLineStatus('X')
        expect(result).toBe('Line not found')
    })

    it('for a subway line not part of a group, it returns the status for that line', () => {
        const result = getLineStatus('7')
        expect(result).toBe('*GOOD SERVICE*')
    })

    it('for the SIR line, it returns the status of that line', () => {
        const result = getLineStatus('SIR')
        expect(result).toBe('*GOOD SERVICE*')
    })

    it('for a subway line part of a group, it returns the status for that line ', function () {
        const result = getLineStatus('4')
        expect(result).toBe('*GOOD SERVICE*')
    })
})