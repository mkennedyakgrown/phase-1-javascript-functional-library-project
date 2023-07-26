const myEach = function (data, func) {
    for (let e in data) {
        func(data[e]);
    }
    return data;
}

const myMap = function (data, func) {
    const newArray = [];
    myEach(data, e => newArray.push(func(e)));
    return newArray;
}

const myReduce = function (data, func, acc) {
    const newArray = myMap(data, e => e);
    if (acc === undefined) {
        acc = newArray.shift();
    };
    myEach(newArray, e => acc = func(acc, e, newArray));
    return acc;
}

const myFind = function (data, func) {
    for (let e in data) {
        if (func(data[e]) === true) {
            return data[e];
        }
    }
    return undefined;
}

const myFilter = function (data, func) {
    const newArray = [];
    myEach(data, e => {
        if (func(e) === true) {
            newArray.push(e);
        }
    });
    return newArray;
}

const mySize = function (data) {
    let i = 0;
    myEach(data, e => i++);
    return i;
}

const myFirst = function (data, n = 1) {
    if (n === 1) {
        return data[0];
    } else {
        const newArray = [];
        for (let i = 0; i < n; i++) {
            newArray.push(data[i]);
        };
        return newArray;
    };
}

const myLast = function (data, n = 1) {
    const length = mySize(data) - 1;
    if (n === 1) {
        return data[length];
    } else {
        const newArray = [];
        for (let i = length - n + 1; i <= length; i++) {
            newArray.push(data[i]);
        };
        return newArray;
    }
}

const mySortBy = function (data, func) {
    const newArray = myMap(data, e=>e);
    return newArray.sort((a, b) => {
        a = func(a);
        b = func(b);
        if (a < b) {
            return -1
        };
        if (a > b) {
            return 1;
        };
        return 0;
    })
}

const myFlatten = function (data, bool, newArr = []) {
    const newArray = [];
    const parseArray = function (e) {
        console.log(e);
        if (typeof(e) !== 'object') {
            console.log(true);
            newArray.push(e);
        } else {
            if (bool !== true) {
                myEach(e, parseArray);
            } else if (bool === true) {
                myEach(e, i => {
                    newArray.push(i);
                })
            }
        };
        console.log(newArray);
    };
    myEach(data, parseArray);
    return newArray;
}

const myKeys = function (data) {
    const newArray = [];
    for (let key in data) {
        newArray.push(key);
    };
    return newArray;
}

const myValues = function (data) {
    return myMap(data, e => e);
}