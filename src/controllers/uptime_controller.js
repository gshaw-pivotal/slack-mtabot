require('../formatters/uptime_formatter.js')

module.exports = function (controller) {
    controller.hears(['uptime'], 'direct_message,direct_mention,mention', function(bot, message) {
        bot.reply(message, 'mtabot has been up for: ' + formatUptime(process.uptime()))
    })
}