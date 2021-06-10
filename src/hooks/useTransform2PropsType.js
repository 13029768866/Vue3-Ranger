import { mapValues } from "lodash-es";

/**
 *
 * @param   自定义的props对象
 * @returns 组件props使用类型
 */
const useTransform2ComponentProps = (props) => {
  return mapValues( props,item => {
    return  {
      type: item.constructor,
      default: item
    }
  })
}

export default useTransform2ComponentProps;