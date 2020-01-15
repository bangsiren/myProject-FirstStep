

window.addEventListener("scroll",(e) => {
    let body =document.querySelector('body')
    if(window.scrollY>200){
        body.style.backgroundColor = "white"
        body.style.transitionProperty= "background";
        body.style.transitionDuration="3s"
    } 
    else if(window.scrollY<200){
          body.setAttribute('style',`body{background-color:secondary;}`)
    }
});

// window.addEventListener('scroll',()=>{
  
// })

// let last_known_scroll_position = 0;
// let ticking = false;

// function doSomething(scroll_pos) {
//   // Do something with the scroll position
//    body.style.backgroundColor = "cyan";
// }

// window.addEventListener('scroll', function(e) {
//   last_known_scroll_position = window.scrollY;
// // console.log(last_known_scroll_position);
//   if (!ticking && last_known_scroll_position>=1000) {
//     window.requestAnimationFrame(function() {
//       doSomething(last_known_scroll_position);
//       ticking = false;
//     });

//     ticking = true;
//   }else{
//       last_known_scroll_position = 0;
//   }
  
// });