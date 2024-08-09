module.exports = function reverse(n) {
    if (String(n).length === 1) {
        return n;
    }

    return Number(
        String(n)
            .split("")
            .reverse()
            .filter((el) => Number.isInteger(+el))
            .join("")
    );
};
