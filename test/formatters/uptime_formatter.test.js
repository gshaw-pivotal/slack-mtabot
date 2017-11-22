require('../../src/formatters/uptime_formatter.js')

describe('uptime formatter test', () => {
    describe('given a value in seconds', () => {
        it('for a value under 1 minute, it displays time in seconds', () => {
            var result = formatUptime(30)
            expect(result).toContain('30 seconds')
        })

        it('for a value of 60, it displays exactly minutes', () => {
            var result = formatUptime(60)
            expect(result).toContain('1 minutes')
            expect(result).not.toContain('60 seconds')
        })

        it('for a value of 90, it displays minutes and seconds', () => {
            var result = formatUptime(90)
            expect(result).toContain('1 minutes 30 seconds')
        })

        it('for a value of 3600, it displays exactly hours', () => {
            var result = formatUptime(3600)
            expect(result).toContain('1 hours')
            expect(result).not.toContain('60 minutes')
        })

        it('for a value of 3660, it displays hours and minutes', () => {
            var result = formatUptime(3660)
            expect(result).toContain('1 hours 1 minutes')
        })

        it('for a value of 3665, it displays hours, minutes and seconds', () => {
            var result = formatUptime(3665)
            expect(result).toContain('1 hours 1 minutes 5 seconds')
        })

        it('for a value of 86400, it displays exactly days', () => {
            var result = formatUptime(86400)
            expect(result).toContain('1 days')
        })

        it('for a value of 90000, it displays days and hours', () => {
            var result = formatUptime(90000)
            expect(result).toContain('1 days 1 hours')
        })

        it('for a value of 90060, it displays days, hours and minutes', () => {
            var result = formatUptime(90060)
            expect(result).toContain('1 days 1 hours 1 minutes')
        })

        it('for a value of 90061, it displays days, hours, minutes and seconds', () => {
            var result = formatUptime(90061)
            expect(result).toContain('1 days 1 hours 1 minutes 1 seconds')
        })
    })
})