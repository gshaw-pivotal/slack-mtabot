require('../responders/status_responder.js');

module.exports = function (controller) {
    controller.hears(['status'], 'direct_message,direct_mention,mention', function(bot, message) {
        var messageText = message.text.toLowerCase()
        if (messageText.endsWith('status')) {
            statusResponse(controller, bot, message, 'The current status of all MTA lines are:')
        }
        else {
            var line = messageText.split('status')[1].trim().split('\\s+|,\\s?')
            statusResponse(controller, bot, message, 'The current status of ' + line[0].toUpperCase() + ' trains is:')
        }
    })
}