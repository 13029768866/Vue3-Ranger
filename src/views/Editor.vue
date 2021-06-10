<template>
  <div class="editor__wrapper">
      <!--  物料区域  -->
      <div class="comp__list--wrapper">
        <left-comp-list @handleItemClick="addPreviewComp"></left-comp-list>
      </div>
      <!--  画布区域  -->
      <div class="preview__container">
        <div class="preview--list">
          <preview-comp-wrapper
              v-for="component in components"
              :key="component.moduleId"
              :id="component.moduleId"
              draggable="true"
              :active="currentElement && component.moduleId === currentElement.moduleId"
              :current="component"
              @currentComponent="setCurrentElement(component.moduleId)"
              @deleteComponent="deleteComponent(component.moduleId)"
          >
            <component
                :is="component.moduleSign"
                :moduleJson="component['moduleJson']"
                v-bind="component['moduleJson']['styleProps'][component['moduleJson']['type']]"
            ></component>
          </preview-comp-wrapper>
<!--          <Home1></Home1>-->
        </div>
<!--        <pre>{{components}}</pre>-->
      </div>
      <!--  属性列表  -->
      <div  class="comp__props--wrapper">
        <h3 class="props--title" v-if=" currentElement && currentElement.title">
          {{ currentElement.title }}
        </h3>
        <a-row
            v-if=" currentElement && mapComponentTemplateData[currentElement.moduleSign]['typeArr']"
            class="change__type--wrapper"
        >
          <a-radio-group
              :value="currentElement.moduleJson.type"
              size="large"
              @change="changeType"
          >
            <a-radio-button
                v-for="item in mapComponentTemplateData[currentElement.moduleSign][
                'typeArr'
              ]"
                :key="item.value"
                :value="item.value"
            >{{ item.text }}</a-radio-button
            >
          </a-radio-group>
        </a-row>
        <template v-if="currentElement">
          <component
              :is="propsComp"
              :type="currentElement.moduleJson.type"
              :contentProps="currentElement.moduleJson.contentProps"
              :styleProps="currentElement.moduleJson.styleProps[currentType]"
              @change="handleChange"
              @contentChange="handleContentChange"
          >
          </component>
        </template >
      </div>
  </div>

</template>

<script>
import { defineComponent, onMounted ,computed, ref } from "vue";
import { useStore } from "vuex";
import { mapComponentTemplateData } from "@/maps/mapComponentTemplateData";

// 左侧物料
import LeftCompList from "_comp/leftCompList/LeftCompList.vue";
// 画布组件
import PreviewCompWrapper from "_comp/previewCompList/PreviewCompWrapper.vue";
import JEmpty from "_comp/previewCompList/JEmpty.vue";
import JTitle from "_comp/previewCompList/JTitle.vue";
import JNotice from "_comp/previewCompList/JNotice.vue";
import JGoods from "_comp/previewCompList/JGoods.vue";
// 右侧属性
import JEmptyProps from "_comp/rightCompList/JEmptyProps.vue";
import JTitleProps from "_comp/rightCompList/JTitleProps.vue";
import JNoticeProps from "_comp/rightCompList/JNoticeProps.vue";
import JGoodsProps from "_comp/rightCompList/JGoodsProps.vue";

const testComponent = [
  {
    moduleId: '1',
    moduleSign: 'j-empty',
    materialType: 0,
    type: 0,
    title: '辅助空白',
    moduleJson: {
      type: 2,
      contentProps:{

      },
      styleProps: {
        height: 30,
        lineStyle: 2,
        lineColor: '#D8D8D8',
        backgroundColor: "#FFFFFF",
      }
    }
  },
  {
    moduleId: '2',
    moduleSign: 'j-title',
    materialType: 0,
    type: 0,
    title: '标题栏',
    moduleJson: {
      type: 1,
      contentProps:{
        text: '标题',
        link: ''
      },
      styleProps: {
        height: 28,
        fontSize: 1,
        fontWeight: 0,
        textAlign: 1,
        color: '#FF0000',
        iconColor: '#00FF00',
        backgroundColor: "#FFFFFF",
      }
    }
  },
  {
    moduleId: '3',
    moduleSign: 'j-notice',
    materialType: 0,
    type: 0,
    title: '店铺公告',
    moduleJson: {
      type: 1,
      contentProps:{
        items: [
          {
            content: '这是1'
          },
          {
            content: '这是2'
          },
        ]
      },
      styleProps: {
        scroll: 1,
        height: 40,
        color: '#ff0000',
        backgroundColor: "#eeeeee",
      }
    }
  },
  {
    moduleId: '4',
    moduleSign: 'j-goods',
    materialType: 0,
    type: 0,
    title: '商品',
    moduleJson: {
      type: 1,
      contentProps:{
        showCart: 1,
        showSalePrice: 1,
        showGoodsSaleNum: 1,
      },
      styleProps: {
        listType: 1,
        cardType: 1,
        borderRadius: 1,
        goodsGutter: 5,
        paddingLR: 15,
        backgroundColor: '#ffffff'
      }
    }
  },
];

