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
    const woman = document.querySelectorAll('.woman');
    const seduction = document.querySelector('#seduction');
    const womanFull = woman[0];
    
    seduction.style.top = womanFull.getBoundingClientRect().top - seduction.getBoundingClientRect().height + 'px';

    if(womanFull.style.opacity == 1){
        woman[1].style.opacity = 1;
    }else{
        woman[1].style.opacity = 0;
    }
    for (var j = 0; j < woman.length; j++){
        var op = womanFull.getBoundingClientRect().top / womanFull.getBoundingClientRect().height;
        woman[j].style.opacity = 1 - op;
    
        if(womanFull.getBoundingClientRect().top <= 0){
        
            woman[j].style.top = '0px';
            woman[j].style.position = 'fixed';

            seduction.style.opacity = 1;
            seduction.style.top = scrollPosition - 1.5*windowHeight - seduction.getBoundingClientRect().height + 'px';
            
            
        }
        if(scrollPosition < 1.5*windowHeight){
            woman[j].style.position = 'absolute';
            woman[j].style.top = 1.5*windowHeight + 'px';
            seduction.style.opacity = 0;
        }
    
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