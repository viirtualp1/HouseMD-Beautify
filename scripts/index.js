var TIMEOUT_TO_PLAY_VIDEO = 5 * 1000;
var EPISODES_IN_SEASON = {
    1: 17,
    2: 23,
    3: 23,
};
function getParams() {
    var search = new URL(location.href).search;
    var searchParams = new URLSearchParams(search);
    return {
        season: Number(searchParams.get('season')),
        episode: Number(searchParams.get('episode')),
    };
}
function getInfo() {
    var _a = getParams(), season = _a.season, episode = _a.episode;
    var lastEpisode = EPISODES_IN_SEASON[season] || 24;
    var isLastEpisode = lastEpisode === episode;
    if (isLastEpisode) {
        season += 1;
    }
    return {
        season: season,
        episode: isLastEpisode ? 1 : episode,
    };
}
function init() {
    var videoPlayer = document.querySelector('video');
    var videoDuration = videoPlayer.duration;
    setInterval(function () {
        var videoCurrentTime = videoPlayer.currentTime;
        var timeToVideoEnd = videoDuration - videoCurrentTime;
        if (timeToVideoEnd <= 30 && videoDuration > 10) {
            var _a = getInfo(), season = _a.season, episode = _a.episode;
            location.href = "https://plplayer.online/s/486?season=".concat(season, "&episode=").concat(episode + 1, "&voice=14&vonly=true");
        }
    }, 1000);
}
setTimeout(init, TIMEOUT_TO_PLAY_VIDEO);
