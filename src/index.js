module.exports = function reverse(n) {
    const str = Math.abs(n).toString();
    const arr = str.split("").reverse().join("");
    const num = Number(arr);
    return num;
};
