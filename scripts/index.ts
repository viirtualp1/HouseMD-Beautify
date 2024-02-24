const TIMEOUT_TO_PLAY_VIDEO = 5 * 1000
const SECONDS_BEFORE_END_TO_TRIGGER_NEXT_EPISODE = 30
const MIN_VIDEO_DURATION_FOR_TRIGGER = 10
const DEFAULT_EPISODES_PER_SEASON = 24

const EPISODES_IN_SEASON = {
  1: 17,
  2: 23,
  3: 23,
}

function getParams() {
  const searchParams = new URLSearchParams(window.location.search)

  return {
    season: Number(searchParams.get('season')),
    episode: Number(searchParams.get('episode')),
  }
}

function getNextEpisodeInfo() {
  let { season, episode } = getParams()

  const lastEpisode = EPISODES_IN_SEASON[season] || DEFAULT_EPISODES_PER_SEASON
  const isLastEpisode = lastEpisode === episode

  if (isLastEpisode) {
    season = 1
    episode = 1
  }

  return {
    season,
    episode,
  }
}

function goToNextEpisode() {
  const { season: nextSeason, episode: nextEpisode } = getNextEpisodeInfo()

  location.href = `https://plplayer.online/s/486?season=${nextSeason}&episode=${nextEpisode}&voice=14&voonly=true`
}

function initializeVideoPlayer() {
  const videoPlayer = document.querySelector('video')

  if (!videoPlayer) {
    return
  }

  const videoDuration = videoPlayer.duration

  setInterval(() => {
    const videoCurrentTime = videoPlayer.currentTime
    const timeToVideoEnd = videoDuration - videoCurrentTime

    if (
      timeToVideoEnd <= SECONDS_BEFORE_END_TO_TRIGGER_NEXT_EPISODE &&
      videoDuration > MIN_VIDEO_DURATION_FOR_TRIGGER
    ) {
      goToNextEpisode()
    }
  }, 1000)
}

// Wait for TIMEOUT_TO_PLAY_VIDEO before initializing
setTimeout(initializeVideoPlayer, TIMEOUT_TO_PLAY_VIDEO)
