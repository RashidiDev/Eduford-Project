let headerMain = document.querySelectorAll('.header-animate')
console.log(headerMain);

// window.onscroll = () => {
// }

window.onload = () => {
    headerMain.forEach(element => {
        element.classList.add('show-animate')
    })
}
// let top = window.scrollY
//         console.log(top);
//         let offset = element.offsetTop
//         console.log(offset);
//         let height = element.offsetHeight
//         console.log(height);
//         if(top >= offset - 160 && top < offset + height) {
//             element.classList.add('show-animate')
//         } else {
//             headerMain.classList.remove('show-animate')
//         }