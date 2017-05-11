var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

/*
asyncAdd(5, 7).then((success) => {
    console.log('Success: ', success);
    return asyncAdd(success, 33);
}, (error) => {
    console.log('Error: ', error);
}).then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});
*/
asyncAdd(5, '7').then((success) => {
    console.log('Success: ', success);
    return asyncAdd(success, 33);
}).catch((err)  => {
    console.log(err);
});
/*
var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('Hey. It worked!');
        reject('Unable to fulfill promise');
    }, 2500);
    
});

somePromise.then((message) => {
    console.log('Success: ', message);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
});

*/