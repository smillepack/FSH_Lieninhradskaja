document.addEventListener('click', closev2);
document.addEventListener('scroll', scrollfv2);


function closev2(thing) {
    let navibar = document.querySelector('.navibar');

    if ( !navibar.classList.contains('disFlex') ) return;

    let clickOutSide      = !thing.target.closest('.navibar');
    let clickNotOnButton  = !thing.target.closest('.burgerMenu');

    if ( clickOutSide && clickNotOnButton ) {
        navibar.classList.remove('disFlex');
    }
}

function scrollfv2() {
    let navibar = document.querySelector('.navibar');

    if ( !navibar.classList.contains('disFlex') ) return;

    navibar.classList.remove('disFlex');
}
