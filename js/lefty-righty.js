/* -----------------------------------------------------
    Copyright (c) 2016 Parsec Digital Media, LLC
    All Rights Reserved
    Version: Development
------------------------------------------------------ */

function init() {
    $('a').on('click',function() {
        reverseAll();
        reverseFirstLast();
    });
}

function reverseAll() { // reverse children of lr and it's children and it's children
    $.fn.reverseChildren = function() {
        return this.each(function(){
            var $this = $(this);
                $this.children('.lr-item').each(function(){
                $this.prepend(this);
            });
        });
    };
    $('.lr-reverse').reverseChildren();
}

function reverseFirstLast() { // push children into array, flip first and last
    $.fn.flipFirstLast = function() {
        return this.each(function() {
            var $this = $(this);
            var lrItem = $this.children('.lr-item');
            var lrItemCount = $this.children('.lr-item').length;

            var itemArray = [];

            lrItem.each(
                function(i){
                    itemArray.push(this);
                    return itemArray;
                }
            );

            var firstItem = $(itemArray)[0]; // first item
            var centerItems = itemArray.slice(1, lrItemCount-1); // center items
            var lastItem = $(itemArray).get(-1); // last item
            var reverseArray = [];
            reverseArray.push(lastItem, centerItems, firstItem); // creates new array last, center, first

            $(firstItem).before(lastItem,centerItems); // this does the magic
        });
   };
   $('.lr-first-last').flipFirstLast();
}


(function ($) {
    $.fn.leftyrighty = function() {
        init();
    };
}(jQuery));
