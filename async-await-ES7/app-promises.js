// Async/Await or async_hooks basics
const users = [{
    id: 1,
    name: 'Aaditya',
    schoolId: 101
}, {
    id: 2,
    name: 'Aadi',
    schoolId: 102
}];

const grades = [{
    id: 1,
    schoolId: 101,
    grade: 100
}, {
    id: 2,
    schoolId: 102,
    grade: 95
}, {
    id: 1,
    schoolId: 101,
    grade: 85
}];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.id === id);
        if (user) {
            resolve(user);
        } else {
            reject(`Unable to find user with id ${id}.`);
        }
    });
};

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => grade.schoolId === schoolId));
    });
};

const getStatus = (userId) => {
    let user;
    return getUser(userId)
        .then((tempUser) => {
            user = tempUser;
            return getGrades(user.schoolId);
        })
        .then((grades) => {
            let average = 0;
            if (grades.length > 0) {
                average = (grades
                    .map((grade) => grade.grade)
                    .reduce((a, b) => a + b)) / grades.length;
            }
            console.log(average);
            return `${user.name} has a ${average}% in the class.`;
        });
};

// new async_hooks functionality
const getStatusAlt = async(userId) => {
    // the statement below is equivalent of resolving a promise
    // return 'Aaditya';
    // the statement below rejects the promise 
    // throw new Error('This is an error');
    const user = await getUser(userId);
    // console.log(user);
    const grades = await getGrades(user.schoolId);
    // console.log(user, grades);
    let average = 0;
    if (grades.length > 0) {
        average = (grades
            .map((grade) => grade.grade)
            .reduce((a, b) => a + b)) / grades.length;
    }
    console.log(average);
    return `${user.name} has a ${average}% in the class.`;
};

getStatusAlt(2).then((status) => {
    console.log(`Status: ${status}`);
}).catch((e) => {
    console.log(`Error: ${e}`);
});



// getStatus(12).then((status) => {
//     console.log('User Status: ', status);
// }).catch((e) => {
//     console.log('Error: ', e);
// })


getGrades(102).then((grades) => {
    console.log('User grades: ', grades);
}).catch((e) => {
    console.log('Error: ', e);
});

getUser(1).then((user) => {
    console.log('User: ', user);
}).catch((e) => {
    console.log('Error: ', e);
});