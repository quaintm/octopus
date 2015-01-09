(function ($, window) {
}).call(this, jQuery, window);

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('.my-dropdown').dropdown();
  $('.my-dropdown').tooltip();

});

jQuery(document).ready(function($) {
      $('.clickable_row tr').click(function() {
            window.document.location = $(this).data('url');
      });
});