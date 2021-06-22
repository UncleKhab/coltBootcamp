// fetch('https://api.cryptonator.com/api/full/btc-usd')
// .then(res => {
//     console.log('RESPONSE Waiting',res);
//     return res.json();
// })
// .then(result => {
//     console.log(result);
// })
// .catch(err => {
//     console.log(err);
// })

const fetchBitcoinPrice = async () => {
    try{
        const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
        const data = await res.json();
        console.log(data.ticker.price)
    }catch (e){
        console.log('Something went wrong', e)
    }
    
}
// fetchBitcoinPrice();

axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
.then(res => {
    console.log(res.data.ticker.price)
})
.catch(err => {
    console.log(err);
})

const fetchBitcoin = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log(res.data.ticker.price)
    }
    catch(e){
        console.log(e);
    }
}
fetchBitcoin();