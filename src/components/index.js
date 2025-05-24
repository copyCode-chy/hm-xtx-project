import ImageView from './imageView/index.vue';
import Sku from './XtxSku/index.vue';

// 使用插件的形式全局注册
export const componentPlugin = {
  install(app) {
    app.component('XtxImageView', ImageView);
    app.component('XtxSku', Sku);
  }
} 