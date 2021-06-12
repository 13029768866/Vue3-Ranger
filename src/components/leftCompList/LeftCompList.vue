<template>
  <a-collapse v-model:activeKey="activeKey">
    <a-collapse-panel
        v-for="item in defaultGruops"
        :key="item.title"
        :header="item.title">
      <a-row class="category__wrapper" align="middle">
        <a-col
            v-for="component in item.components"
            class="category__item"
            @click="handleItemClick(component)"
        >
          <component :is="component.icon" class="icon__base"/>
          <span class="icon__name">{{component.iconTitle}}</span>
        </a-col>
      </a-row>

    </a-collapse-panel>

  </a-collapse>
</template>

<script>
import {defineComponent,ref} from 'vue'
import { mapComponentTemplateData } from "@/maps/mapComponentTemplateData";
import { v4 as uuidv4 } from "uuid";
import {
  SoundOutlined,
  FileMarkdownOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
  UsergroupAddOutlined,
  BorderOutlined
} from '@ant-design/icons-vue';
import { cloneDeep } from 'lodash-es'

export default defineComponent({
  components:{
    SoundOutlined,
    FileMarkdownOutlined,
    AppstoreOutlined,
    ShoppingCartOutlined,
    UsergroupAddOutlined,
    BorderOutlined
  },
  emits: ['handleItemClick'],
  setup(props,ctx){
    // 默认物料列表
    const defaultGruops = ref([
      {
        title: '图文类',
        components: [
          {
            icon: 'sound-outlined',
            iconTitle: '公告',
            componentMap: 'j-notice',
          },
          {
            icon: 'file-markdown-outlined',
            iconTitle: '标题',
            componentMap: 'j-title',
          },
          /*{
            icon: 'AppstoreOutlined',
            iconTitle: '图文导航'
          },*/
        ]
      },
      {
        title: '商品类',
        components: [
          {
            icon: 'ShoppingCartOutlined',
            iconTitle: '商品',
            componentMap: 'j-goods',
          }
        ]
      },
      // {
      //   title: '活动类',
      //   components: [
      //     {
      //       icon: 'UsergroupAddOutlined',
      //       iconTitle: '团购'
      //     }
      //   ]
      // },
      {
        title: '辅助类',
        components: [
          {
            icon: 'BorderOutlined',
            iconTitle: '辅助空白',
            componentMap: 'j-empty'
          }
        ]
      },

    ])
    // 当前展开项
    const activeKey = ref(['图文类','商品类','辅助类']);
    // 当前点击组件
    const handleItemClick = (props) => {
      const component = cloneDeep(mapComponentTemplateData[props.componentMap]['template'])
      component['moduleId'] = uuidv4()
      ctx.emit('handleItemClick', component)
    }
    return {
      defaultGruops,
      activeKey,
      handleItemClick
    }
  }
})
</script>
<style lang="scss" scoped>
.category__wrapper{
  .category__item{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;
    margin-bottom: 10px;
    &:hover{
      cursor: pointer;
      background-color: skyblue;
    }
  }
  .icon__base{
    font-size: 30px;
    margin: 15px;
  }
  .icon__name{
    margin-bottom: 10px;
  }
}

</style>