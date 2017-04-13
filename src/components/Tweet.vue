<template>
  <div class="tweet media">
    <img :src="user.profile_image_url" width="48" height="48" class="d-flex mr-3">
    <div class="media-body">
      <h5 class="mt-0 mb-1 username">
        {{user.username}}
        <small class="text-muted"> • {{ formattedDate }}</small>
      </h5>
      <div class="tweet-body">{{ text }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tweet",
    props: {
      user: {
        profile_image_url: String,
        username: String
      },
      text: String,
      created_at: String
    },
    computed: {
      formattedDate: self => {
        const d = new Date(self.created_at)
        return `${d.getDate()}/${(d.getMonth() + 1)} ${d.getFullYear()}`
      }
    }
  }
</script>

<style scoped>
  .tweet {
    background-color: white;
    padding: 9px 12px;
    border: thin solid #e1e8ed;
    border-top: none;

    color: #292f33;
  }

  .tweet > img {
    border-radius: 5px;
  }

  .tweet .username {
    color: #292f33;
    font-size: 14px;
    font-weight: bold;
  }

  .tweet-body {
    font-size: 16px;
    line-height: 22px;
    padding-bottom: 10px;
  }
</style>
