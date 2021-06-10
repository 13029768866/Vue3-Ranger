<template>
  <div
      class="j__notice--wrapper"
      :style="styleProps"
  >
    <template v-if="dotPosition === 2">
      <van-notice-bar
          left-icon="volume-o"
          :scrollable="false"
          :color="color"
          :background="bgC"
      >
        <van-swipe
            vertical
            class="notice-swipe"
            :autoplay="3000"
            :show-indicators="false"
        >
          <van-swipe-item
              class="content"
              v-for="(item,idx) in moduleJson.contentProps.items"
              :key="idx"
          >{{item.content}}</van-swipe-item>
        </van-swipe>
      </van-notice-bar>
    </template>
    <template v-else>
      <van-notice-bar
          left-icon="volume-o"
          :scrollable="false"
          :color="color"
          :background="bgC"
      >
        <van-swipe
            class="notice-swipe"
            :autoplay="3000"
            :show-indicators="false"
        >
          <van-swipe-item
              class="content"
              v-for="(item,idx) in moduleJson.contentProps.items"
              :key="idx"
          >{{item.content}}</van-swipe-item>
        </van-swipe>
      </van-notice-bar>
    </template>

  </div>
</template>

<script>
import {defineComponent,computed } from "vue"
import usePropsPick from "@/hooks/usePropsPick";
import useTransform2PropsType from "@/hooks/useTransform2PropsType";
import { noticeCompProps } from '@/maps/componntDefaultStyleProps';

const defaultProps = useTransform2PropsType(noticeCompProps)

export default defineComponent({
  name: "JNotice",
  props: {
    moduleJson:{
      type: Object
    },
    ...defaultProps
  },
  setup(props) {
    const height = computed(() => props.height)
    const color = computed(() => props.color)
    const bgC = computed(() => props.backgroundColor)
    const dotPosition = computed(() => props.scroll)


    const { styleProps } = usePropsPick(props, noticeCompProps)
    return {
      height,
      color,
      bgC,
      dotPosition,
      styleProps
    }
  }
})


</script>

<style lang="scss" scoped>
.j__notice--wrapper{
  box-sizing: border-box;
  position: relative !important;
  border: 1px solid #000;
  height: calc(v-bind(styleProps.height) * 1px);
  width: calc(v-bind(styleProps.width) * 1px);
  verflow: hidden;
}

.notice-swipe {
  height: 40px;
  line-height: 40px;
  .content{
    width: 330px;
    padding-left: 5px;
  }
}
</style>