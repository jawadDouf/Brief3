const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.smallMenu');
    burger.addEventListener('click',() =>{
      nav.classList.toggle('active');
    });
}
navSlide();