module.exports = function towelSort(matrix) {
    if (matrix == undefined) return [];

    let result = [];
    let isDirect = true;

    for (let cell of matrix) {
        if (isDirect) {
            result = result.concat(cell);
            isDirect = false;
        } else {
            result = result.concat(cell.reverse());
            isDirect = true;
        }
    }
    
    return result;
};
