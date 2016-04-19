/**
 * Very alpha. use at own risk!
 */

(function (jQuery) {
    var scroll = 0;
    var msecs = new Date().getTime();
    var scrolling = false;
    var timer = null;

    var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

    function eventbinder(options) {
        var self = this;
        jQuery(document).on('scroll touchmove',function() {
            if(is_chrome) {
                clearTimeout(timer);
                if (scrolling == false) {
                    msecs = new Date().getTime();
                }
                scrolling = true;

                var eventfired = new Date().getTime();
                var csstime =  eventfired-msecs;

                scroll = window.pageYOffset;
                msecs = eventfired;

                timer = setTimeout(function() {
                    scrolling = false;
                }, 1000);
            }

            var calc = "center " + parseInt(-window.pageYOffset / 4) + "px !important";
            var calc2 = (-window.pageYOffset / 2.5) + "px !important";

            if(is_chrome) {
                calc += "; transition : background-position " + (csstime) + "ms;";
                calc2 += "; transition : margin-top " + (csstime) + "ms";
            }
            jQuery(self).css("cssText", "background-position :" + calc);
            jQuery(self).find("div").css("cssText", "margin-top :" + calc2);
        });
    }

    jQuery.fn.parallaxScroll = function (options, parameter) {
        if (typeof(options) === "string") return Query.fn.parallaxScroll.methods[options](this, parameter);

        return this.each(function () {
            console.log(this);
            var options = jQuery.extend(true, {}, jQuery.fn.parallaxScroll.methods, jQuery.fn.parallaxScroll.methods, options);

            jQuery.data(this, 'options', {
                options: options
            });

            eventbinder.call(this, options);
        });

    };
})(jQuery);