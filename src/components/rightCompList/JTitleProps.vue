<template>
  <a-tabs default-active-key="1" type="line">
    <a-tab-pane key="1" tab="内容设置">
      <div class="props__form--wrapper">
        <h3 class="style--title">标题</h3>
        <!-- 标题文案  -->
        <a-row class="props--item">
          <a-col class="label">
            标题文案
          </a-col>
          <div class="props--component">
            <a-input
                placeholder="请填写标题内容"
                v-model:value="contentProps.text"
            ></a-input>
          </div>
        </a-row>
        <!-- 跳转链接  -->
        <a-row class="props--item" v-if="type === 2">
          <a-col class="label">
            跳转链接
          </a-col>
          <div class="props--component" style="justify-content: flex-start">
            <a-button type="link" style="margin-left: -15px">请选择跳转链接</a-button>
          </div>
        </a-row>
      </div>
    </a-tab-pane>
    <a-tab-pane key="2" tab="样式设置">
      <div class="props__form--wrapper">
        <h3 class="style--title">样式设置</h3>
        <!-- 字号大小  -->
        <a-row class="props--item">
          <a-col class="label">
            字号大小
          </a-col>
          <div class="color__picker--value">{{mapFz[styleProps.fontSize]}}</div>
          <div class="props--component">
            <a-radio-group v-model:value="styleProps.fontSize" >
              <a-radio-button
                  v-for="(item,idx) in mapFontSize"
                  :key="idx"
                  :value="item.value">{{item.text}}</a-radio-button>
            </a-radio-group>
          </div>
        </a-row>
        <!-- 对齐方式  -->
        <a-row class="props--item" v-if="type === 1">
          <a-col class="label">
            对齐方式
          </a-col>
          <div class="props--component">
            <a-radio-group v-model:value="styleProps.textAlign" >
              <a-radio-button
                  v-for="(item,idx) in mapTextAlign"
                  :key="idx"
                  :value="item.value">{{item.text}}</a-radio-button>
            </a-radio-group>
          </div>
        </a-row>
        <!--  空白间距 -->
        <a-row class="props--item">
          <a-col class="label">
            空白间距
          </a-col>
          <div class="props--component">
            <a-slider
                class="slider"
                v-model:value="styleProps.height"
                v-bind="extraProps"
            >
            </a-slider>
            <a-input-number
                v-model:value="styleProps.height"
                v-bind="extraProps"
            ></a-input-number>
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
        <!--  图标颜色 -->
        <a-row class="props--item"  v-if="type === 2">
          <a-col class="label">
            图标颜色
          </a-col>
          <div class="props--component">
            <div class="color__picker--wrapper">
              <div class="color__picker--value">{{styleProps.iconColor}}</div>
              <div class="color__picker--native">
                <span @click.prevent="onChange('#eeeeee')" class="color__picker--reset">重置</span >
                <input
                    type="color"
                    :value="styleProps.iconColor"
                    @input="onIconColorChange($event.target.value)"
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
        <!--  字体加粗 -->
        <a-row class="props--item">
          <a-col class="label">
            字体加粗
          </a-col>
          <div class="props--component">
            <a-checkbox
                :checked="styleProps.fontWeight === 0? false : true"
                @change="onFontWeightChange"
            >
              粗体
            </a-checkbox>
          </div>
        </a-row>
      </div>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import {defineComponent} from "vue"
import { mapFontSize,mapFz,mapTextAlign} from '@/maps/mapDictionary'
import {cloneDeep} from "lodash-es";

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
  emits: ['change','contentChange'],
  setup(props, ctx) {
    const extraProps = { min: 28, max: 40, step: 1 }
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
    const onIconColorChange = (e) => {
      let tmp = cloneDeep(props.styleProps)
      tmp.iconColor = e;
      ctx.emit('change', tmp)
    }
    const onFontWeightChange = (e) => {
      let tmp = cloneDeep(props.styleProps)
      tmp.fontWeight = e.target.checked === false ? 0 : 1;
      ctx.emit('change', tmp)
    }

    return {
      mapFontSize,
      mapFz,
      mapTextAlign,
      extraProps,
      onChange,
      onColorChange,
      onIconColorChange,
      onFontWeightChange
    }
  }
})


</script>

<style lang="scss" scoped>
@import '../../style/common.scss';

</style>