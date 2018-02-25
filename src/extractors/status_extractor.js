var subwayLines = new Map()

getLineStatus = function (line) {
    if (subwayLines.has(line)) {
        return subwayLines.get(line).trim()
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

extractTextSegment = function (text) {
    var textStartIndex = text.indexOf('<text>')
    var textEndIndex = text.indexOf('</text>')

    if (textStartIndex > -1 && (textEndIndex > (textStartIndex + 6))) {
        return text.substring(textStartIndex + 6, textEndIndex).trim()
    }

    return ''
}

cleanupTextSegment = function (text) {
    text = text.replace(/\\r/g, '')
                .replace(/\\n/g, '')
                .replace(/&amp;/g, ' ')
                .replace(/nbsp;/g, ' ')
                .replace(/bull;/g, ' ')
                .replace(/\\[TP\\]/g, ' ')
                .replace(/\\[ad\\]/g, ' ')
                .replace(/Â/, '')

    var start = text.indexOf('&lt;')
    var end

    while (start >= 0) {
        end = text.indexOf('&gt;', start)
        text = text.substring(0, start) + ' ' + text.substring(end + 4)
        start = text.indexOf('&lt;')
    }

    text = text.replace(/\s{2,}/g, ' ')

    return text.trim()
}

buildSubwayLineInfo = function (line, lineGroup) {
    return '*' +
        extractPattern(lineGroup, /<status>(.*?)<\/status>/).replace('<status>', '').replace('<\/status>', '*') +
        extractPattern(lineGroup, /<Date>(.*?)<\/Date>/).replace('<Date>', ' ').replace('<\/Date>', '') +
        extractPattern(lineGroup, /<Time>(.*?)<\/Time>/).replace('<Time>', ' ').replace('<\/Time>', '\n') +
        cleanupTextSegment(extractTextSegment(lineGroup))
}