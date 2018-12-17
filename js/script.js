let btn_menu = document.getElementById('btn-menu'),
    headerNav = document.querySelector('.header-nav');
    
    btn_menu.addEventListener ('click', function(){
        if(headerNav.style.display == 'block'){
            headerNav.style.display = 'none';
            
            btn_menu.innerHTML='&#9776';
        }else{
            headerNav.style.display = 'block';
            btn_menu.innerHTML='&#9747;';
            
            
        }
    })

    $(document).ready(function(){
        $('.slider-one').owlCarousel({
            rtl:false,
            
            loop:true,
            autoplay:false,
            autoplayTimeout:5000,
            margin:10,
            animateOut: 'fadeOut',
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:1
                }
            }
      });

     
    

    // Second Slider

    $(document).ready(function(){
        $(".slide-two").owlCarousel();
      });
    $(".slide-two").owlCarousel({
		loop:true, //Зацикливаем слайдер
		margin:10, //Отступ от картино если выводите больше 1
		nav: true, //Отключил навигацию
		autoplay:false, //Автозапуск слайдера
        smartSpeed:2000, //Время движения слайда
        dots: false,
        autoplayTimeout:4000, //Время смены слайда
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
});