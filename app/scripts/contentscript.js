'use strict';

(function($, moment) {
    $(document).on('mouseup', function(e) {
        var text = window.getSelection().toString();
        if ( text.length > 0 ) {
            var m = moment(text);
            if ( m.isValid() ) {
                var str = m.format('dddd (L)');
                $(e.target).attr('title', str);
            }
        }
    });
})($, moment);
