<template>
  <a-tabs default-active-key="1" type="line">
    <a-tab-pane key="1" tab="内容设置">
      <j-notice-content
        :data="contentProps"
        @contentChange="contentChange"
      ></j-notice-content>
    </a-tab-pane>
    <a-tab-pane key="2" tab="样式设置">
      <div class="props__form--wrapper">
        <h3 class="style--title">样式设置</h3>
        <!-- 字号大小  -->
        <a-row class="props--item">
          <a-col class="label">
            滚动方向
          </a-col>
          <div class="props--component">
            <a-radio-group v-model:value="styleProps.scroll" >
              <a-radio-button
                  v-for="(item,idx) in mapScroll"
                  :key="idx"
                  :value="item.value">{{item.text}}</a-radio-button>
            </a-radio-group>
          </div>
        </a-row>
        <!--  文字颜色 -->
        <a-row class="props--item" >
          <a-col class="label">
            文字颜色
          </a-col>
          <div class="props--component">
            <div class="color__picker--wrapper">
              <div class="color__picker--value">{{styleProps.color}}</div>
              <div class="color__picker--native">
                <span @click.prevent="onChange('#eeeeee')" class="color__picker--reset">重置</span >
                <input
                    type="color"
                    :value="styleProps.color"
                    @input="onColorChange($event.target.value)"
                />
              </div>

            </div>
          </div>
        </a-row>
        <!--  背景颜色 -->
        <a-row class="props--item">
          <a-col class="label">
            背景颜色
          </a-col>
          <div class="props--component">
            <div class="color__picker--wrapper">
              <div class="color__picker--value">{{styleProps.backgroundColor}}</div>
              <div class="color__picker--native">
                <span @click.prevent="onChange('#EEEEEE')" class="color__picker--reset">重置</span >
                <input
                    type="color"
                    :value="styleProps.backgroundColor"
                    @input="onChange($event.target.value)"
                />
              </div>

            </div>
          </div>
        </a-row>
      </div>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import {defineComponent} from "vue"
import { mapScroll } from '@/maps/mapDictionary'
import {cloneDeep} from "lodash-es";
import JNoticeContent from "./content/JNoticeContent.vue";

export default defineComponent({
  name: "JTitleProps",
  props: {
    type: {
      type: Number
    },
    contentProps: {
      type: Object
    },
    styleProps: {
      type: Object
    }
  },
  components: {
    JNoticeContent
  },
  emits: ['change','contentChange'],
  setup(props, ctx) {
    const extraProps = { min: 28, max: 40, step: 1 }
    /* 内容修改 */
    const contentChange = (val) => {
      ctx.emit("contentChange", val);
    }

    /* 样式修改 */
    const onChange = (e) => {
      let tmp = cloneDeep(props.styleProps)
      tmp.backgroundColor = e;
      ctx.emit('change', tmp)
    }
    const onColorChange = (e) => {
      let tmp = cloneDeep(props.styleProps)
      tmp.color = e;
      ctx.emit('change', tmp)
    }

    return {
      mapScroll,
      extraProps,
      onChange,
      onColorChange,
      contentChange

    }
  }
})


</script>

<style lang="scss" scoped>
@import '../../style/common.scss';

</style>