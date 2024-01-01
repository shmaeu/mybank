// event bubbles to this parent. So, can be listened here
document.querySelector('.navbar').addEventListener('click', function(e) {
    e.preventDefault();
    
    //Matching Strategy
    if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(e.target)
    document.querySelector(id).scrollIntoView({behavior : 'smooth'});
    }
    });