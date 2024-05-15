const previewImg = document.querySelector('.preview-image img');
const images = document.querySelectorAll('.images img');

images.forEach((image) => {
    image.addEventListener('mouseover', function(){
        previewImg.src = this.src;
    });
});