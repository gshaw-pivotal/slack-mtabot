require('../../src/formatters/status_formatter')

describe('mta status formatter', () => {
    describe('for the plain text response', () => {
        describe('when the status of all lines is requested', () => {
            it('returns the header text for the status of all lines', () => {
                expectation = 'The current status of all MTA lines are:'

                expect(formatTextStatusAllLines()).toContain(expectation)
            })
        })

        describe('when the status of a single line is requested', () => {
            it('returns the header text for the single line requested', () => {
                expectation = 'The current status of N trains is:'

                expect(formatTextStatusSingleLine('n')).toContain(expectation)
            })
        })

        describe('when an invalid line is requested', () => {
            it('returns unknown train', () => {
                expectation = 'Unknown train X'

                expect(formatTextStatusSingleLine('x')).toContain(expectation)
            })
        })
    })

    describe('for the rich response', () => {
        describe('when the status of all lines is requested', () => {
            it('returns the header text for the status of all lines', () => {
                expectation = 'The current status of all MTA lines are:'

                expect(formatRichStatusAllLines().attachments[0].pretext).toContain(expectation)
            })
        })

        describe('when the status of a single line is requested', () => {
            it('returns the header text for the single line requested', () => {
                expectation = 'The current status of N trains is:'

                expect(formatRichStatusSingleLine('n').attachments[0].pretext).toContain(expectation)
            })
        })

        describe('when an invalid line is requested', () => {
            it('returns unknown train', () => {
                expectation = 'Unknown train X'

                expect(formatRichStatusSingleLine('x').attachments[0].pretext).toContain(expectation)
            })
        })
    })
})