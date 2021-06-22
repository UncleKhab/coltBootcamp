const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor((Math.random() * 4500) + 500);
        setTimeout(() => {
            if(delay > 4000)
        {
            reject('Connection Timeout')
        }
        else
        {
            resolve(`Here's your data ${url}`)
        }
        },delay)
    })
}

// fakeRequestPromise('https://google.com')
//     .then((data) => {
//         console.log(data);
//         return fakeRequestPromise('https://google.com/2');
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random()
        setTimeout(() => {
            if(rand < 0.7) {
                resolve('Fake Data here');
            }
            else{
                reject('Request Error');
            }
        },1000)
    })
}

// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log('done with request');
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

const changeColor = (color, delay) => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve(color);
        }, delay)
    })
}

// changeColor('blue', 1500)
//     .then((data) => changeColor('red', 1500))
//     .then((data) => changeColor('green', 1500))
//     .then((data) => changeColor('blue', 1500))
//     .then((data) => changeColor('green', 1500))
    
   
async function rainbow() {
    await changeColor('red', 1000)
    await changeColor('orange', 1000)
    await changeColor('yellow', 1000)
    await changeColor('green', 1000)
    await changeColor('blue', 1000)

}