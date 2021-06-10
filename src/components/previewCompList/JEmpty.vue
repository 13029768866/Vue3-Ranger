<template>
    <div
      class="j__empty--wrapper"
      :style="styleProps"
    >
      <div v-if="moduleJson.type === 2" class="line" ></div>
    </div>
</template>

<script>
import {defineComponent,computed} from "vue"
import usePropsPick from "@/hooks/usePropsPick";
import useTransform2PropsType from "@/hooks/useTransform2PropsType";
import { emptyCompProps } from '@/maps/componntDefaultStyleProps';
import { mapLine } from '@/maps/mapDictionary'


/* 获取empty组件默认属性 */
const defaultProps = useTransform2PropsType(emptyCompProps)
export default defineComponent({
  name: "JEmpty",
  props: {
    moduleJson:{
      type: Object
    },
    ...defaultProps
  },
  setup(props) {
    /* 获取空组件样式属性 */
    const { styleProps } = usePropsPick(props, emptyCompProps)
    const lineColor = computed(() => styleProps.value.lineColor)
    const lineStyle = computed(() =>  mapLine[styleProps.value.lineStyle])
    return {
      styleProps,
      lineColor,
      lineStyle
    }
  }
})


</script>

<style lang="scss" scoped>
.j__empty--wrapper{
  box-sizing: border-box;
  white-space: pre-wrap;
  position: relative !important;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(v-bind(styleProps.height) * 1px);
  width: calc(v-bind(styleProps.width) * 1px);
}
.line{
  width: 360px;
  height: 1px;
  border: 1px v-bind(lineStyle) v-bind(lineColor);
  border-bottom: 0;
}
</style>
