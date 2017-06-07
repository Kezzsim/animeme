$(function () {
    document.querySelector( 'a-assets' ).addEventListener( 'loaded', assetsLoaded )

});

function assetsLoaded () {
  $("#loader").remove();
  
}
