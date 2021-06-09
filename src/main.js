import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Vant from 'vant';
import 'vant/lib/index.css';

createApp(App).use(store).use(Antd).use(Vant).mount('#app')
