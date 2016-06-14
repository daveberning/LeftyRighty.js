/* ----------------------------------
Copyright (c) 2016
Started: 4-11-16
Developed by Dave Berning for those
with physical disabilities... or for
those that want elements positions to
cater to their mobile needs.
---------------------------------- */

// GLOBALS
var leftyRightyRow = $('.lefty-righty');
var leftyRightyItems = leftyRightyRow.children();
var leftyRightyItemCount = leftyRightyItems.length;

var leftyItem = $('.lefty');
var rightyItem = $('.righty');

var reverseRow = $('.lf-reverse');
var reverseRowItems = reverseRow.children();
var reverseRowItemsCount = reverseRowItems.length;

var leftyPosition = $('.lefty').css('position');
var rightyPosition = $('.righty').css('position');

function init() {
    // Do magic on button click
    $("a").on('click', function() { // eventually want to toggle
        flipLeftRighty();
        reverseSubItems();
        reverseAllItems();
    });
}

function flipLeftRighty() {
    if ((leftyRightyItemCount == 2) || (leftyRightyItemCount == 3)) {
        leftyRightyRow.append(leftyRightyItems.get().reverse());
    }

    if (leftyRightyItemCount > 3) {
        var swapElements = function(siblings, first, last) {
            var firstChild = $(siblings.get(first));
            var lastChild = $(siblings.get(last));

            firstChild.insertAfter($(siblings.get(last)));

            if(last!==first+1) {
                $(siblings.get(last)).insertBefore($(siblings.get(first+1)));
            }
        }

        $(function() {
            swapElements($(leftyRightyItems), 0, leftyRightyItemCount-1);
        });
    }

    // Think of this as the off-canvas menu itself. Maybe add a new class?

    if ($('div').hasClass('lefty')) {
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
    var swapChildren = function(siblings, first, last) {
        var firstChild = $(siblings.get(first));
        var lastChild = $(siblings.get(last));

        firstChild.insertAfter($(siblings.get(last)));

        if(last!==first+1) {
            $(siblings.get(last)).insertBefore($(siblings.get(first+1)));
        }
    }

    if (leftyRightyItemCount >= 2) {
        $(function() {
            swapChildren($(leftyRightyItems), 0, leftyRightyItemCount);
        });
    }
}

function reverseAllItems() {
    // reverse all sub items
    if (reverseRowItemsCount >= 2) {
        reverseRow.append(reverseRowItems.get().reverse());
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