export default defineComponent({
  components: {
    LeftCompList,
    PreviewCompWrapper,
    JEmpty,
    JEmptyProps,
    JTitle,
    JTitleProps,
    JNotice,
    JNoticeProps,
    JGoods,
    JGoodsProps
  },
  setup() {
    const store = useStore();

    /* 视图数据 */
    const setEditorData = () => {
      store.commit('setEditorData',testComponent)
    }
    const components = computed({
          get(){
            return store.state.editor.components
          },
          set(value) {
            console.log(value);
            // this.$store.commit('updateList', value)
          }
        }
    );
    /* 当前选中组件 */
    const currentElement = computed(() => store.getters.getCurrentElement);
    const currentType = computed(() => store.getters.getCurrentElementType);
    // 右侧属性列表组件
    const propsComp = computed(() => `${currentElement.value.moduleSign}-props`)
    /* 当前选中组件对应属性列表 */
    /* 改变当前选中组件 */
    const setCurrentElement = (id) => {
      store.commit("setCurrentElement", id);
    };

    /* 添加物料 => 画布 */
    const addPreviewComp = (component) => {
      store.commit("addPreviewComp", component);
      store.commit("setCurrentElement", component.moduleId);
    };

    /* 属性改变更新 => 画布 */
    const handleChange = (e) => {
      store.commit("updateComponent", e);
    };
    const handleContentChange = (e) => {
      store.commit("updateContent", e);
    };
    /* 删除画布组件 */
    const deleteComponent = (id) => {
      store.commit("deleteComponent", id);

    }

    /* 切换组件类型 */
    const changeType = (e) => {
      store.commit("changeType", e.target.value);
    };

    onMounted(() => {
      setEditorData()
    })

    const  list = [
      { name: "wzj", id: 0 },
      { name: "wzj1", id: 1 },
      { name: "wzj2", id: 2 }
    ]
    return {
      list,
      components,
      currentType,
      currentElement,
      propsComp,
      mapComponentTemplateData,
      setCurrentElement,
      deleteComponent,
      addPreviewComp,
      handleChange,
      handleContentChange,
      changeType,
    };
  },
});
</script>

<style lang="scss" scoped>
.editor__wrapper {
  display: flex;
  justify-content: space-between;
  border: 1px solid #000;
  .comp__list--wrapper {
    width: 310px;
    background-color: #f8f9fa;
  }
  .comp__props--wrapper {
    width: 375px;
    background-color: #f8f9fa;
  }
  .preview__container {
    flex: 1;
    overflow-y: auto;
    position: relative;
    height: 100vh;
    min-width: 500px;
    padding: 50px 0;
    background-color: #eef0f4;
    .preview--list {
      padding: 0;
      margin: 0 auto;
      width: 377px;
      min-height: 667px;
      background: #fff;
      border: 2px solid #efefef;
      box-shadow: 0 0 28px 0 #ccc;

    }
  }
}
.props--title {
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  font-size: 14px;
  font-weight: 600;
}
.change__type--wrapper {
  padding: 0 20px;
  margin-bottom: 15px;
  ::v-deep(.ant-radio-group){
    display: flex;
    width: 100%;
  }
  ::v-deep(.ant-radio-button-wrapper) {
    flex: 1 0 auto!important;
    text-align: center;
  }
}

</style>
