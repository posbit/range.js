function Range(first, last, step) {
    var sequence = [];
    var object = {};

    this.filter = function (callback) {
        sequence = sequence.filter(callback);
        return this;
    };

    this.forEach = function (callback) {
        sequence.forEach(callback);
        return this;
    };
    this.forEachOf = function (callback) {
        sequence.forEach(function (key) { callback(key, object[key], object); });
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

        object = array;
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
function orange(object) {
    return (new Range()).over(object);
}
