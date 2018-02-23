var swiper=new Swiper(".swiper-container",{
    direction: 'horizontal',
    loop: true,
    speed: 2000,
    autoheight: true,
    spaceBetween: 1000,
    pagination:{
        el:".swiper-pagination",
        clickable: true 
    },
    autoplay:{
        delay: 5000,
    }  
});