formatUptime = function (uptime) {
    var result = ''
    var processedUptime = uptime

    if (processedUptime >= 86400) {
        result = result + Math.floor(processedUptime / 86400) + ' days'
        processedUptime = processedUptime % 86400
    }
    if (processedUptime >= 3600) {
        result = result + ' ' + Math.floor(processedUptime / 3600) + ' hours'
        processedUptime = processedUptime % 3600
    }
    if (processedUptime >= 60) {
        result = result + ' ' + Math.floor(processedUptime / 60) + ' minutes'
        processedUptime = processedUptime % 60
    }
    if (processedUptime != 0) {
        result = result + ' ' + processedUptime + ' seconds'
    }

    return result.trim()
}