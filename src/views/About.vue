<template>
  <div class="about" :style="{ fontSize: postFontSize + 'em' }">
    <h1>This is an about page</h1>
    <BlogPost v-on:large-size="postFontSize+=$event"/>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
export default {
  components: {
    BlogPost
  },
  data() {
    return {
      postFontSize: 1
    };
  }
};
</script>

