<template>
  <div className="tweet-list">
    <tweet
      v-for="tweet in tweets"
      :key="tweet.id"
      :user="tweet.user"
      :created_at="tweet.created_at"
      :text="tweet.text"
    />
  </div>
</template>

<script>
  import Tweet from "./Tweet"

  export default {
    name: "tweetlist",
    components: {
      tweet: Tweet
    },
    props: {
      tweets: Array
    }
  }
</script>

<style scoped>
  .tweet-list {
    max-width: 500px;
    margin: 3rem auto auto;
  }
</style>
