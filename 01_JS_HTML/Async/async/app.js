// const sing = async () => {
//     throw 'NANANA';
//     return 'LALALA';
// }

// sing()
//     .then((data) => {
//     console.log('PROMISED RESOLVED WITH', data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

const login = async (username,password) => {
    if(!username || !password) throw 'Missing Credentials';
    if(password === 'bilbobaggins') return 'Welcome!'
    throw 'Invalid Password'
}

// login('asd', 'bilbobaggins')
// .then(msg => {
//     console.log('Logged In');
//     console.log(msg);
// })
// .catch(err => {
//     console.log('error');
//     console.log(err);
// })

const changeColor = (color, delay) => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve(color);
        }, delay)
    })
}

async function rainbow() {
    await changeColor('red', 1000)
    await changeColor('orange', 1000)
    await changeColor('yellow', 1000)
    await changeColor('green', 1000)
    await changeColor('blue', 1000)
    return 'All Done';

}

rainbow().then(() => console.log('yeye'));