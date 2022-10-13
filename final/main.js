
const myWindow = document.querySelector('body');
const tracks = document.querySelector('#tracks');
const tracksMask = document.querySelector('#tracks-mask');
window.addEventListener("scroll", ()=>{
    const windowWidth = window.innerWidth;
    const windowHeight = innerHeight;
    const tracksWidth = tracks.innerWidth;
    
    const scrollPosition = window.pageYOffset;
    if(scrollPosition >= windowHeight){
        var moveTracks = scrollPosition - windowHeight;
    }else{
        tracks.style.top = '0px';
        tracksMask.style.top = '0px';
    }
    tracks.style.top = -moveTracks + 'px';
    tracksMask.style.top = -moveTracks + 'px';
})