/* -----------------------------------------------------
    Copyright (c) 2016 Parsec Digital Media, LLC
    All Rights Reserved
    Version: Development

    Developed by: Dave Berning & Kenny Hill
------------------------------------------------------ */
// GLOBALS
var rowReverse = '.lr-reverse';
var rowFirstLast = '.lr-first-last';
var specificItem = '.lr-spec';
var rowChild = '.lr-item'; // targets all bootstrap columns, default off

function init() {
    $('a').on('click',function() {
        reverseAll();
        reverseFirstLast();
        reverseSpecific();
    });
}
function reverseAll() { // reverse children of lr and it's children and it's children
    var lrSpecificItemCount = $(rowReverse).children(specificItem).length;
    var lrItemCount = $(rowReverse).children(rowChild).length;

    $.fn.reverseChildren = function() {

        return this.each(function(){
            // reverse ONLY lr-specific children

            if (lrSpecificItemCount) {
                var $this = $(this);
                var lrItem = $this.children(rowChild);
                var lrItemCount = $this.children(rowChild).length;
                var specificItem = lrItem.filter(specificItem)
                var itemArray = [];

                lrItem.each(
                    function(i){
                        itemArray.push(this);
                        return itemArray;
                    }
                );

                console.log($(rowChild).index($(specificItem)));

                console.log(specificItem);
                console.log("specific item is present");

            } else {
                // reverse every child
                var $this = $(this);
                $this.children(rowChild).each(function(){
                    $this.prepend(this);
                    console.log("specific item is NOT present");
                });
            }

        });
    };

    $(rowReverse).reverseChildren();
}

function reverseFirstLast() { // push children into array, flip first and last
    $.fn.flipFirstLast = function() {
        return this.each(function() {
            var $this = $(this);
            var lrItem = $this.children(rowChild);
            var lrItemCount = $this.children(rowChild).length;

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
   $(rowFirstLast).flipFirstLast();
}

function reverseSpecific() { // flip specific divs

    $.fn.reverseSpecificItem = function() {
        var itemArray = [];

        $(specificItem).each(function(i) {
            itemArray.push(this);
            return itemArray;
        });

        var arrayLength = itemArray.length;
        var lastOfArray = arrayLength -1

        if (arrayLength == 2) {
            var firstArrayItem = $(itemArray[0]);
            var lastArrayItem = $(itemArray[lastOfArray]);

            betweenFirstLast = firstArrayItem.nextUntil($(lastArrayItem)).andSelf();

            $(lastArrayItem).after(betweenFirstLast);
            $(firstArrayItem).before(betweenFirstLast);

            // console.log(arrayLength);
            // console.log("Slice: " + betweenFirstLast + ". Should read, 3214");
        }
   }

   $(rowReverse).reverseSpecificItem();
}


(function ($) {
    $.fn.leftyrighty = function(options) {
        init();

        // This is the easiest way to have default options.
        var defaults = $.extend({
            color: "black",
            backgroundColor: "white",
            bootstrapSupport: false
        }, options);

        var settings = $.extend({}, defaults, options);

        // // Greenify the collection based on the settings variable.
        // return this.css({
        //     color: settings.color,
        //     backgroundColor: settings.backgroundColor,
        // });

        if(settings.bootstrapSupport) { // option to check if dev is using BS
            rowChild = '[class^="col-"]';
        }
    };
}(jQuery));
