function Range(first, last, step) {
    var sequence = [];

    this.forEach = function (callback) {
        sequence.forEach(callback);
        return this;
    };

    this.range = function (first, last, step) {
        if (first === undefined) {
            first = 0;
        }
        if (last === undefined) {
            // to make Range(10) produce [0, 1, 2, ..., 8, 9]
            last = first;
            first = 0;
        }
        if (!step) {
            // prevent 0-step ranges as they would create infinite loops
            // since the whole range sequence is created during range object construction
            step = 1;
        }

        sequence = [];
        for (var i = first; ((first < last) ? (i < last) : (i > last)); i += step) {
            sequence.push(i);
        }

        return this;
    };
    this.over = function (array) {
        var len = array.length;
        if (typeof(array) !== 'object' && len === undefined) {
            throw ('object "' + typeof(array) + '" is not iterable');
        }

        sequence = [];
        if (len) {
            for (var i = 0; i < len; ++i) {
                sequence.push(array[i]);
            }
        } else {
            Object.keys(array).forEach(function (i) {
                sequence.push(i);
            });
        }
        return this;
    };

    return this.range(first, last, step);
}

function range(first, last, step) {
    /** Simple range function.
     *
     *  Documentation by examples:
     *
     *      range(4)        -> [0, 1, 2, 3]
     *      range(1, 5)     -> [1, 2, 3, 4]
     *      range(0, 8, 2)  -> [0, 2, 4, 6]
     *
     *  The function does not return an array as such, but an object it returns may
     *  be used as one if the only thing needed is the .forEach() function.
     *
     */
    return (new Range(first, last, step));
}



print('Range() demonstration code');

print('range(4).forEach(...): simple range');
range(4).forEach(function (item) { print(item); });

print();
print('range(4, 8).forEach(...): range with specified outer bounds');
range(4, 8).forEach(function (item) { print(item); });

print();
print('range(8, 16, 2).forEach(...): range with step');
range(8, 16, 2).forEach(function (item) { print(item); });

print();
print('range(22, 14, -2).forEach(...): range with negative step');
range(22, 14, -2).forEach(function (item) { print(item); });

print();
print('range(23, 27, 0).forEach(...): range with step evaluating to zero (0, false, null, undefined) is not legal, step is silently set to 1');
range(23, 27, 0).forEach(function (item) { print(item); });

print();
print('range().over([0, 1, 2, 3]).forEach(...): range over an array');
range().over([0, 1, 2, 3]).forEach(function (item) { print(item); });

print();
print('range().over({foo: 0, bar: 1}).forEach(...): range over an object');
range().over({foo: 0, bar: 1}).forEach(function (item) { print(item); });

print();
print('range().over("Bang").forEach(...): range over a string');
range().over("Bang").forEach(function (item) { print(item); });

print();
print('range().forEach(...): empty range');
range().forEach(function (item) { print(item); });

print();
print('range().range(0, 4).forEach(...): overwriting range');
range().range(0, 4).forEach(function (item) { print(item); });
