let observer = new IntersectionObserver((e) => {
  e.forEach((Exp) => {
    if (Exp.isIntersecting) {
      Exp.target.style.opacity = 1;
      Exp.target.classList.add('shake');
    }
  })
})
let con = document.querySelectorAll('div')
observer.observe(con[0])
