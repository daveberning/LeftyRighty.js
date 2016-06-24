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
                }
            );

            console.log(itemArray[0]); // gets first .lr-item in .lr array
            console.log($(itemArray).get(-1)); // gets last .lr-item in .lr array
        });
   };
   $('.lr').flipFirstLast();
}


(function ($) {
    $.fn.leftyrighty = function() {
        init();
    };
}(jQuery));
