# range.js
JavaScript ranges for easier iteration


## What can be iterated over?

Basically anything that exposes `length` key and
can be indexed will be treated as an array.

Objects have their keys iterated over.


----

## Range-based iteration

1. Simple range

```
> range(4).forEach(function (i) { console.log(i); });
0
1
2
3
```

2. Range with outer bounds

```
> range(4, 8).forEach(function (i) { console.log(i); });
4
5
6
7
```

3. Range with step

```
> range(0, 10, 2).forEach(function (i) { console.log(i); });
0
2
4
6
8
```

4. Range with negative step

```
> range(10, 0, -2).forEach(function (i) { console.log(i); });
10
8
6
4
2
```

5. Range with zero step changes step to 1

```
> range(0, 4, 0).forEach(function (i) { console.log(i); });
0
1
2
3
```


## Iterating over collections

The `range().over(...)` may be written as `orange(...)`.
The latter way is preferred in the examples.

1. Range over an array

```
> orange([0, 1, 2, 3]).forEach(function (i) { console.log(i); });
0
1
2
3
```

2. Range over an object (simple)

```
> orange({foo: 0, bar: 1}).forEach(function (i) { console.log(i); });
foo
bar
```

2. Range over an object (less simple)

```
> orange({foo: 0, bar: 1}).forEachOf(function (key, value) { console.log(key, value); });
foo 0
bar 1
```

3. Range over a string

```
> orange("Spam").forEach(function (s) { console.log(s); });
S
p
a
m
```
