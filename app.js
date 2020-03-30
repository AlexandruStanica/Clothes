const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')
    
portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('img-darken');
    })

    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('img-darken');
    })
})

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.left-side');
const links = document.querySelectorAll('.nav-link-wrapper a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
});