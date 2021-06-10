<template>
  <div
    class="j__title--wrapper"
    :style="styleProps"
  >
    <template v-if="moduleJson.type === 1">
        <div
            class="type--one"
            :class="{fw: styleProps.fontWeight}"
        > {{moduleJson.contentProps.text}}</div>
    </template>
    <template v-else>
        <div class="type--two"  :class="{fw: styleProps.fontWeight === 0? false : true}">
          {{moduleJson.contentProps.text}}
          <span class="more">
            查看更多
            <RightOutlined  />
          </span>
        </div>
    </template>
  </div>
</template>

<script>
import {computed, defineComponent} from "vue"
import usePropsPick from "@/hooks/usePropsPick";
import useTransform2PropsType from "@/hooks/useTransform2PropsType";
import { mapFz,mapTa } from '@/maps/mapDictionary';
import { titleCompProps } from '@/maps/componntDefaultStyleProps';
import {
  RightOutlined
} from '@ant-design/icons-vue';
/* 获取title组件默认属性 */
const defaultProps = useTransform2PropsType(titleCompProps)
export default defineComponent({
  name: "JTitle",
  props: {
    moduleJson:{
      type: Object
    },
    ...defaultProps
  },
  components: {
    RightOutlined
  },
  setup(props) {
    /* 获取title组件样式属性 */
    const { styleProps } = usePropsPick(props, titleCompProps)
    const fz = computed(() => mapFz[styleProps.value.fontSize])
    const textAlign = computed(() => mapTa[styleProps.value.textAlign])
    const iconColor = computed(() => styleProps.value.iconColor)
    return {
      styleProps,
      fz,
      textAlign,
      iconColor
    }
  }
})


</script>

<style lang="scss" scoped>
.j__title--wrapper{
  box-sizing: border-box;
  white-space: pre-wrap;
  position: relative !important;
  display: flex;
  align-items: center;
  height: calc(v-bind(styleProps.height) * 1px);
  width: calc(v-bind(styleProps.width) * 1px);
  font-size: v-bind(fz);
  .type--one{
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: v-bind(textAlign);
    padding: 0 15px;
  }
  .type--two{
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
}
.fw{
  font-weight: 700;
}
.more{
  color: v-bind(iconColor);
  font-size: 14px;
  font-weight: 400;
}
</style>
