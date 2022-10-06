const windowWidth = window.innerWidth;
const windowHeight = innerHeight;
const myWindow = document.querySelector('body');
const obj = document.querySelector('div');
window.addEventListener("scroll", ()=>{
    //console.log('scroll');
    const scrollPosition = window.pageYOffset;
    //console.log(scrollPosition);
    const moveObj = windowWidth * (scrollPosition / windowHeight); //obj will move horizontally in proportion to vertical scroll
    //console.log(moveObj);
    obj.style.left = moveObj + 'px';
})