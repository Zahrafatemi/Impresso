// hamburger nav
const body = document.body;
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', openMenu);
hamburger.addEventListener('mousedown', function(e){
    e.preventDefault();
});

function openMenu(){
    body.classList.toggle('show');
    menu.classList.toggle('show');
}

// return to top
$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
      $('.return').fadeIn(200);
        } else {
            $('.return').fadeOut(200);
        }
    });   
      // animate scroll to top
    $('.return').click(function(event) {
      event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 300);
});