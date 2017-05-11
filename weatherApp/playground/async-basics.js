console.log('Starting app');

setTimeout(() => {
    console.log('Inside of callback');
} , 2000);

setTimeout(() => {
    console.log('Zero Delay set time out');
}, 0);
console.log('Finishing app');
