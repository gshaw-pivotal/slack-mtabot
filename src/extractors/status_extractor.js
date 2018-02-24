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
    var lineID = extractPattern(lineGroup, /<name>(.*?)<\/name>/).replace('<name>', '').replace('<\/name>', '')

    subwayLines.set(lineID, '*GOOD SERVICE*')
}

extractPattern = function (text, regex) {
    var result = text.match(regex)

    if (result.length > 0) {
        return result[0]
    }
    return ''
}