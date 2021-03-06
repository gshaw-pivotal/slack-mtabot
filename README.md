# MTA Slackbot #

A slackbot that you can ask for the current status of the subway line(s); including Staten Island; in NYC managed by the MTA. This slackbot is built using Springboot.

## MTA Slackbot (slack-mtabot) vs Nysub Slackbot (slack-nysub) ##

This slackbot offers exactly the same features as our previous nysub slackbot. So why build another? Simply put the existing nysub slackboot spent more time not responding to our '@nysub' than actually providing useful information.

We have not been able to determine the reason. The only difference between nysub and our other slackbots (airbot and weatherbot) is that nysub was built using spring-boot instead of nodejs.

The nodejs bots seem to stay connected to the slack channel and have a much better response rate when a message is directed at them. The spring-boot based boot spent more time offline; at least from slack's point of view; than online.

Thus it was decided to recreate the nysub with nodejs to see if we could get better results in time connected to the slack channel.

## Getting Started ###

```
    git clone https://github.com/gshaw-pivotal/
```

## Integration with Slack ##

Bots and apps need to be given permission to integrate with slack. Thus you need to obtain a Slack API token for the bot.

Once a slack api token is obtained, it will need to be provided to the bot as an environment variable named 'token'.

When obtaining the API token you also have to give the bot a name that will be used to address it within slack. We used 'mtabot', but you may use whatever name you like.

After the slackbot is running / deployed it will not have access to any channels until invited. Bots are invited just the same as any other slack user.

## Starting mtabot Locally ##

mtabot can be started locally with the following command executed from the root of this repo.

```
    token=SLACK_API_TOKEN node src/mta_bot.js
```


## Using mta Slackbot ##

After being invited into a slack channel, the bot can be interacted with the following commands:

1. '@mtabot' results in the bot responding with instructions on how to use it.
2. '@mtabot uptime' results in the bot responding with how long it has been online.
3. '@mtabot status' results in the bot responding with the current reported status of all of the MTA's subway lines.
4. '@mtabot status x' where x is a subway line identifier, results in the bot responding with the status of the specified subway line. This command can include multiple lines, separated by either space or comma.

When the status of a subway line is returned, it comes in the following format;

```
    [line id]: [status label] [date of status] [time of status]
    [detailed status message if present]
```

If a subway line has a status label other than `GOOD SERVICE` but the detailed status message does not directly mention said subway line, then the detailed status message is changed to;

```
    Line is not directly affected, please see {[line id]...} for more info
```

where the line id(s) listed are those that were present in the original detailed status message from the MTA.

## Supported Subway Lines ##

The bot supports all of the MTA's subway lines as at November 2017. This includes;

1, 2, 3, 4, 5, 6, 7, A, B, C, D, E, F, G, J, L, M, N, Q, R, S, SIR, W, Z

The above list is the line ids that the bot utilises and is the list users should use when asking the bot for line status.

## Notes ##

- A manifest file is present to support deployments to cloudfoundry.