var typed = new Typed (".second-text" ,{
    strings :["Front-End Developer", "Back-End Developer", "UI-UX Designer"],
     loop: true,
     typeSpeed: 50,
     backSpeed: 50,
     backDelay :500

})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1400,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  


  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
      document.querySelectorAll('.first ul li a').forEach(link => {
        link.classList.remove('active');
      });
    
      // Add active class to the link inside the element with the ID 'home'
      const homeLink = document.querySelector('.first ul li a[href="#Home"]');
      console.log(homeLink)
      if (homeLink) {
        homeLink.classList.add('active');
      }

    });
    scrollProgress.style.background = `conic-gradient(#ff7f11 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;



  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  //for scroll animation 

let section = document.querySelectorAll('section');
let lists = document.querySelectorAll('.first ul li a');

function activeLink(li) {
    lists.forEach((item) => item.classList.remove('active'));
    li.classList.add('active');
}

function handleLinkClick(item) {
    item.addEventListener('click', function () {
      console.log(this);
        activeLink(this);
    });
}

lists.forEach(handleLinkClick);
