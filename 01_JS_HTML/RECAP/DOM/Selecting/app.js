const allImages = document.getElementsByTagName('img');

for(let img of allImages) {
    console.log(` Source  = ${img.src}`);
}
