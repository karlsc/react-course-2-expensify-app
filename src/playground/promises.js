const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Resolved');
    reject('Error');
  }, 1500)
});

promise.then((data) => {
  console.log(data);
}).catch((data) => {
  console.log(data);
});