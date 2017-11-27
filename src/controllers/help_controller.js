module.exports = function (controller) {
    controller.hears(['help'], 'direct_message,direct_mention,mention', function(bot, message) {
        bot.reply(message,
            'Hi, I am mtabot\n' +
            'You can utilise me like so:\n' +
            '\'@mtabot status\' - get the status of all MTA subway lines\n' +
            '\'@mtabot status n\' - get the status of the N line\n' +
            '\'@mtabot status n w\' - get the status of the N & W lines\n' +
            '\'@mtabot uptime\' - get my current uptime, since last restart')
    })
}