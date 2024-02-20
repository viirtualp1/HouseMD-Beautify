interface ParamsData {
    season: number
    episode: number
}

const TIMEOUT_TO_PLAY_VIDEO = 5 * 1000

const EPISODES_IN_SEASON = {
    1: 17,
    2: 23,
    3: 23,
}

function getParams(): ParamsData {
    const search = new URL(location.href).search
    const searchParams = new URLSearchParams(search);

    return {
        season: Number(searchParams.get('season')),
        episode: Number(searchParams.get('episode')),
    }
}

function getInfo() {
    let { season, episode} = getParams()

    const lastEpisode = EPISODES_IN_SEASON[season] || 24
    const isLastEpisode = lastEpisode === episode

    if (isLastEpisode) {
        season += 1
    }

    return {
        season,
        episode: isLastEpisode ? 1 : episode,
    }
}

function init() {
    const videoPlayer = document.querySelector('video')
    const videoDuration = videoPlayer.duration

    setInterval(() => {
        const videoCurrentTime = videoPlayer.currentTime
        const timeToVideoEnd = videoDuration - videoCurrentTime

        if (timeToVideoEnd <= 30 && videoDuration > 10) {
            const { season, episode } = getInfo()

            location.href = `https://plplayer.online/s/486?season=${season}&episode=${episode + 1}&voice=14&vonly=true`
        }
    }, 1000)
}

setTimeout(init, TIMEOUT_TO_PLAY_VIDEO)