require('../data/subway_lines')

formatTextStatusAllLines = function () {
    return 'The current status of all MTA lines are:'
}

formatTextStatusSingleLine = function (line) {
    if (isValidLine(line)) {
        return 'The current status of ' + line.toUpperCase() + ' trains is:'
    }
    else {
        return 'Unknown train ' + line.toUpperCase()
    }
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
    if (isValidLine(line)) {
        return {
            attachments: [
                {
                    pretext: 'The current status of ' + line.toUpperCase() + ' trains is:'
                }
            ]
        }
    }
    else {
        return {
            attachments: [
                {
                    pretext: 'Unknown train ' + line.toUpperCase()
                }
            ]
        }
    }
}