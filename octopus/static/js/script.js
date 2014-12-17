(function($, window) {
}).call(this, jQuery, window);

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('.my-dropdown').dropdown();
    $('.my-dropdown').tooltip();
});
