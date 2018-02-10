const Botmock = require('botkit-mock')
const statusController = require('../../src/controllers/status_controller.js')

describe('status controller test', () => {
    beforeEach(() => {
        this.controller = Botmock({})
        this.bot = this.controller.spawn({type: 'slack'})

        statusController(this.controller)
    })

    describe('for plain text requests', () => {
        describe('upon receiving a direct message ending with status-text keyword', () => {
            it('responds with a message indicating the status of all mta subway lines', () => {
                return this.bot.usersInput(
                    [
                        {
                            type: 'direct_message',
                            user: 'aUserId',
                            channel: 'aChannel',
                            messages: [
                                {
                                    text: 'status-text',
                                    isAssertion: true
                                }
                            ]
                        }
                    ]
                ).then((message) => {
                    return expect(message.text).toContain('The current status of all MTA lines are:')
                })
            })
        })

        describe('upon receiving a direct mention ending with status-text keyword', () => {
            it('responds with a message indicating the status of all mta subway lines', () => {
                return this.bot.usersInput(
                    [
                        {
                            type: 'direct_mention',
                            user: 'aUserId',
                            channel: 'aChannel',
                            messages: [
                                {
                                    text: 'status-text',
                                    isAssertion: true
                                }
                            ]
                        }
                    ]
                ).then((message) => {
                    return expect(message.text).toContain('The current status of all MTA lines are:')
                })
            })
        })

        describe('upon receiving a mention ending with status-text keyword', () => {
            it('responds with a message indicating the status of all mta subway lines', () => {
                return this.bot.usersInput(
                    [
                        {
                            type: 'mention',
                            user: 'aUserId',
                            channel: 'aChannel',
                            messages: [
                                {
                                    text: 'status-text',
                                    isAssertion: true
                                }
                            ]
                        }
                    ]
                ).then((message) => {
                    return expect(message.text).toContain('The current status of all MTA lines are:')
                })
            })
        })

        describe('upon receiving a direct message containing (but not ending with) the status-text keyword', () => {
            it('responds with a message indicating the status for a line', () => {
                return this.bot.usersInput(
                    [
                        {
                            type: 'direct_message',
                            user: 'aUserId',
                            channel: 'aChannel',
                            messages: [
                                {
                                    text: 'status-text n',
                                    isAssertion: true
                                }
                            ]
                        }
                    ]
                ).then((message) => {
                    return expect(message.text).toContain('The current status of N trains is:')
                })
            })
        })

        describe('upon receiving a direct mention containing (but not ending with) the status-text keyword', () => {
            it('responds with a message indicating the status for a line', () => {
                return this.bot.usersInput(
                    [
                        {
                            type: 'direct_mention',
                            user: 'aUserId',
                            channel: 'aChannel',
                            messages: [
                                {
                                    text: 'status-text w',
                                    isAssertion: true
                                }
                            ]
                        }
                    ]
                ).then((message) => {
                    return expect(message.text).toContain('The current status of W trains is:')
                })
            })
        })

        describe('upon receiving a mention containing (but not ending with) the status-text keyword', () => {
            it('responds with a message indicating the status for a line', () => {
                return this.bot.usersInput(
                    [
                        {
                            type: 'mention',
                            user: 'aUserId',
                            channel: 'aChannel',
                            messages: [
                                {
                                    text: 'status-text r',
                                    isAssertion: true
                                }
                            ]
                        }
                    ]
                ).then((message) => {
                    return expect(message.text).toContain('The current status of R trains is:')
                })
            })
        })

        describe('when an invalid line is provided', () => {
            describe('upon receiving a direct message containing (but not ending with) the status-text keyword', () => {
                it('should respond with a message indicating unknown train', () => {
                    return this.bot.usersInput(
                        [
                            {
                                type: 'direct_message',
                                user: 'aUserId',
                                channel: 'aChannel',
                                messages: [
                                    {
                                        text: 'status-text x',
                                        isAssertion: true
                                    }
                                ]
                            }
                        ]
                    ).then((message) => {
                        return expect(message.text).toContain('Unknown train X')
                    })
                })
            })
        })
    })

    describe('for rich text requests', () => {
        describe('upon receiving a direct message ending with status keyword', () => {
            it('responds with a message indicating the status of all mta subway lines', () => {
                return this.bot.usersInput(
                    [
                        {
                            type: 'direct_message',
                            user: 'aUserId',
                            channel: 'aChannel',
                            messages: [
                                {
                                    text: 'status',
                                    isAssertion: true
                                }
                            ]
                        }
                    ]
                ).then((message) => {
                    return expect(message.attachments[0].pretext).toContain('The current status of all MTA lines are:')
                })
            })
        })

        describe('upon receiving a direct mention ending with status keyword', () => {
            it('responds with a message indicating the status of all mta subway lines', () => {
                return this.bot.usersInput(
                    [
                        {
                            type: 'direct_mention',
                            user: 'aUserId',
                            channel: 'aChannel',
                            messages: [
                                {
                                    text: 'status',
                                    isAssertion: true
                                }
                            ]
                        }
                    ]
                ).then((message) => {
                    return expect(message.attachments[0].pretext).toContain('The current status of all MTA lines are:')
                })
            })
        })

        describe('upon receiving a mention ending with status keyword', () => {
            it('responds with a message indicating the status of all mta subway lines', () => {
                return this.bot.usersInput(
                    [
                        {
                            type: 'mention',
                            user: 'aUserId',
                            channel: 'aChannel',
                            messages: [
                                {
                                    text: 'status',
                                    isAssertion: true
                                }
                            ]
                        }
                    ]
                ).then((message) => {
                    return expect(message.attachments[0].pretext).toContain('The current status of all MTA lines are:')
                })
            })
        })

        describe('upon receiving a direct message containing (but not ending with) the status keyword', () => {
            it('responds with a message indicating the status for a line', () => {
                return this.bot.usersInput(
                    [
                        {
                            type: 'direct_message',
                            user: 'aUserId',
                            channel: 'aChannel',
                            messages: [
                                {
                                    text: 'status n',
                                    isAssertion: true
                                }
                            ]
                        }
                    ]
                ).then((message) => {
                    return expect(message.attachments[0].pretext).toContain('The current status of N trains is:')
                })
            })
        })

        describe('upon receiving a direct mention containing (but not ending with) the status keyword', () => {
            it('responds with a message indicating the status for a line', () => {
                return this.bot.usersInput(
                    [
                        {
                            type: 'direct_mention',
                            user: 'aUserId',
                            channel: 'aChannel',
                            messages: [
                                {
                                    text: 'status w',
                                    isAssertion: true
                                }
                            ]
                        }
                    ]
                ).then((message) => {
                    return expect(message.attachments[0].pretext).toContain('The current status of W trains is:')
                })
            })
        })

        describe('upon receiving a mention containing (but not ending with) the status keyword', () => {
            it('responds with a message indicating the status for a line', () => {
                return this.bot.usersInput(
                    [
                        {
                            type: 'mention',
                            user: 'aUserId',
                            channel: 'aChannel',
                            messages: [
                                {
                                    text: 'status r',
                                    isAssertion: true
                                }
                            ]
                        }
                    ]
                ).then((message) => {
                    return expect(message.attachments[0].pretext).toContain('The current status of R trains is:')
                })
            })
        })

        describe('when an invalid line is provided', () => {
            describe('upon receiving a direct message containing (but not ending with) the status keyword', () => {
                it('should respond with a message indicating unknown train', () => {
                    return this.bot.usersInput(
                        [
                            {
                                type: 'direct_message',
                                user: 'aUserId',
                                channel: 'aChannel',
                                messages: [
                                    {
                                        text: 'status x',
                                        isAssertion: true
                                    }
                                ]
                            }
                        ]
                    ).then((message) => {
                        return expect(message.attachments[0].pretext).toContain('Unknown train X')
                    })
                })
            })
        })
    })
})
