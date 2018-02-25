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

    it('for the W line that is missing from the status file, it returns the status for that line ', function () {
        const result = getLineStatus('W')
        expect(result).toBe('*GOOD SERVICE*')
    })

    it('for a subway line not part of a group and has delays, it returns the status for that line, reflecting the delay ', function () {
        const result = getLineStatus('G')
        expect(result).toBe('*DELAYS* 03/13/2017 11:49PM\nDelays Posted: 03/13/2017 11:49PM Due to FDNY Activity at 4 Av-9 St, southbound [F] and [G] trains are running with delays. Allow additional travel time.')
    })

    it('for a subway line part of a group and has a service change, it returns the status for that line, reflecting the service change', function () {
        const result = getLineStatus('E')
        expect(result).toBe('*SERVICE CHANGE* 03/13/2017 11:42PM\nService Change Posted: 03/13/2017 11:42PM Due to NYC Transit Cold Weather Plan, the following service changes are in effect: [E] trains are running local between Queens Plaza and Forest Hills-71 Av in both directions. [F] trains are running local between 21 St-Queensbridge and Forest Hills-71 Av in both directions. Allow additional travel time.')
    })
})