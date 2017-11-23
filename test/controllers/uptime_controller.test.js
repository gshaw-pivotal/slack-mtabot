const Botmock = require('botkit-mock')
const uptimeController = require('../../src/controllers/uptime_controller.js')

describe('uptime controller test', () => {
    beforeEach(() => {
        this.controller = Botmock({})
        this.bot = this.controller.spawn({type: 'slack'})

        uptimeController(this.controller)
    })

    describe('upon receiving a direct message with uptime keyword', () => {
        it('responds with a message indicating how long the bot has been up', () => {
            return this.bot.usersInput(
                [
                    {
                        type: 'direct_message',
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
                return expect(message.text).toContain('mtabot has been up for: ')
            })
        })
    })

    describe('upon receiving a direct mention with uptime keyword', () => {
        it('responds with a message indicating how long the bot has been up', () => {
            return this.bot.usersInput(
                [
                    {
                        type: 'direct_mention',
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
                return expect(message.text).toContain('mtabot has been up for: ')
            })
        })
    })

    describe('upon receiving a mention with uptime keyword', () => {
        it('responds with a message indicating how long the bot has been up', () => {
            return this.bot.usersInput(
                [
                    {
                        type: 'mention',
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
                return expect(message.text).toContain('mtabot has been up for: ')
            })
        })
    })
})