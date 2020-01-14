

window.addEventListener("scroll",(e) => {
    if(window.scrollY>200){
        let nav = document.querySelector('nav')
        let body =document.querySelector('body')
        body.style.backgroundColor = "white"
        body.style.transitionProperty= "background";
        body.style.transitionDuration="3s"
        nav.style.backgroundColor = "blue"
        nav.style.transitionProperty= "background";
        nav.style.transitionDuration="3s"
    }else
    body.style.backgroundColor="red";
    nav.style.backgroundColor="cyan";
})

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