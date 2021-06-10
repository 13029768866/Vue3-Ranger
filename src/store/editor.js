import { v4 as uuidv4 } from "uuid";
import { cloneDeep } from "lodash-es";
import { mapComponentTemplateData } from "@/maps/mapComponentTemplateData";


/*
*   moduleId:                 组件id
*   moduleSign:               组件渲染名字
*   materialType:             组件物料类型
*   type:                     组件类型
*   title:                    组件中文名字
*   moduleJson: {             组件数据
*     type:                   当前状态
*     contentProps:           内容数据
*     styleProps:             样式数据
*   }
* */

/* 测试数据 */


const editor = {
  state: {
    components: [],
    currentElement: "3",
  },
  mutations: {
    /* 设置画布组件属性和本地映射 */
    setEditorData(state,components){
      state.components = components.map(item => {
        let temp = cloneDeep(item['moduleJson']['styleProps'])
        let tempType =  item['moduleJson']['type']
        let style = cloneDeep(mapComponentTemplateData[item.moduleSign]['template']['moduleJson']['styleProps'])
        /* 替换本地多数据源 */
        item['moduleJson']['styleProps'] = style
        item['moduleJson']['styleProps'][tempType] = temp
        return item
      })
    },
    /* 设置当前选中组件 */
    setCurrentElement(state, id) {
      state.currentElement = id;
    },
    /* 删除画布组件 */
    deleteComponent(state, id){
       let deleteIdx = "";
       state.components.forEach( (item,idx) => {
        if(item.moduleId === id){
          deleteIdx = idx
        }
      })
      state.components.splice(deleteIdx, 1)
    },
    /* 增加物料 => 画布 */
    addPreviewComp(state, component) {
      state.components.push(component);
    },
    /* 属性修改更新画布 */
    updateComponent(state, value ) {
      /* 找到当前组件在列表中的位置 */
      const updatedComponent = state.components.find(
        (component) => component.moduleId === state.currentElement
      );
      /* 如果存在,更新属性 */
      if (updatedComponent) {
        let type = updatedComponent['moduleJson']['type']
        updatedComponent['moduleJson']['styleProps'][type] = value;
      }
    },
    updateContent(state,val){
      /* 找到当前组件在列表中的位置 */
      const updatedComponent = state.components.find(
        (component) => component.moduleId === state.currentElement
      );
      /* 如果存在,更新属性 */
      if (updatedComponent) {
        updatedComponent['moduleJson']['contentProps'] = val;
      }
    },
    changeType(state, typeVal) {
      const changeTypeComponent = state.components.find(
        (component) => component.moduleId === state.currentElement
      );
      /* 如果存在,更新属性 */
      if (changeTypeComponent) {
        changeTypeComponent.moduleJson["type"] = typeVal;
      }
    },
  },
  getters: {
    /* 获取当前组件属性列表 */
    getCurrentElement(state) {
      return state.components.find(
        (component) => component.moduleId === state.currentElement
      );
    },
    getCurrentElementType(state) {
      return state.components.find(
        (component) => component.moduleId === state.currentElement
      )['moduleJson']['type']
    },

  },
};

export default editor;
