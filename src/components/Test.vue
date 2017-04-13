<template>
  <div class="test">
    <label>Show name: <input type="checkbox" v-model="showName"></label>
    <div>
      <label>First name: <input type="text" v-model="user.first_name"></label>
    </div>
    <div>
      <label>Last name: <input type="text" v-model="user.last_name"></label>
    </div>
    <h1 v-text="title" />
    <transition name="fade">
      <p v-if="showName">{{fullName}}</p>
    </transition>
    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>
    <button v-on:click="greet('Hello there')">Say hello</button>
    <input type="text" v-on:keyup="keyUp">
  </div>
</template>

<script>
  export default {
    name: "test",
    props: {
      title: {
        default: "Hello World",
        type: String
      }
    },
    data() {
      return {
        user: {
          first_name: "John",
          last_name: "Doe"
        },
        showName: true,
        items: [
          { title: "item one" },
          { title: "item two" },
          { title: "item three" },
          { title: "item four" },
          { title: "item five" }
        ]
      }
    },
    computed: {
      fullName: self => {
        return `${self.user.first_name} ${self.user.last_name}`
      }
    },
    methods: {
      greet: greeting => {
        alert(greeting)
      },
      keyUp: (e) => {
        console.log(e.target.value)
      }
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s ease-out;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
  }
</style>
