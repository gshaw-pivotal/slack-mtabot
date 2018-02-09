const subwayLines = ['1', '2', '3', '4', '5', '6', '7', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'J', 'L', 'M', 'N', 'Q', 'R', 'S', 'SIR', 'W', 'Z']

isValidLine = function(line) {
    return subwayLines.indexOf(line.toUpperCase()) > -1
}

getSubwayLines = function() {
    return subwayLines
}