## Calculating Fibonacci numbers in JavaScript (ES6) using tail recursion

Based upon a [blog post](https://peter-braun.org/de/2012/06/fibonacci-numbers-in-scala/) by Peter Braun.

As of Node v6.6.0, Node enables V8's TCO (tail call optimisation) support.  Strict mode must be used along with the ```--harmony_tailcalls``` flag for Node.

## Installation
```npm install```

Installs performance-now package for outputting time taken in millis.

## Running
To run the algorithm with TCO:

```npm run tail <nth Fibonacci number>```

e.g. ```npm run tail 6```


To run the algorithm without TCO:

```npm run noTail <nth Fibonacci number>```

e.g. ```npm run noTail 6```