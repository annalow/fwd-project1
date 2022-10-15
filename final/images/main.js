
const myWindow = document.querySelector('body');
const tracks = document.querySelector('#tracks');
const tracksMask = document.querySelector('#tracks-mask-inverse');
// const tracksTop = document.querySelector(':root');
// const root = document.querySelector(':root');
// const tracksTop = getComputedStyle(root);
const tracksTop = getComputedStyle(document.documentElement).getPropertyValue('--tracks-top'); 

window.addEventListener("scroll", ()=>{
    console.log(tracksTop);
    const windowWidth = window.innerWidth;
    const windowHeight = innerHeight;
    const tracksWidth = tracks.innerWidth;
    
    const scrollPosition = window.pageYOffset;
    if(scrollPosition >= windowHeight){
        var moveTracks = -scrollPosition - windowHeight;
    }else{
        // tracks.style.top = '0px';
        // tracksMask.style.top = '0px';
        // root.style.setProperty('--tracks-top', '0px');
        console.log('else triggered');
        document.documentElement.style.setProperty('--tracks-top', '0px');
    }
    // tracks.style.top = -moveTracks + 'px';
    // tracksMask.style.top = -moveTracks + 'px';
    // root.style.setProperty('--tracks-top', moveTracks+'px');
    document.documentElement.style.setProperty('--tracks-top', moveTracks+'px');
    console.log('end'+ tracksTop);
})