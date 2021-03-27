<template>
  <swiper>
    <swiperItem v-for="item in banners">
      <a v-bind:href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiperItem>
  </swiper>

</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      SwiperItem,
      Swiper
    }
  }
</script>

<style scoped>

</style>
