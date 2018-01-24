helpResponse = function (controller, bot, causeMessage){
    controller.storage.users.get(causeMessage.user,function(err, user) {
        bot.reply(causeMessage,
            'Hi, I am mtabot\n' +
            'You can utilise me like so:\n' +
            '\'@mtabot status\' - get the status of all MTA subway lines\n' +
            '\'@mtabot status n\' - get the status of the N line\n' +
            '\'@mtabot status n w\' - get the status of the N & W lines\n' +
            '\'@mtabot uptime\' - get my current uptime, since last restart')
    });
};