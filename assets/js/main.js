//*===========================================================*/
//                      SCROLLSPY
//*===========================================================*/
var scrollSpy = new bootstrap.ScrollSpy(document.body, {target: '#mainNav'});
var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'));

dataSpyList.forEach( dataSpyEl => {
    bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh();    
});

//*===========================================================*/
//                      NAVBAR
//*===========================================================*/

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link')

navLink.forEach(n => n.addEventListener('click', linkAction))

function linkAction(){
    const navToggler = document.getElementById('navbar-toggler');
    const mainNav = document.getElementById('mainNav');
    // When we click on each nav__link, we remove the show-menu class
    navToggler.classList.add('collapsed');
    mainNav.classList.remove('show');
}

//*===========================================================*/
//                      VALIDATE FORM
//*===========================================================*/

(function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

//*===========================================================*/
//                      BTN UP
//*===========================================================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-up class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)