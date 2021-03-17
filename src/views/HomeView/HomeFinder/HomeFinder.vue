<template>
  <label for="finderText"/>
  <input
    id="finderText"
    placeholder="type twitter user to search"
    @input="handleFind"
  />
  <input
    id="findButton"
    type="button"
    value="Find"
  />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    handleFind(ev) {
      console.log(`handling find ${ev.target.value}`);
      this.$emit('find', ev.target.value);
    },
  },
});
</script>

<style>
  #findButton {
    width: 10%;
  }
  #finderText {
    width: 40%;
    height: 2em;
  }
</style>
