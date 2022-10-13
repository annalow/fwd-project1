
const myWindow = document.querySelector('body');
const obj = document.querySelector('div');
window.addEventListener("scroll", ()=>{
    const windowWidth = window.innerWidth;
    const windowHeight = innerHeight;
    const objWidth = obj.innerWidth;
    
    //console.log('scroll');
    const scrollPosition = window.pageYOffset;
    //console.log(scrollPosition);
    if(scrollPosition >= objWidth){
        var moveObj = windowWidth * (scrollPosition / windowHeight) - objWidth; //obj will move horizontally in proportion to vertical scroll accounting for object width
    }else{
        var moveObj = windowWidth * (scrollPosition / windowHeight); // prevents object from moving off the left of the page
    }
    //console.log(moveObj);
    obj.style.left = moveObj + 'px';
})