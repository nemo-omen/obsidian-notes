# First Class Functions for the Novice
## Callbacks
A callback is a function, passed in to another function as an argument, which might be called later.

```js
function whatever(myCallback) {
	myCallback();
}
```

[[example_01.js]]
```js
import { assert, report } from '../util.js';

  

const text = "Domo arigato!";

  

report("Before defining functions");

  

function useless(ninjaCallback) {

report("I'm a useless function");

return ninjaCallback();

}

  

function getText() {

report("In getText fn");

return text

}

  

report('Before making all the calls');

  

assert(useless(getText) === text, "The useless function works! " + text);

  

report("After the calls have been made");
```
