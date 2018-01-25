formatTextStatusAllLines = function () {
    return 'The current status of all MTA lines are:'
}

formatTextStatusSingleLine = function (line) {
    return 'The current status of ' + line.toUpperCase() + ' trains is:'
}

formatRichStatusAllLines = function () {
    return {
        attachments:[
            {
                pretext: 'The current status of all MTA lines are:'
            }
        ]
    }
}

formatRichStatusSingleLine = function (line) {
    return {
        attachments:[
            {
                pretext: 'The current status of ' + line.toUpperCase() + ' trains is:'
            }
        ]
    }
}