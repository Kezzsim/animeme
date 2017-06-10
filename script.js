var videoSp
$(function () {
    //Written by Kari Bary on June Seventh Twenty Seventeen
    //Wait for all the assets to come in, then jump to the assetsLoaded
    document.querySelector( 'a-assets' ).addEventListener( 'loaded', assetsLoaded )

});

function assetsLoaded () {
  videoSp = $('#DJvideo').get(0);
  setMode();

  $("#loader").remove();

  $("#menu li a").on("click", function (evt) {
            var selected = evt.target.closest("li");
            $("#menu li").removeClass("active");
            $("#" + selected.id).attr("class", "active");
            //console.log($("#MusicBtn").hasClass("active"));
            setMode();

        });

}

function setMode () {

  if($("#infoBtn").hasClass("active")){
    $("#introText").show();
  }
  else {
    $("#introText").hide();
  }

  if($("#VidBtn").hasClass("active")){
    $("#Vids").show();
  }
  else {
    $("#Vids").hide();
  }

  if($("#CalBtn").hasClass("active")){
    $("#Events").show();
  }
  else {
    $("#Events").hide();
  }

  if($("#MusicBtn").hasClass("active")){
    videoSp.play()
    $("#Perf").show();
    if (!videoSp.paused) {
      console.log(videoSp.paused)
      $("a-videosphere").attr('visible', "true");
      $("#renderedObjects").attr('visible', "false");
      $("a-sky").attr('visible', "false");
    }
    else {
      $("a-sky").attr("src", "#skyBkp");
      $("#3dObjects").attr('visible', "false");
    }

  }
  else{
    $("#Perf").hide();
    $("a-videosphere").attr('visible', "false");
    $("a-sky").attr("src", "#sky");
    $("a-sky").attr('visible', "true");
    $("#renderedObjects").attr('visible', "true");
  }

  if($("#thksBtn").hasClass("active")){
    $("#Thanks").show();
  }
  else {
    $("#Thanks").hide();
  }
}
