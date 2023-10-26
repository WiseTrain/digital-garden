// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// Compare this with pipe: fn(acc) is changed to acc.then(fn),
// and initialValue is ensured to be a promise

// v1.
// const asyncPipe =
//   (...functions) =>
//   (initialValue) =>
//     functions.reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue));

const asyncPipe =
    (...functions) =>
    (initialValue) =>
      functions.reduce(async (acc, fn) => fn(await acc), initialValue);

// Building blocks to use for composition
const p1 = async (a) => a * 5;
const p2 = async (a) => a * 2;
// The composed functions can also return non-promises, because the values are
// all eventually wrapped in promises
const f3 = (a) => a * 3;
const p4 = async (a) => a * 4;

asyncPipe(p1, p2, f3, p4)(10).then(console.log); // 1200


//
document.querySelector("#s4").innerHTML = 
`
    <h4>s3</h4>
    <p class="bold center">Async Function<br>Sequential Piping</p>
    <p>Use <span class="bold">reduce()</span> for array of async function to perform a sequence of calculations (see code for details)</p>
    <p class="attribution"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce">source: Mozilla .docs</a></p>
`;