var payload;
var videoIndex = 1;

function loadPage(storyName) {
    $.getJSON( "storyList.json", function(data) {
        if(data[storyName]) {
            $(".mainTitle").html(storyName);
            payload = data[storyName];
            $(".container").append('<video id="my-video" height="640" width="360" autoplay onended="cycleVideos();"> <source id="ss"  src="'+payload[0]["url"]+'" type="video/mp4"></video>')
            $(".container").append("<div id='underVideoTxt'><img id='underImage' src='"+payload[0]['profile_pic']+"'><span id='underText'>"+payload[0]['full_name']+"</span></div>");
        } else {
            
        }
    });
}

function cycleVideos() {
    var videoElement = $("#my-video");
    if(videoIndex >= payload.length) {
        videoIndex = 0;
    }
    videoElement.attr("src", payload[videoIndex]["url"]);
    videoElement.get(0).play();
    $("#underImage").attr("src", payload[videoIndex]['profile_pic']);
    $("#underText").text(payload[videoIndex]['full_name']);
    videoIndex++;
}

$(document).ready(function() {  
    $("body").on("click", "video", function() {
        cycleVideos();
    })
})