<template>
  <div class="app-container">
    <h1>Re-rendering {{ tweetsPerSecond }} times per second</h1>
    <h3>{{ tweetsRendered }} tweets rendered</h3>
    <slider
      :min="0"
      :max="50"
      :value="2"
      :onChange="updateTweetsPerSecond"
    />
    <TweetList :tweets="tweets" />
  </div>
</template>

<script>
import Slider from "./components/Slider"
import TweetList from "./components/TweetList"
import { getTweets } from "./data/get-tweets"

export default {
  name: "app",
  components: {
    Slider,
    TweetList
  },
  data() {
    const numTweets = 30

    return {
      tweetsPerSecond: 2,
      numTweets: numTweets,
      tweetsRendered: numTweets,
      tweets: getTweets(numTweets).reverse()
    }
  },
  methods: {
    updateTweetsPerSecond: function(e) {
      this.tweetsPerSecond = e.target.value
      if (this.interval) {
        clearInterval(this.interval)
      }
      this.interval = setInterval(
        this.updateTweets,
        this.getDelay(e.target.value)
      )
    },
    getDelay: function(updatesPerSecond) {
      return Math.round(1000 / updatesPerSecond)
    },
    updateTweets: function() {
      const generatedTweets = getTweets(1, this.tweetsRendered)
      const newTweets = generatedTweets.concat(this.tweets.slice(0, this.numTweets - 1))

      this.tweets = newTweets
      this.tweetsRendered = this.tweetsRendered + 1
    }
  },
  created: function() {
    this.interval = setInterval(
      this.updateTweets,
      this.getDelay(this.tweetsPerSecond)
    )
  }
}
</script>

<style scoped>
  .app-container {
    margin: 8vh auto;
    width: 90vw;
    max-width: 800px;
  }
</style>

<style>
  body {
    background-color: #f7f7f9;
  }
</style>
