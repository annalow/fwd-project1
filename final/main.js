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

    //FADE IN WOMAN
    const womanFull = document.querySelector('#woman-full');
    
    var op = womanFull.getBoundingClientRect().top / womanFull.getBoundingClientRect().height;
    womanFull.style.opacity = 1 - op;
    

    if(womanFull.getBoundingClientRect().top <= 0){
        
        womanFull.style.top = '0px';
        womanFull.style.position = 'fixed';
        
    }
    if(scrollPosition < 1.5*windowHeight){
        womanFull.style.position = 'absolute';
        womanFull.style.top = 1.5*windowHeight + 'px';
    }
    

    //FADE OUT TRACKS
    if(scrollPosition > windowHeight){
        tracks.classList.add('hide');
        tracks.classList.remove('show');
        bodyImage.classList.add('hide');
        bodyImage.classList.remove('show');
    }else{
        tracks.classList.remove('hide');
        tracks.classList.add('show');
        bodyImage.classList.remove('hide');
        bodyImage.classList.add('show');
        
    }
})