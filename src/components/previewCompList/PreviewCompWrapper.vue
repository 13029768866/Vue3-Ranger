<template>
    <div
        class="preview--comp__wrapper"
        :class="{ active: active }"
        @click="handleClick(id)"
    >
      <slot></slot>
      <div class="handle--wrapper">
        <div class="delete">
          <span>{{ current.title }}</span>
          <DeleteOutlined  class="delete--btn" @click="deleteComponent"/>
        </div>
      </div>

    </div>
</template>

<script>
import {defineComponent} from "vue"
import {
  DeleteOutlined
} from '@ant-design/icons-vue';

export default defineComponent({
  name: "PreviewCompWrapper",
  components: {
    DeleteOutlined
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    current: {
      type: Object
    }
  },
  emits: ["currentComponent", "deleteComponent"],
  setup(props, ctx) {
    const handleClick = (id) => {
      ctx.emit("currentComponent", id);
    };
    const deleteComponent = (id) => {
      ctx.emit("deleteComponent", id)
    }
    return {
      handleClick,
      deleteComponent
    };
  },
})
</script>

<style scoped lang="scss">
.preview--comp__wrapper {
  box-sizing: border-box;
  position: relative;
  padding: 0px;
  cursor: pointer;
  border: 1px solid transparent;
  user-select: none;
  .handle--wrapper{
    position: absolute;
    top: 1px;
    left: 400px;
    width: 180px;
    height: 30px;
    line-height: 30px;
    .delete{
      display: none;
      box-sizing: border-box;
      position: absolute;
      padding: 0 10px;
      border-radius: 4px;
      background-color: #fff;
      -webkit-box-shadow: 0 0 20px 0 rgb(0 0 0 / 10%);
      box-shadow: 0 0 20px 0 rgb(0 0 0 / 10%);
      font-size: 12px;
      .delete--btn{
        margin-left: 10px;
        cursor: pointer;
      }

    }
  }
  &:hover {
    position: relative;
    .handle--wrapper .delete{
      display: block;
    }
    &::before{
      content: "";
      position: absolute;
      z-index: 99;
      width: 379px;
      height: 100%;
      left: -2px;
      top: 0;
      box-sizing: border-box;
      border: 2px dashed skyblue;
      cursor: pointer;
    }
  }
  &.active {
    position: relative;
    user-select: none;
    z-index: 1500;
    .handle--wrapper .delete{
      display: block;
    }
    &::before{
      content: "";
      position: absolute;
      z-index: 99;
      width: 379px;
      height: 100%;
      left: -2px;
      top: 0;
      box-sizing: border-box;
      border: 2px solid skyblue;
      box-shadow: 0 1px 25px 2px rgb(50 59 77 / 50%);
      cursor: pointer;
    }
  }



}
</style>