module.exports = function (controller) {
    controller.hears(['uptime'], 'direct_message', function(bot, message) {
        bot.reply(message, 'mtabot has been up for: ')
    })
}