require('../formatters/status_formatter')
require('../responders/status_responder');

module.exports = function (controller) {
    controller.hears(['status-text'], 'direct_message,direct_mention,mention', function(bot, message) {
        var messageText = message.text.toLowerCase()
        if (messageText.endsWith('status-text')) {
            statusResponse(controller, bot, message, formatTextStatusAllLines())
        }
        else {
            var line = messageText.split('status-text')[1].trim().split('\\s+|,\\s?')
            statusResponse(controller, bot, message, formatTextStatusSingleLine(line[0]))
        }
    })

    controller.hears(['status'], 'direct_message,direct_mention,mention', function(bot, message) {
        var messageText = message.text.toLowerCase()
        if (messageText.endsWith('status')) {
            statusResponse(controller, bot, message, formatRichStatusAllLines())
        }
        else {
            var line = messageText.split('status')[1].trim().split('\\s+|,\\s?')
            statusResponse(controller, bot, message, formatRichStatusSingleLine(line[0]))
        }
    })
}