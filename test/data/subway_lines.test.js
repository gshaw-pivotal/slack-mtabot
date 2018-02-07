require('../../src/data/subway_lines')

describe('subway lines', () => {
    it('given a valid subway line id, returns true', () => {
        expect(isValidLine('N')).toBe(true)
        expect(isValidLine('2')).toBe(true)
        expect(isValidLine('1')).toBe(true)
        expect(isValidLine('SIR')).toBe(true)
    })

    it('given an invalid line id, returns false', () => {
        expect(isValidLine('X')).toBe(false)
        expect(isValidLine('ACE')).toBe(false)
    })
})