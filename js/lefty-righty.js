function init() {
    $('a').on('click',function() {
        reverseAll();
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

(function ($) {
    $.fn.leftyrighty = function() {
        init();
    };
}(jQuery));
