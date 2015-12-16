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


----


## More advanced iteration

This section presents slightly more advanced iteration examples.


### Filtering

Iteration sequences may be filtered with the `.filter(function)->Range` method.
This method returns filtered range.
Ranges are filtered in place.

```
range(8).filter(function(i) {
   return ((i % 2) == 0);
}).forEach(function(i) {
    console.log(i);
});

0
2
4
6
```


### Mapping

Mapping functions do not return `Range()` but `Array` objects.
Otherwise, they work as expected.


1. `.map(function(Object)->Object)->Array`

```
range(4).map(function (i) {
    return (i*2);
}).forEach(function (i) {
    print(i);
});

0
2
4
6
```


2. `.mapOf(function(key, value)->Object)->Array`

This method can be used to easily get either keys, or values of an object.
The example below presents a way of obtaining an array (unsorted) with values.

```
orange({foo: 1, bar: 2}).mapOf(function (key, value) {
    return value;
}).forEach(function (i) {
    print(i);
});

1
2
```
