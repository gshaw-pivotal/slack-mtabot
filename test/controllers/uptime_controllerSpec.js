const assert = require('assert')

const Botmock = require('botkit-mock')
const uptimeController = require('../../src/controllers/uptime_controller.js')

describe('uptime controller test', () => {
    beforeEach(() => {
        this.controller = Botmock({})
        this.bot = this.controller.spawn({type: 'slack'})

        uptimeController(this.controller)
    })

    it('', () => {
        return this.bot.usersInput(
            [
                {
                    user: 'aUserId',
                    channel: 'aChannel',
                    messages: [
                        {
                            text: 'uptime',
                            isAssertion: true
                        }
                    ]
                }
            ]
        ).then((message) => {
            return assert.equal(message.text, 'mtabot has been up for: ')
        })
    })
})