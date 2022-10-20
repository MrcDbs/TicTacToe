
const setPosition = (horizontal, vertical, symbol, matrix) => {
    if (symbol === 'x' && matrix[horizontal][vertical] == 0) {
        matrix[horizontal][vertical] = 1;
    }
    else if (symbol === 'o' && matrix[horizontal][vertical] == 0) {
        matrix[horizontal][vertical] = -1;
    }
}

const checkWinner = (result, matrix) => {
    let sum;
    for (let i = 0; i < 3; i++) {
        sum = 0;
        for (let j = 0; j < 3; j++) {
            sum += matrix[i][j];
        }
        if (sum == result) {
            return sum;
        }
    }
    for (let i = 0; i < 3; i++) {
        sum = 0;
        for (let j = 0; j < 3; j++) {
            sum += matrix[j][i];
        }
        if (sum == result) {
            return sum;
        }
    }
    if (matrix[0][0] + matrix[1][1] + matrix[2][2] == result || matrix[0][2] + matrix[1][1] + matrix[2][0] == result) {
        return result;
    }
    return 0;
}

export default MossaTris;