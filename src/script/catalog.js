(function($){
    $(document).ready(function(){      
        var catalog=$('#js-catalog-lists');
        var items=catalog.children('.js-catalog-lists-items');
        $.each(items,function(index){
            if(index===3){
                $(this).after('<div class="divider"></div>');}
            });
        var itemsQty;
        $.each(items.find('ul'),function(index,elem){
            itemsQty=$(this).find('li').length;
                if(itemsQty>4){
                        $.each($(this).find('li'),function(index){
                            if(index>4){
                                $(this).addClass('js-hidden').css('display','none');}});}})})})