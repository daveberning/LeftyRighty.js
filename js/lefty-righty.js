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

// function reverseFirstLast() { // reverse first and last child only
//     $.fn.flipFirstLast = function() {
//         var list = $(this);
//         var listItems = list.children('.lr-item');
//         list.append(listItems.get().reverse());
//     };
//     $('.lr').flipFirstLast();
// }


(function ($) {
    $.fn.leftyrighty = function() {
        init();
    };
}(jQuery));
