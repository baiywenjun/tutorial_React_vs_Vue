<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <div class="red">Testing 1 2 3 4</div>
    <!-- vue好用的双向绑定 -->
    <div>{{message}}</div>
    <div>{{messageComputed}}</div>
    <button v-on:click="someMethod">change state</button>
    <button v-on:click="someMethodWithArg('change state by arg')">change state with arg</button>
    <input type="text" @keyup="keyModifier" />
    <div v-for="(todo,index) in todos" :key="index">
      <span v-if="todo.finished">{{todo.title}}</span>
      <span v-else-if="!todo.finished">{{todo.title + ' NOT COMPLETE'}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'default value'
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: 'I am state',
      todos: [
        {title: 'Go to store', finished: false},
        {title: 'Learn Vue', finished: true},
        {title: 'Learn React', finished: false},
        {title: 'Finish Screencast', finished: true},
      ]
    }
  },
  mounted () {
    console.log('MOUNTED')
  },
  computed: {
    messageComputed () {
      return this.message + 'COMPUTED'
    }
  },
  methods: {
    someMethod () {
      this.message = 'message changed'
    },
    someMethodWithArg (arg) {
      this.message = arg
    },
    keyModifier (e) {
      // console.log(e.target)
      console.log('typed')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/testing.css";

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
