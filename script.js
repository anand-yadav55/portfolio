let prevScrollpos = window.pageYOffset;
$(window).scroll(()=>{
    let currentScrollPos = window.pageYOffset;
    if(prevScrollpos >currentScrollPos && currentScrollPos<190){
        document.querySelector("#social-bar").style.top = "0";
    }else if(currentScrollPos>80){
        document.querySelector("#social-bar").style.top = "-100%";
    }
    prevScrollpos = currentScrollPos;

    if(window.pageYOffset>=90){
        document.querySelector("#wrapper2").style.right = "2%";
        document.querySelector("#wrapper3").style.left = "2vw";
    }else{
    document.querySelector("#wrapper2").style.right = "10%";
    document.querySelector("#wrapper3").style.left = "15vw";
    }
})
/
// Smooth Scrolling
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});