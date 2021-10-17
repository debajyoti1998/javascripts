// Promise.all()=> The Promise.all() method is actually a promise that 
// takes an array of promises(an iterable) as an input. 
// It returns a single Promise that resolves when all of the promises 
// passed as an iterable, which have resolved or when the iterable contains 
// no promises. In simple way, if any of the passed-in promises reject, the 
// Promise.all() method asynchronously rejects the value of the promise that 
// already rejected, whether or not the other promises have resolved.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]