<template>
  <div class="tweet-slider">
    <label for="encodedLabel">{{ label }}:</label>
    <input
      type="range"
      :id="encodedLabel"
      :min="min"
      :max="max"
      :value="value"
      v-on:change="onChange"
    />
  </div>
</template>

<script>
  export default {
    name: "slider",
    props: {
      label: {
        default: "Tweets per second",
        type: String
      },
      min: Number,
      max: Number,
      value: Number,
      onChange: Function
    },
    computed: {
      encodedLabel: self => {
        return encodeURIComponent(self.label)
      }
    }
  }
</script>

<style scoped>
  .tweet-slider {
    display: flex;
    justify-content: space-between;

    margin-top: 1em;
    margin-bottom: 1em;
  }
  .tweet-slider label {
    margin-right: 1.2rem;
    margin-bottom: 0;
  }

  input[type=range] {
    flex-grow: 1;
  }

  @media (max-width: 550px) {
    .tweet-slider {
      width: 100%;
      flex-flow: column nowrap;
      align-items: center;
    }

    input[type=range] {
      width: 100%;
      margin-top: 0.6em;
    }
  }
</style>
