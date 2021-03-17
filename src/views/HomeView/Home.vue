<template>
  <div id="twitter-feed">
    <div class="header">
      <HomeFinder></HomeFinder>
    </div>
    <div class="content">
      <HomeTweetsList></HomeTweetsList>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HomeFinder from '@/views/HomeView/HomeFinder/HomeFinder.vue';
import HomeTweetsList from '@/views/HomeView/HomeTweetsList/HomeTweetsList.vue';
import useFinder from '@/views/HomeView/useFinder';

export default defineComponent({
  components: {
    HomeFinder,
    HomeTweetsList,
  },
  setup() {
    const { setFindText } = useFinder();

    return {
      setFindText,
    };
  },
});
</script>

<style>
  .header {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }
</style>
