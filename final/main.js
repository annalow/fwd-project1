const myWindow = document.querySelector('body');
const tracks = document.querySelector('#tracks');
const bodyImage = document.querySelector('#bodyImage');

window.addEventListener("scroll", ()=>{
    //TRACKS
    const windowWidth = window.innerWidth;
    const windowHeight = innerHeight;
    const scrollPosition = window.pageYOffset;
    if(scrollPosition >= windowHeight){
        var moveTracks = scrollPosition - windowHeight;  
        tracks.style.top = -moveTracks + 'px';
        bodyImage.style.top = -moveTracks + 'px';
    }else{
        tracks.style.top = '0px';
        bodyImage.style.webkitMaskPosition = `right ${scrollPosition}px`;
    }
    
    

    //TRACKS TEXT
    const reveals = document.querySelectorAll('.reveals');
    
    for(var i = 0; i < reveals.length; i++){
        var object = document.querySelector(`#${reveals[i].id}`);
        var objPosition =  object.getBoundingClientRect().top + (.12*windowHeight);
        if (objPosition < windowHeight/2) { 
            
            //object comes into view (scrolling down)
                object.classList.remove('hide');
                object.classList.add('show');
            
        } else { 
            object.classList.remove('show');
            object.classList.add('hide');
            
         }
    }


    //FADE OUT TRACKS
    const womanFull = document.querySelector('#woman-full');
    // console.log(womanFull.getBoundingClientRect().top);
    // if(scrollPosition > windowHeight){
    //     tracks.style.left = windowWidth * (scrollPosition / windowHeight) - tracks.offsetWidth + 'px';
    //     bodyImage.style.marginRight = tracks.offsetWidth - (windowWidth * scrollPosition / windowHeight) - tracks.offsetWidth + 'px';
    // }
})