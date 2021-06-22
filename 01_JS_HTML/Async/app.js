const multiply = (x,y) => x*y;
const square = x => multiply(x,x);
const isRightTriangle = (a,b,c) =>{
    square(a) + square(b) === square(c);
}

const fakeRequest = (url,success,failure) =>
{
    const delay = Math.floor((Math.random() * 4500) + 500)
    setTimeout(() => {
        if(delay > 3000)
        {
            failure('Something Went Wrong')
        }
        else
        {
            success(`Here is your data ${url}`)
        }
    },delay)
}
fakeRequest('books.com',
    function(data){
        console.log('yep');
        console.log(data);
    },
    function(err){
        console.log('nope');
        console.log(err);
    }
)




