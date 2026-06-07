import type { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'


import './style/index.css'
import "vitepress-markdown-timeline/dist/theme/index.css";

import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';

// .vitepress/theme/index.ts
import {Links } from '@theojs/lumen'

export default {
  extends: DefaultTheme,

  enhanceApp: ({ app }: EnhanceAppContext) => {
    app.component('Links', Links) 
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
}