function scrollFunction(){
    if(document.documentElement.scrollTop > 200){
        document.getElementById("navbar").classList.add("noTransparent")
    }else{
        document.getElementById("navbar").classList.remove("noTransparent");
    }
}

window.onscroll = function(){
    scrollFunction();
}
//  Conter Start 
window.onload = function(){
    let website = new CountUp('website-count', 0, 250, 0 ,2.5)
    website.start();
    let appcount = new CountUp("app-count", 0, 100, 0, 2.5)
    appcount.start();
    let usercount = new CountUp("user-count", 0, 10000, 0, 2.5)
    usercount.start()
    let video = new CountUp("video", 0, 30, 0, 2.5)
    video.start()
}

//  Form Validation
// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//   'use strict'

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.prototype.slice.call(forms)
//     .forEach(function (form) {
//       form.addEventListener('submit', function (event) {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }

//         form.classList.add('was-validated')
//       }, false)
//     })
// })()

  //  Get Full year 

  document.getElementById("fullYear").innerHTML = new Date().getFullYear()