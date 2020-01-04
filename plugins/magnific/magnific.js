$(document).ready(function () {
  $('#projects__modal').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      // options for gallery
      enabled: true
    }
    // other options
  });

});
