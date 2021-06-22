// const myReq = new XMLHttpRequest();

// myReq.onload = function() {
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//     console.log(data.joke);
// }
// myReq.onerror = function(err){
//     console.log('error', err);
// }

// myReq.open('get', 'https://icanhazdadjoke.com/', true);
// myReq.setRequestHeader('Accept', ' application/json');
// myReq.send();

const newReq = new XMLHttpRequest();

newReq.onload = function() {
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price);
}
newReq.onerror = function(err){
    console.log('error', err);
}

newReq.open('get', 'https://api.cryptonator.com/api/full/btc-usd'
, true);
newReq.send();