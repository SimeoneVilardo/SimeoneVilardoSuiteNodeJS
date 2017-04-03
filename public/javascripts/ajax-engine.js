/*global $*/

$("a[data-ajax*='true']").click(function() {
    var method = $(this).data('ajax-method');
    var mode = $(this).data('ajax-mode');
    var targetId = $(this).data('ajax-target');
    var url = $(this).attr('href');
    $.ajax({
            method: method,
            url: url
        })
        .done(function(html) {
            if (mode === 'replace') {
                $(targetId).html(html);
            }
        });
    return false;
});