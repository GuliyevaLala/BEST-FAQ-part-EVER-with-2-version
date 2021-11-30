 let question = document.getElementsByClassName("question");
 let answer = document.getElementsByClassName("answer");


//  ******for one click pure javascript********
// let question = document.getElementsByClassName("question");
//  var i;
// for (i = 0; i < faq.length; i++) {
//     faq[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         let body = this.nextElementSibling;
//         if (body.style.display == "block") {
//             body.style.display = "none";
//         } else {
//             body.style.display = "block";
//         }
//         e.preventDefault();

//     });
// }


$(document).ready(function() {
    $('.question').click(function() {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active').next('.answer').slideUp();
      } else {
        $('.question').removeClass('active');
        $('.answer').slideUp();
        $(this).addClass('active').next('.answer').slideDown();
      }
    });
  });
