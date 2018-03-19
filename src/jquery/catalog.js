'use strict';
(function($) {
    $(document).ready(function() {       
        var catalog = $('#js-asortiment-catalog');
        var items = catalog.children('.js-asortiment-catalog-items');
        $.each(items, function(index) {
            if (index === 3) {
                $(this).after('<div class="delimiter"></div>');
            }
        });
        var itemsQuantity;
        $.each(items.find('ul'), function(index, elem) {
            itemsQuantity = $(this).find('li').length;
            if (itemsQuantity > 4) {
                $.each($(this).find('li'), function(index) {
                    if (index > 4) {
                        $(this).addClass('js-hide').css('display', 'none');
                    }
                });
            }
            if (itemsQuantity > 5) {
                if (itemsQuantity - 5 === 1) {
                    $(this).append('<a class="showmore js-showmore" href="#">Показать еще ' + (itemsQuantity - 5) + ' категорию</a>');
                } else if (itemsQuantity - 5 > 4) {
                    $(this).append('<a class="showmore js-showmore" href="#">Показать еще ' + (itemsQuantity - 5) + ' категорий</a>');
                } else {
                    $(this).append('<a class="showmore js-showmore" href="#">Показать еще ' + (itemsQuantity - 5) + ' категории</a>');
                }
            }
        });
        var showmore = $('.js-showmore');
        showmore.click(function(e) {
            e.preventDefault();
            $(this).parent('ul').find('li.js-hide').slideToggle();
        });

        $('a').on('click', function(e){
            e.preventDefault();
          });
          $('#js-asidemenuhidden').addClass('js-hide').css('display', 'none'); 
          $('#js-asidemenu li').hover(function () {
             clearTimeout($.data(this,'timer'));
             $('ul',this).stop(true,true).slideDown(200);
          }, function () {
            $.data(this,'timer', setTimeout($.proxy(function() {
              $('ul',this).stop(true,true).slideUp(200);
            }, this), 100));
          });
          $('#js-sorting div').hover(function () {
            clearTimeout($.data(this,'timer'));
            $('ul',this).stop(true,true).slideDown(200);
         }, function () {
           $.data(this,'timer', setTimeout($.proxy(function() {
             $('ul',this).stop(true,true).slideUp(200);
           }, this), 100));
         });
    });

   var BREAKPOINT=992;
   var menu__btn=$('#js-bar-btn');  
   menu__btn.on('click',function(){
       $(this).toggleClass('opened');
       navList.toggle(500);});
       navList.find('has-sub').on('click',function(){
           $(this).toggleClass('opened');
        });    
        var aside=$('#js-aside');
        var menuButton=$('#js-menu-button');
        menuButton.click(function(e){
            e.preventDefault();$(this).find('.menu-button').toggleClass('opened');
            aside.fadeToggle();
        });
        var asideItemCaret=$('.js-has-sub .caret');
        asideItemCaret.click(function(e){
            $(this).siblings('.js-submenu').slideToggle();
        });
})(jQuery);