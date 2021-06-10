/**
 * @Desc: 样式属性筛选
 * @author: WZJ
 * @date: 2021/05/27
 */

import { computed } from  'vue'
import { pick } from  'lodash-es'

/**
 *
 * @param props  全部属性
 * @param picks  需要筛选属性Array
 */
const usePropsPick = (props, picks) => {
  picks = Object.keys(picks)
  const styleProps = computed(() => pick(props,picks))

  /* 根据自定义事件属性，设置自定义事件 */
  const handleClick = () => {
    if(props.actionType === "url" && props.url){
      window.open(props.url, "_blank")
    }
  }

  return {
    styleProps,
    handleClick
  }
}

export default usePropsPick;