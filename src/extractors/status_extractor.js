var subwayLines = new Map()

getLineStatus = function (line) {
    if (subwayLines.has(line)) {
        return subwayLines.get(line)
    }

    return 'Line not found'
}

extractSubwayStatus = function (statusText) {
    var subway = extractSubwaySection(statusText)
    var lineGroups = extractSubwayLineGroups(subway)

    for (var lineIndex = 0; lineIndex < lineGroups.length; lineIndex++) {
        extractLineInfo(lineGroups[lineIndex])
    }
}

extractSubwaySection = function (text) {
    var subwayStartIndex = text.indexOf('<subway>')
    var subwayEndIndex = text.indexOf('</subway>')

    if (subwayStartIndex > -1 && (subwayEndIndex > (subwayStartIndex + 8))) {
        return text.substring(subwayStartIndex + 8, subwayEndIndex).trim()
    }

    return ''
}

extractSubwayLineGroups = function (text) {
    var lineGroups = text.split(/<\/line>\s+<line>/)
    return lineGroups
}

extractLineInfo = function (lineGroup) {
    var subwayLineInfo
    var lineID = extractPattern(lineGroup, /<name>(.*?)<\/name>/).replace('<name>', '').replace('<\/name>', '')

    if (lineID.length > 1 && lineID !== 'SIR') {
        if (lineID === 'NQR') {
            lineID = 'NQRW'
        }

        for (var index = 0; index < lineID.length; index++) {
            subwayLineInfo = buildSubwayLineInfo(lineID.charAt(index), lineGroup)
            subwayLines.set(lineID.charAt(index), subwayLineInfo)
        }
    }
    else {
        subwayLineInfo = buildSubwayLineInfo(lineID, lineGroup)
        subwayLines.set(lineID, subwayLineInfo)
    }
}

extractPattern = function (text, regex) {
    var result = text.match(regex)

    if (result.length > 0) {
        return result[0]
    }
    return ''
}

buildSubwayLineInfo = function (line, lineGroup) {
    return '*GOOD SERVICE*'
}