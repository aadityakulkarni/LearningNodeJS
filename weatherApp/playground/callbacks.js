const getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Vikram'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(54, (userObject) => {
    console.log(userObject);
});