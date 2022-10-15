const myWindow = document.querySelector('body');
const tracks = document.querySelector('#tracks');
const bodyImage = document.querySelector('#bodyImage');

window.addEventListener("scroll", ()=>{
    const windowWidth = window.innerWidth;
    const windowHeight = innerHeight;
    const scrollPosition = window.pageYOffset;
    if(scrollPosition >= windowHeight){
        var moveTracks = scrollPosition - windowHeight;  
    }else{
        tracks.style.top = '0px';
        bodyImage.style.webkitMaskPosition = `right ${scrollPosition}px`;
    }
    tracks.style.top = -moveTracks + 'px';
    bodyImage.style.top = -moveTracks + 'px';
    console.log(bodyImage.style.webkitMaskPosition);
})