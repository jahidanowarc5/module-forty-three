
const images = [
   'images/pic-1 - Copy.jpg',
   'images/pic-2 - Copy.jpg',
   'images/pic-3 - Copy.jpg',
   'images/pic-4 - Copy.jpg',
   'images/pic-5 - Copy.jpg'
   
];





let imgIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval(() =>{
    if(imgIndex>=images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src',imgUrl)

      imgIndex++;

},1000)