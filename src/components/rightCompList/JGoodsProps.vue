<template>
  <a-tabs default-active-key="2" type="line">
    <a-tab-pane key="1" tab="内容设置">
      <div class="props__form--wrapper">
        <h3 class="style--title">商品内容</h3>
        <!-- 购买按钮  -->
        <a-row class="props--item">
          <a-col class="label">
            购买按钮
          </a-col>
          <div class="color__picker--value">{{mapShow[contentProps.showCart]}}</div>
          <div class="props--component">
            <a-switch
                :checked="contentProps.showCart === 0? false : true"
                @change="onShowCartChange" />
          </div>
        </a-row>
        <!-- 划线价格  -->
        <a-row class="props--item">
          <a-col class="label">
            划线价格
          </a-col>
          <div class="color__picker--value">{{mapShow[contentProps.showSalePrice]}}</div>
          <div class="props--component">
            <a-switch
                :checked="contentProps.showSalePrice === 0? false : true"
                :disabled="styleProps.listType === 4"
                @change="onShowSalePriceChange" />
          </div>
        </a-row>
        <!-- 商品销量  -->
        <a-row class="props--item">
          <a-col class="label">
            商品销量
          </a-col>
          <div class="color__picker--value">{{mapShow[contentProps.showGoodsSaleNum]}}</div>
          <div class="props--component">
            <a-switch
                :checked="contentProps.showGoodsSaleNum === 0? false : true"
                :disabled="styleProps.listType === 4"
                @change="onShowGoodsSaleNumChange" />
          </div>
        </a-row>

      </div>
    </a-tab-pane>
    <a-tab-pane key="2" tab="样式设置">
      <div class="props__form--wrapper1">
        <h3 class="style--title">样式设置</h3>
        <!-- 列表样式  -->
        <a-row class="props--item1">
          <div class="label">
            列表样式
          </div>
          <div class="props--component">
            <a-radio-group v-model:value="styleProps.listType" >
              <a-radio-button
                  v-for="(item,idx) in mapList"
                  :key="idx"
                  :value="item.value">{{item.text}}</a-radio-button>
            </a-radio-group>
          </div>
        </a-row>
        <!-- 卡片样式  -->
        <a-row class="props--item1">
          <div class="label">
            卡片样式
          </div>
          <div class="props--component">
            <a-radio-group v-model:value="styleProps.cardType" >
              <a-radio-button
                  v-for="(item,idx) in mapCard"
                  :key="idx"
                  :value="item.value">{{item.text}}</a-radio-button>
            </a-radio-group>
          </div>
        </a-row>
        <!-- 边角样式  -->
        <a-row class="props--item" >
          <a-col class="label">
            边角样式
          </a-col>
          <div class="props--component">
            <a-radio-group v-model:value="styleProps.borderRadius" >
              <a-radio-button
                  v-for="(item,idx) in mapBorderRd"
                  :key="idx"
                  :value="item.value">{{item.text}}</a-radio-button>
            </a-radio-group>
          </div>
        </a-row>
        <!-- 距离设置  -->
        <a-row class="props--item">
          <a-col class="label">
            商品间距
          </a-col>
          <div class="props--component">
            <a-slider
                class="slider"
                v-model:value="styleProps.goodsGutter"
                v-bind="extraGoodsGutterProps"
            >
            </a-slider>
            <a-input-number
                v-model:value="styleProps.goodsGutter"
                v-bind="extraGoodsGutterProps"
            ></a-input-number>
          </div>
        </a-row>
        <a-row class="props--item">
          <a-col class="label">
            左右间距
          </a-col>
          <div class="props--component">
            <a-slider
                class="slider"
                v-model:value="styleProps.paddingLR"
                v-bind="extraPaddingLRrProps"
            >
            </a-slider>
            <a-input-number
                v-model:value="styleProps.paddingLR"
                v-bind="extraPaddingLRrProps"
            ></a-input-number>
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
import { mapShow, mapList,mapCard, mapBorderRd} from '@/maps/mapDictionary'
import {cloneDeep} from "lodash-es";

export default defineComponent({
  name: "JGoodsProps",
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
    const extraGoodsGutterProps = { min: 5, max: 15, step: 1 }
    const extraPaddingLRrProps = { min: 0, max: 30, step: 1 }
    /* 内容修改 */
    const onShowCartChange = (e) => {
      let tmp = cloneDeep(props.contentProps)
      tmp.showCart = e === false ? 0 : 1;
      ctx.emit('contentChange', tmp)
    }
    const onShowSalePriceChange = (e) => {
      let tmp = cloneDeep(props.contentProps)
      tmp.showSalePrice = e === false ? 0 : 1;
      ctx.emit('contentChange', tmp)
    }
    const onShowGoodsSaleNumChange = (e) => {
      let tmp = cloneDeep(props.contentProps)
      tmp.showGoodsSaleNum = e === false ? 0 : 1;
      ctx.emit('contentChange', tmp)
    }
    /* 样式修改 */
    const onChange = (e) => {
      let tmp = cloneDeep(props.styleProps)
      tmp.backgroundColor = e;
      ctx.emit('change', tmp)
    }

    return {
      mapShow,
      mapList,
      mapCard,
      mapBorderRd,
      extraGoodsGutterProps,
      extraPaddingLRrProps,
      onChange,
      onShowCartChange,
      onShowSalePriceChange,
      onShowGoodsSaleNumChange
    }
  }
})


</script>

<style lang="scss" scoped>
@import '../../style/common.scss';

</style>