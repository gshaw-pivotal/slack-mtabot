require('../responders/help_responder.js');

module.exports = function (controller) {
    controller.hears(['help'], 'direct_message,direct_mention,mention', function(bot, message) {
        helpResponse(controller, bot, message);
    })
}