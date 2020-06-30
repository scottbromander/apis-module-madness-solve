# Module Madness

In this challenge, fork the provided GitHub repo, clone it and run `npm install`. After doing that, you will create three modules as specified below, update the *server.js* file to use these modules!

## Modules
### Module One (random-number.js)
The first module will **export** a function that can generate a random number after taking in a min and max value as arguments (hint: you can use random number functions from previous assignments). But make sure the function can generate a random number each time it is called. When you use this function, use `10` as your min, and `10000` as your max.

### Module Two (dollar-converter.js)
The second module should **export** a function that can accept a number and convert it to a USD value as a string (`$1,344`). You can find some good implementations of this conversion online.

### Module Three (currency.js)
The third module should **require** the other two modules (i.e. Module One and Module Two). This module needs to **export** just a function that will use the functions from the other modules to produce the output below. It should return this formatted string:

```
Random dollar amount: $5,301
```

## server.js
Finally, in the `server.js` file, **require** in the third module and use it to produce the following output when you visit *http://localhost:5000/currency* in your browser:

```
Random dollar amount: $5,301
```

## PRO TIP

Get your functions working in the `server.js` file first. Then start moving them to other modules. Remember: Modules are just other JavaScript files.

## Stretch Goals

The seventh request should return the maximum value. Every 10th request should return the minimum value.

Allow users to specify the minimum and maximum values as request parameters. You will need to do some research here. An example request would look like this:

*http://localhost:5000/currency/10/10000*
