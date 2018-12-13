<template>
  <div>{{user.name}}
      <ul>
          <li v-for="todo in todos" v-bind:key="todo">
            {{todo}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "UserDetails",
  computed: {
  },
  props:{
      
  },
  data() {
    return {
      user: {
        name: "wang",
        phone: "123123"
      },
      todos:[
          '努力',
          '奋斗'
      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
ul{
    list-style-type: none;
}
</style>
