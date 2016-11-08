/* -----------------------------------------------------
    Copyright (c) 2016 Parsec Digital Media, LLC
    All Rights Reserved
    Version: Development

    Developed by: Dave Berning & Kenny Hill
------------------------------------------------------ */

// GLOBALS
var standardRow = '.row';
var rowReverse = '.lr-reverse';
var rowFirstLast = '.lr-first-last';
var specificItem = '.lr-spec';
var rowChild = '.lr-item'; // targets all bootstrap columns, default off
var lrItem = $(standardRow).children(rowChild);

function init() {
    $('.lr-toggle').on('click',function() {
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
            } else {
                // reverse every child
                var $this = $(this);
                $this.children(rowChild).each(function(){
                    $this.prepend(this);
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
        return this.each(function() {
            var $this = $(this);
            var lrItem = $this.children(specificItem);
            var lrItemCount = $this.children(specificItem).length;

            itemArray = [];

            lrItem.each(function(i) {
                itemArray.push(this);
                return itemArray;
            });

            var arrayLength = itemArray.length;
            var lastOfArray = arrayLength -1

            var firstArrayItem = $(itemArray[0]);
            var lastArrayItem = $(itemArray[lastOfArray]);

            betweenFirstLast = firstArrayItem.nextUntil($(lastArrayItem)).andSelf();

            $(lastArrayItem).after(betweenFirstLast);
            $(firstArrayItem).before(betweenFirstLast);
        });
   }
   $(rowReverse).reverseSpecificItem();
}

(function ($) {
    $.fn.leftyrighty = function(options) {
        init();

        // This is the easiest way to have default options.
        var defaults = $.extend({
            bootstrap: false,
            showToggleButton: true,
            showPopup: true,
            defaultHand: "right",
            showOptimizationNotice: true,
            popupDelay: 1500,
            detectTextAlign: false,
            detectFloat: false,
            detectPosition: false
        }, options);

        var settings = $.extend({}, defaults, options);

        if(settings.bootstrap) { // option to check if dev is using BS
            rowChild = '[class^="col-"]';
        }

        if (!settings.showToggleButton) { // option to check if dev is using BS
            $(".lefty-righty").css("display", "none");
        } else {
            $(".lefty-righty").css("display", "block");
        }

        if (settings.showPopup) {
            if (sessionStorage.getItem('showPopupOnce') !== 'true') {
                $("<div/>", {
                    class: 'lr-popup',
                    html: '<div> <p>Which hand are you using?</p> <div class="row"> <div class="left"> <?xml version="1.0" encoding="utf-8"?> <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 864 808" style="enable-background:new 0 0 864 808;" xml:space="preserve"> <style type="text/css"> .st0{fill:#FFFFFF;} </style> <path class="st0" d="M472.6,367.9c4.1-7,9.2-13.6,12.1-21.1c13.1-33.2,26.6-66.4,37.9-100.2c15-44.7,28.2-90.1,42.2-135.2 c4.8-15.5,8.7-31.4,19.9-44.1c20.3-23.2,52.1-18.2,64,10.1c6.7,15.9,4.5,31.9,0.4,47.9c-9.3,35.6-19.5,71.1-27.6,107 c-9.5,42.2-17.7,84.6-25.5,127.2c-5.4,29.5-7.4,59.5-4.4,89.4c1.1,11.2,5.2,22.3,9.3,32.9c3.9,10.1,9.5,11.1,17.8,3.8 c6.6-5.8,12.8-12.2,18.5-18.8c20.7-24.3,42.5-47.3,69-65.4c27.5-18.7,56.6-33.6,90.9-34c22.4-0.3,42.2,6.3,56,25.4 c7,9.7,6.4,12.7-3.6,19c-39.8,25-75.8,54.6-106.9,90c-22.9,26.1-42.8,54.2-51.6,88.4c-8.7,33.6-20.6,65.9-40.5,94.4 c-12.9,18.5-27.6,36-43.2,52.3c-19.6,20.4-45.6,26.1-73.1,27.5c-21,1-42.1,2.8-62.8,6.1c-12.8,2-24.9,7.7-37.5,11.2 c-22.4,6.4-44.8,7.6-66.8-1.5c-16.9-7-30.1-19.3-41.8-32.9c-38.5-44.5-66.8-95.1-89.4-149c-6.4-15.3-10.8-31.3-24.4-42.4 c-4.3-3.5-8.2-7.7-12.4-11.4c-48.8-43.3-100.5-83-154-120.3c-12.6-8.8-23.8-18.8-30.1-33.4c-11-25.5,4.6-49.4,32.3-48.9 c17.7,0.3,32.3,8.6,46.1,18.4c31,21.9,61.3,44.7,92.8,65.8c20.5,13.7,42.6,25.3,64.3,37.1c3.2,1.7,9.8,1.3,12.2-1 c2.5-2.4,3.1-8.5,2-12.3c-2.9-10.2-6-20.7-11-30c-25-46.8-49.8-93.7-76.1-139.8c-18.6-32.7-39.8-63.9-59.1-96.2 c-10.3-17.1-8.5-36.3,2.8-49.5c10.9-12.7,30.8-17.5,48.4-11.3c11.8,4.2,20.3,12.5,26.7,23.1c33,54.3,65.5,108.9,99.4,162.6 c15.5,24.6,33.5,47.5,50.7,70.9c2.4,3.2,6.5,5.2,10.4,8.3c1-2.9,1.6-3.8,1.7-4.8c0.4-3.7,0.7-7.5,0.8-11.2 c0.8-49.2-7.8-97.4-14.9-145.7c-7.2-49.1-16.9-97.9-24.2-147c-1.9-12.6-0.5-26.2,2.4-38.7c3.8-16.4,14.8-28,32.4-30.3 c18.1-2.4,31.1,6.5,40.7,21.4c11.5,17.7,12.7,38.3,16,58.2c5.2,31.1,9.7,62.3,15,93.3c4.6,27.4,9.5,54.7,15,81.9 c5.4,26.1,11.5,52.1,17.9,78c2.1,8.3,6,16.2,9.1,24.3C470,367.6,471.3,367.8,472.6,367.9z M490.7,369.9c8.5,0.7,17.1,1.2,25.6,2.2 c1.9,0.2,3.6,2.2,5.4,3.4c-1.8,1-3.6,2.7-5.5,3c-2.9,0.4-5.9-0.2-8.8-0.5c-33.2-3.5-66.1-2.3-99,3.7 c-61.4,11.2-109.8,42.5-145.8,93.2c-3.1,4.3-5.8,9-8.9,13.3c-1.6,2.2-3.7,4-6.7,7.2c-3.1-10.6,7-14.8,7-22.2 c-44.2-16.5-79.9-46.7-117.9-73.2c-18.6-13-36.9-26.4-55.9-38.9c-6.8-4.5-14.7-7.4-22.5-10c-14.4-4.7-26.7-1.3-34.1,8.5 c-6.5,8.6-6.5,24.8,1.9,35.2c7.1,8.8,15.5,17,24.7,23.6c53.8,38.3,106.1,78.4,155.7,122c17.3,15.2,28.6,33.2,37,54.8 c21.2,54.2,50.7,103.9,88.7,148.5c29.5,34.6,65.6,43.8,107.3,28.8c30.7-11,61.9-15.5,94.2-15.6c22.3-0.1,43.7-4.4,61.7-18.8 c18.3-14.6,33.2-32.5,46.3-51.8c19.9-29.2,33.3-61.4,42-95.5c8.8-34.2,27.5-62.9,50-89.4c31.2-36.7,67.7-67.4,108.3-93.2 c9.3-5.9,9.4-7.1,2-15.5c-9.3-10.5-21.2-15.9-35-17.3c-29.8-3-56.3,6.7-81.5,21.4c-34.2,20-61,48.1-86.6,77.8 c-6.5,7.6-14.1,14.6-22.4,20.3c-8.8,6.1-16.7,4-21.3-5.6c-5.1-10.7-10.7-22.3-11.4-33.8c-1.5-24.7-2.9-50,0.8-74.3 c7.9-51.7,18.1-103,29.1-154.2c7.7-35.7,18.3-70.8,27.3-106.2c3.6-14.2,5-28.6-1.2-42.4c-9.1-20.3-30.9-24.4-47.5-9.5 c-10.5,9.4-15,22-18.7,34.8c-21.2,72.5-42.8,144.8-70.1,215.2c-6.4,16.6-14.4,32.6-22.2,50.1C485.6,369.4,488.1,369.7,490.7,369.9z M459.4,367.2c-4-13.4-8.9-27.4-12.2-41.9c-6.7-29.4-13.1-58.8-18.6-88.5c-6.7-36.2-12.5-72.6-18.6-108.9 c-3.9-23.4-6.8-47.1-11.9-70.2c-2.2-10-7.7-19.8-13.8-28.3c-7.1-9.9-18-14.7-30.4-11.7c-13.3,3.3-20.9,13-25.1,25.7 c-5.6,17.1-1.5,33.9,1.2,50.7c7.3,45.3,15.6,90.5,22.1,135.9c5.9,40.9,10.1,82.1,14.5,123.2c1.1,10.2,0.2,20.7,0.2,30.2 C398,378,428.8,372.6,459.4,367.2z M347.9,394c-9.5-11.9-19.8-22.5-27.6-34.7c-35.2-55.1-69.7-110.6-104.3-166.1 c-9-14.5-17.6-29.3-26.6-43.8c-10.8-17.3-26.3-24.4-43.9-20.6c-20.7,4.4-32.8,25-23.7,44.1c8.2,17.2,19.2,33.2,29.3,49.5 c35.2,56.4,69.7,113.1,99.2,172.8c7.5,15.2,13.1,31.4,19.6,47.2c0.9,2.1,2,4.2,3.7,7.4C295.2,425.8,319.7,407.4,347.9,394z"/> </svg> <p>Left</p> </div> <div class="right"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 864 808" style="enable-background:new 0 0 864 808;" xml:space="preserve"> <style type="text/css"> .st0{fill:#FFFFFF;} </style> <path class="st0" d="M400.5,367.5c3.1-8.1,7-16,9.1-24.3c6.4-25.9,12.5-51.9,17.9-78c5.6-27.2,10.4-54.5,15-81.9 c5.3-31.1,9.8-62.3,15-93.3c3.3-19.9,4.5-40.4,16-58.2C483.1,16.9,496,8,514.2,10.4c17.6,2.3,28.6,13.9,32.4,30.3 c2.9,12.5,4.2,26.1,2.4,38.7c-7.3,49.1-16.9,97.9-24.2,147c-7.1,48.3-15.7,96.6-14.9,145.7c0.1,3.7,0.4,7.5,0.8,11.2 c0.1,1,0.7,2,1.7,4.8c3.9-3,8-5,10.4-8.3c17.2-23.5,35.2-46.4,50.7-70.9c33.8-53.7,66.3-108.4,99.4-162.6 c6.4-10.6,14.9-18.9,26.7-23.1c17.7-6.2,37.5-1.4,48.4,11.3c11.3,13.1,13,32.4,2.8,49.5c-19.3,32.3-40.5,63.5-59.1,96.2 c-26.3,46.1-51.2,93-76.1,139.8c-5,9.3-8.1,19.8-11,30c-1.1,3.8-0.4,9.9,2,12.3c2.4,2.2,9,2.7,12.2,1c21.7-11.9,43.8-23.4,64.3-37.1 c31.5-21.1,61.8-44,92.8-65.8c13.8-9.8,28.5-18.1,46.1-18.4c27.7-0.5,43.3,23.3,32.3,48.9c-6.3,14.7-17.5,24.6-30.1,33.4 c-53.5,37.3-105.2,76.9-154,120.3c-4.2,3.7-8,7.9-12.4,11.4c-13.6,11-18,27.1-24.4,42.4c-22.6,54-50.9,104.6-89.4,149 c-11.8,13.6-24.9,25.9-41.8,32.9c-21.9,9.1-44.4,7.8-66.8,1.5c-12.6-3.6-24.7-9.2-37.5-11.2c-20.8-3.3-41.8-5.1-62.8-6.1 c-27.5-1.3-53.5-7-73.1-27.5c-15.6-16.3-30.3-33.8-43.2-52.3c-19.9-28.5-31.8-60.8-40.5-94.4c-8.8-34.2-28.7-62.3-51.6-88.4 c-31.1-35.4-67.1-65-106.9-90c-10-6.3-10.7-9.3-3.6-19c13.8-19.1,33.6-25.7,56-25.4c34.3,0.4,63.4,15.2,90.9,34 c26.5,18.1,48.3,41.2,69,65.4c5.7,6.7,11.9,13,18.5,18.8c8.3,7.3,13.9,6.3,17.8-3.8c4.1-10.6,8.2-21.7,9.3-32.9 c3-29.9,0.9-59.9-4.4-89.4c-7.8-42.5-16-85-25.5-127.2c-8.1-35.9-18.3-71.3-27.6-107c-4.2-16-6.3-32,0.4-47.9 c11.9-28.3,43.7-33.3,64-10.1c11.1,12.7,15.1,28.6,19.9,44.1c14,45.1,27.2,90.4,42.2,135.2c11.4,33.8,24.9,67,37.9,100.2 c2.9,7.5,8,14.1,12.1,21.1C397.9,367.8,399.2,367.6,400.5,367.5z M386.5,369c-7.8-17.6-15.8-33.6-22.2-50.1 c-27.3-70.4-48.9-142.8-70.1-215.2c-3.8-12.8-8.3-25.4-18.7-34.8C258.8,54,237,58.1,227.9,78.4c-6.3,13.9-4.8,28.3-1.2,42.4 c9,35.4,19.6,70.5,27.3,106.2c11,51.1,21.2,102.5,29.1,154.2c3.7,24.3,2.3,49.6,0.8,74.3c-0.7,11.5-6.3,23.1-11.4,33.8 c-4.6,9.7-12.6,11.7-21.3,5.6c-8.2-5.7-15.8-12.7-22.4-20.3c-25.6-29.7-52.4-57.8-86.6-77.8c-25.2-14.7-51.7-24.4-81.5-21.4 c-13.8,1.4-25.7,6.8-35,17.3c-7.4,8.4-7.3,9.6,2,15.5c40.6,25.9,77.1,56.5,108.3,93.2c22.5,26.4,41.2,55.1,50,89.4 c8.7,34.1,22,66.2,42,95.5c13.2,19.3,28.1,37.1,46.3,51.8c17.9,14.4,39.4,18.7,61.7,18.8c32.3,0.1,63.5,4.6,94.2,15.6 c41.8,15,77.8,5.8,107.3-28.8c38-44.6,67.4-94.2,88.7-148.5c8.5-21.6,19.7-39.6,37-54.8c49.6-43.6,101.9-83.7,155.7-122 c9.2-6.6,17.6-14.8,24.7-23.6c8.4-10.5,8.4-26.7,1.9-35.2c-7.4-9.8-19.7-13.2-34.1-8.5c-7.8,2.5-15.8,5.5-22.5,10 c-18.9,12.5-37.3,25.9-55.9,38.9c-38,26.5-73.7,56.7-117.9,73.2c0,7.4,10.1,11.6,7,22.2c-3-3.2-5.1-5-6.7-7.2 c-3.1-4.3-5.8-8.9-8.9-13.3c-36-50.7-84.5-82-145.8-93.2c-32.9-6-65.8-7.2-99-3.7c-2.9,0.3-5.9,0.9-8.8,0.5c-1.9-0.3-3.7-1.9-5.5-3 c1.8-1.2,3.5-3.2,5.4-3.4c8.5-1,17-1.5,25.6-2.2C381.1,369.7,383.6,369.4,386.5,369z M502.4,383.5c0-9.6-0.9-20,0.2-30.2 C507,312.1,511.2,271,517,230c6.5-45.4,14.8-90.6,22.1-135.9c2.7-16.8,6.8-33.6,1.2-50.7c-4.2-12.7-11.9-22.4-25.1-25.7 c-12.4-3-23.3,1.8-30.4,11.7c-6,8.5-11.6,18.3-13.8,28.3c-5.1,23.2-8,46.8-11.9,70.2c-6.1,36.3-11.8,72.7-18.6,108.9 c-5.5,29.6-11.9,59.1-18.6,88.5c-3.3,14.4-8.3,28.5-12.2,41.9C440.4,372.6,471.2,378,502.4,383.5z M595.6,449.8 c1.6-3.3,2.8-5.3,3.7-7.4c6.5-15.7,12.1-31.9,19.6-47.2c29.5-59.6,64-116.4,99.2-172.8c10.2-16.3,21.1-32.2,29.3-49.5 c9.1-19.1-3-39.6-23.7-44.1c-17.6-3.8-33.1,3.3-43.9,20.6c-9.1,14.5-17.6,29.3-26.6,43.8c-34.6,55.4-69.1,111-104.3,166.1 c-7.8,12.2-18.1,22.9-27.6,34.7C549.5,407.4,574,425.8,595.6,449.8z"/> </svg> <p>Right</p> </div> <div class="lr-close">Close</div> <small>This website is optimized for the <em>right</em> hand.</small> </div> </div>'
                }).appendTo("body");

                sessionStorage.setItem('showPopupOnce','true');
            }
        } else {
            $(".lr-popup").css("display", "none");
        }

        var popup = $('.lr-popup');

        if (settings.popupDelay != 0) {
            var delay = settings.popupDelay;
            popup.css("display", "none").delay(delay).fadeIn();
        } else {
            popup.css("display", "none");
        }

        $('.lr-close').on('click', function() {
            popup.css("display", "none");
        });

        if (settings.defaultHand == "left") {
            if (settings.showOptimizationNotice) {
                $(".lr-popup small > em").html("LEFT");
            } else {
                $(".lr-popup small").css("display", "none");
            }

            $('.left').on('click', function() {
                popup.css("display", "none");
            });

            $('.right').on('click', function() {
                reverseAll();
                reverseFirstLast();
                reverseSpecific();
                popup.css("display", "none");
            });
        }

        if (settings.defaultHand == "right") {
            var popup = $('.lr-popup');

            if (settings.showOptimizationNotice) {
                $(".lr-popup small > em").html("RIGHT");
            } else {
                $(".lr-popup small").css("display", "none");
            }

            $('.right').on('click', function() {
                popup.css("display", "none");
            });

            $('.left').on('click', function() {
                reverseAll();
                reverseFirstLast();
                reverseSpecific();
                popup.css("display", "none");
            });
        }

        if (settings.detectTextAlign) {
            $('.lr-toggle').on('click',function() {
                // auto detect text-align
                var lrItem = $(standardRow).children(rowChild);
                if (lrItem.css("text-align") == "left") {
                    lrItem.css("text-align", "right");
                } else {
                    lrItem.css("text-align", "left");
                }
            });
        }

        if (settings.detectFloat) {
            // auto detect float
            var lrItem = $(standardRow).children(rowChild);
            if (lrItem.css("float") == "left") {
                lrItem.css("float", "right");
            } else {
                lrItem.css("float", "left");
            }
        }
    };
}(jQuery));
