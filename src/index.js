
exports.min = function min(array) {
    return array == undefined || array == 0 ? 0 : Math.min(...array);
};

exports.max = function max(array) {
    return array == undefined || array == 0 ? 0 : Math.max(...array);
};

exports.avg = function avg(array) {
    return array == 0 || array == undefined
        ? 0
        : array.reduce((a, b) => a + b, 0) / array.length;
};
