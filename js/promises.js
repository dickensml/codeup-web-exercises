"use script";

// https://api.github.com/users/dickensml/events/public

// .then(response => console.log(response))
// .catch(error => console.error(error));
//

// const dickensml = new dickensml({
//     auth: 'personal-access-token123'
// })
//
// await dickensml.request('GET /users/{username}/events', {
//     username: 'USERNAME'
// })

// 1.  Handle An API Promise

// const gitUserLastCommit = (username) => {
//     return fetch ("https://api.github.com/users/dickensml/events/public",
//         {headers: {'Authorization': 'token' + 'GITHUB_TOKEN_API'}})
//         .then((res) => res.json())
//         .then((res) => {
//             return res.filter((item) => item.type === "PushEvent")[0].created_at;
//         })
// }
// gitUserLastCommit("dickensml").then(res => console.log(res))


// 2. Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
//wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const wait = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time);
        }, time)
    })
};
wait(2000).then((res) => {
    const time = res / 1000;
    console.log("You'll see this after 2 seconds")
})