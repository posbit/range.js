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
print('orange([0, 1, 2, 3]).forEach(...): range over an array');
orange([0, 1, 2, 3]).forEach(function (item) { print(item); });

print();
print('range().over({foo: 0, bar: 1}).forEach(...): range over an object');
range().over({foo: 0, bar: 1}).forEach(function (item) { print(item); });

print();
print('orange({foo: 0, bar: 1}).forEach(...): range over an object');
orange({foo: 0, bar: 1}).forEach(function (item) { print(item); });

print();
print('range().over({foo: 0, bar: 1}).forEachOf(...): range over an object taking a (key,value,object) callback');
range().over({foo: 0, bar: 1}).forEachOf(function (key, value) { print(key, value); });

print();
print('range().over("Bang").forEach(...): range over a string');
range().over("Bang").forEach(function (item) { print(item); });

print();
print('orange("Bang").forEach(...): range over a string');
orange("Bang").forEach(function (item) { print(item); });

print();
print('range().forEach(...): empty range');
range().forEach(function (item) { print(item); });

print();
print('range().range(0, 4).forEach(...): overwriting range');
range().range(0, 4).forEach(function (item) { print(item); });
