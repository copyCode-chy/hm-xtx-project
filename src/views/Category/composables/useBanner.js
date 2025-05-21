// 此处类似hooks封装banner代码为一个函数

// 引入
import { onMounted } from 'vue';
import { getBannerList } from '@/apis/home';
import { ref } from 'vue';

export function useBanner() {
  // 存储
  const bannerList = ref([]);
  // 请求方法
  const getBanner = async () => {
    const res = await getBannerList({
      distributionSite: '2'
    });
    bannerList.value = res.data.result;
    console.log(bannerList.value);
  };

  // 发送请求
  onMounted(() => {
    getBanner();
  });

  return {
    bannerList
  }
}