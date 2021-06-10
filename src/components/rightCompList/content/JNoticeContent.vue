<template>
  <div class="notice-comp--wrapper">
    <div class="notice-tip">添加公告 (最多5条, 可拖动排序）</div>
    <draggable
        tag="transition-group"
        :component-data="{
          tag: 'div',
          type: 'transition-group',
          name: !drag ? 'flip-list' : null
        }"
        v-model="personalData.items"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
        item-key="order"
    >
      <template #item="{ element, index }">
        <div
            class="notice-box"
        >
          <div class="notice-title">
            <div class="notice-title-tip">
              <div class="drag-title">
                <SettingFilled />

                公告{{ index + 1}}
              </div>
            </div>
            <a-button
                size="small"
                type="link"
                @click="deleteNotice(index)"
            >
              删除
            </a-button>
          </div>
          <div class="props--item">
            <!--  label -->
            <span class="label" >
                    内容
                  </span>
            <!--  component -->
            <a-input
                placeholder="请填写公告内容"
                v-model:value="element.content"
                @change="onChange"></a-input>
          </div>
        </div>

      </template>
    </draggable>

    <a-button
        v-if="personalData.items.length < 5"
        class="add-btn"
        @click="addNotice"
    >
      <PlusOutlined />
      添加文案
    </a-button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue"
import draggable from "vuedraggable";
import {
  PlusOutlined,
  SettingFilled,
} from '@ant-design/icons-vue';
import { cloneDeep } from  'lodash-es'

export default defineComponent({
  name: "NoticeComp",
  components: {
    draggable,
    PlusOutlined,
    SettingFilled,
  },
  props:{
    data: {
      type: Object,
    },
  },
  emits: ["contentChange"],
  setup(props,ctx) {
    let personalData = ref(cloneDeep(props.data))

    /* 拖拽内容start */
    personalData.value.items = personalData.value.items.map((item,index) => {
       item['order']  = index + 1
       return item;
    })
    const dragOptions = {
      animation: 200,
      group: "description",
      disabled: false,
      ghostClass: "ghost"
    };
    const drag = ref(false)
    /* 拖拽内容end */

    /* 组件内容修改 */
    const onChange = (e) => {
      ctx.emit("contentChange", personalData.value);
    }
    const addNotice = () => {
      let sortArr = [];
      personalData.value.items.map(item => {
        sortArr.push(item.order)
      })
      console.log(sortArr);
      let max = sortArr.sort((a,b) => b - a)[0]
      personalData.value.items.push({
        content: '',
        order: max + 1
      })
      ctx.emit("contentChange", personalData.value);
    }
    const deleteNotice = (idx) => {
      personalData.value.items.splice(idx,1)
      ctx.emit("contentChange", personalData.value);
    }
    return {
      personalData,
      onChange,
      addNotice,
      deleteNotice,

      drag,
      dragOptions
    }
  }
})


</script>

<style lang="scss" scoped>
.notice-comp--wrapper{
  padding: 0 10px;
}
.notice-tip{
  margin: 0 0 15px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #9797a1;
  line-height: 20px;
}
.notice-box{
  margin-bottom: 10px;
  padding: 5px 10px 20px;
  background: #f0f2f5;
  border-radius: 4px;
  cursor: move;
  .notice-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0 0;
    height: 30px;
  }
  .props--item {
    box-sizing: border-box;
    display: flex;
    margin-top: 10px;
    align-items: center;
    .label {
      min-width: 60px;
      margin-right: 5px;
    }
  }
}
.add-btn{
  width: 100%;
  height: 40px;
  background: #fff;
  border-radius: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #2589ff;
  border: none;
  margin-top: 10px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>