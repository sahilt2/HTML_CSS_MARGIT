const header = document.querySelectorAll('.sticky');


window.onscroll = function() {scrollFunction()};

const scrollFunction = () =>{
    if(document.body.scrollTop>200 || document.documentElement.scrollTop>200){
        header.classList.add('newBg')
    }
    else {
        header.classList.remove('newBg')
    }
}


/* const header = document.querySelectorAll('header')
const clickGallery = document.querySelectorAll('.galleryclick')



const hideHeader = () => {
header.classList.add('bg')
if(clickGallery=true){
    console.log('gallery')
}


}

clickGallery.addEventListener('click', hideHeader) */
