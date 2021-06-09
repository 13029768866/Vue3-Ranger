<template>
  <editor></editor>
</template>

<script>
import { defineComponent } from 'vue'
import Editor from '_views/Editor.vue'

export default defineComponent({
  components:{
    Editor
  }
})

</script>

<style>
/*css主要部分的样式*/
/*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/

::-webkit-scrollbar {
  width: 10px; /*对垂直流动条有效*/
  height: 10px; /*对水平流动条有效*/
}

/*定义滚动条的轨道颜色、内阴影及圆角*/
::-webkit-scrollbar-track{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  /*background-color: rosybrown;*/
  border-radius: 3px;
}


/*定义滑块颜色、内阴影及圆角*/
::-webkit-scrollbar-thumb{
  border-radius: 7px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #E8E8E8;
}

/*定义两端按钮的样式*/
::-webkit-scrollbar-button {
  /*background-color:cyan;*/
}

/*定义右下角汇合处的样式*/
::-webkit-scrollbar-corner {
  background:khaki;
}
</style>
