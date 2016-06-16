/* ----------------------------------
Copyright (c) 2016
Started: 4-11-16
Developed by Dave Berning for those
with physical disabilities... or for
those that want elements positions to
cater to their mobile needs.
---------------------------------- */

function init() {
    $('a').on('click',function(){
        flipLeftRighty();
        reverseSubItems();
    });
}

function flipLeftRighty() { // reverse order on click
    var leftyRightyRow = $('.lefty-righty');
    var leftyRightyItems = leftyRightyRow.children();

    var leftyRightyReverse = $(".lf-reverse");

    if (leftyRightyReverse.length) {
        leftyRightyRow.append(leftyRightyItems.get().reverse()); // reserve all items
    }

    if (leftyRightyItems > 3) {
        var swapElements = function(siblings, first, last) {
            var firstChild = $(siblings.get(first));
            var lastChild = $(siblings.get(last));

            firstChild.insertAfter($(siblings.get(last)));

            if(last!==first+1) {
                $(siblings.get(last)).insertBefore($(siblings.get(first+1)));
            }
        }
    }

    if ($('div').hasClass('lefty')) {
        var leftyItem = $(".lefty");
        var rightyPosition = rightyItem.css("position");

        if ($(leftyItem).css(leftyPosition) != '') {
            var leftyDirection = $(leftyItem).css('left');
            $(leftyItem).css({
                //'position' : leftyPosition,
                'right' : leftyDirection,
                'left' : 'auto',
                'background' : 'red'
            });
        }

    } else if ($('div').hasClass('righty')) {
        var rightyItem = $(".righty");
        var rightyPosition = rightyItem.css("position");

        if ($(rightyItem).css(rightyPosition) != '') {
            var rightyDirection = $(rightyItem).css('right');
            $(rightyItem).css({
                //'position' : rightyPosition,
                'left' : rightyDirection,
                'right' : 'auto',
                'background' : 'red'
            });
        }
    }
}

function reverseSubItems() {
    var leftyRightyRow = $('.lefty-righty');
    var leftyRightyItems = leftyRightyRow.children();

    var swapChildren = function(siblings, first, last) {
        var firstChild = $(siblings.get(first));
        var lastChild = $(siblings.get(last));

        firstChild.insertAfter($(siblings.get(last)));

        if(last!==first+1) {
            $(siblings.get(last)).insertBefore($(siblings.get(first+1)));
        }
    }

    if (leftyRightyItems >= 2) {
        $(function() {
            swapChildren($(leftyRightyItems), 0, leftyRightyItemCount);
        });
    }
}

(function ($) {
    $.fn.leftyRighty = function(options) {
        init();

        // Default options
        var settings = $.extend({
            position: "relative"
        }, options );

        // Apply options
        return this.css({
            'background': settings.backgroundColor,
            'position': settings.position,
            'top': settings.positionTop,
            'right': settings.positionRight,
            'bottom': settings.positionBottom,
            'left': settings.positionLeft

        }); // end return
    };
}(jQuery));
