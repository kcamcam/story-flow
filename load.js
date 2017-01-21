var payload;
var videoIndex = 1;

function loadPage(storyName) {
    $.getJSON( "storyList.json", function(data) {
        if(data[storyName]) {
            $(".mainTitle").html(storyName);
            payload = data[storyName];
            $(".container").append('<video id="my-video" height="640" width="360"autoplay onended="cycleVideos();"> <source id="ss"  src="'+data[storyName][0]["url"]+'" type="video/mp4"></video>')
        } else {
            
        }
    });
}

function cycleVideos() {
    var videoElement = $("#my-video");
    if(videoIndex < payload.length) {
        videoElement.attr("src", payload[videoIndex]["url"]);
        videoElement.get(0).play();
        videoIndex++;
        console.log(videoIndex);
    }
}