<template>
 <div class="props__form--wrapper">
    <h3 class="style--title">样式设置</h3>
    <!-- 线样式  -->
    <a-row class="props--item" v-if="type === 2">
        <a-col class="label">
          线样式
        </a-col>
      <div class="props--component">
        <a-radio-group v-model:value="styleProps.lineStyle" >
          <a-radio-button
              v-for="(item,idx) in mapLineStyle"
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
    <!--  线颜色 -->
   <a-row class="props--item" v-if="type === 2">
     <a-col class="label">
       线颜色
     </a-col>
     <div class="props--component">
       <div class="color__picker--wrapper">
         <div class="color__picker--value">{{styleProps.lineColor}}</div>
         <div class="color__picker--native">
           <span @click.prevent="onChange('#eeeeee')" class="color__picker--reset">重置</span >
           <input
               type="color"
               :value="styleProps.lineColor"
               @input="onLineChange($event.target.value)"
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
</template>

<script>
import { defineComponent,computed } from "vue"
import {mapLineStyle} from '@/maps/mapDictionary'
import { cloneDeep } from "lodash-es";

export default defineComponent({
  name: "JEmptyProps",
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
  emits: ['change'],
  setup(props,ctx) {
    const extraProps = { min: 10, max: 40, step: 1 }
    const onChange = (e) => {
      let tmp = cloneDeep(props.styleProps)
      tmp.backgroundColor = e;
      ctx.emit('change', tmp)
    }
    const onLineChange = (e) => {
      let tmp = cloneDeep(props.styleProps)
      tmp.lineColor = e;
      ctx.emit('change', tmp)
    }
    return {
      mapLineStyle,
      extraProps,
      onChange,
      onLineChange
    }
  }
})


</script>

<style lang="scss" scoped>
@import '../../style/common.scss';
</style>