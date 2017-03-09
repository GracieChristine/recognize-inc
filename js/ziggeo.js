//  This tells the code to wait until the page is
//  loaded and all of the elements on it are available
ZiggeoApi.Events.on("system_ready", function() {
  //  Grab the reference to the embedding as per
  //  https://ziggeo.com/docs/sdks/javascript/browser-integration/embed-methods#javascript-version=v2
  //  https://ziggeo.com/docs/sdks/javascript/browser-interaction/events#javascript-revision=v1-stable&javascript-version=v2

  var recorder = ZiggeoApi.V2.Recorder.findByElement(document.getElementById('ziggeo_recorder'));

  //  Use JavaScript to get notified when the video has been recorded
  recorder.on("verified", () => {
    //  verified used as per https://support.ziggeo.com/hc/en-us/community/posts/217975707-Wondering-where-submitted-event-is-when-using-v2-Then-check-this-out
    // console.log("The video with token " + recorder.get('video') + " has been submitted!");
  });

  //  JavaScript to obtain the raw url of the video file
  //  ZiggeoApi.Videos.source("");
  //  console.log(ZiggeoApi.Videos.source(""));

  //  Automate the display of videos by querying Ziggeo
  //  ZiggeoApi.Videos.index({}, {
  //
  //    success: function(args, videos) {
  //    for (var i = 0; i < videos.length; ++i)
  //     $("#videolocation").append("<ziggeoplayer ziggeo-video='" + videos[i].token + "' ziggeo-width=350 ziggeo-height=250></ziggeoplayer>");
  //  }
// });
});
