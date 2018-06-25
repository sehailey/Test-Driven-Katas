function wrap(str, num) {
    var arr = str.split(' ');
    if (arr.map(elem => elem.length > num).reduce((a, b) => a || b)) {
        throw new Error('one of the words is too long!');
    } else {
        let begin = 0;
        while (begin !== str.lastIndexOf(' ')) {
            let chunk = str.slice(begin, num);
            newStr += chunk;
        }
    }

    return newStr;
}

module.exports = wrap;
