const path = require('path');

const _trace = (msg) => {
    var _ = Error.prepareStackTrace;
	Error.prepareStackTrace = function (_, stack) { return stack };
	var stack = new Error().stack.slice(1);
    Error.prepareStackTrace = _;
    return '['+path.basename(stack[1].getFileName())+':'+(stack[1].getFunctionName() || 'anonymous')+':'+stack[1].getLineNumber()+'] '+msg;
}

module.exports = {
    log: data => console.log("\033[90m"  + _trace(data) + "\033[0m"),
    success: data => console.log("\033[92m"  + _trace(data) + "\033[0m"),
    warn: data => console.log("\033[93m"  + _trace(data) + "\033[0m"),
    error: data => console.log("\033[91m"  + _trace(data) + "\033[0m"),
    notice: data => console.log("\033[94m"  + _trace(data) + "\033[0m"),
};