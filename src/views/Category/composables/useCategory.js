// 此处类似hooks封装category代码为一个函数

// 引入
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getSecondCategory } from '@/apis/categoryList';
import { onBeforeRouteUpdate } from 'vue-router';

export function useCategory() {
  // 获取路由参数
  const route = useRoute();
  // 存储
  const secondCategory = ref({});
  // 请求方法
  const getSecondCategoryList = async (id = route.params.id) => {
    const res = await getSecondCategory(id);
    secondCategory.value = res.data.result;
  };

  onMounted(() => {
    // 组件挂载时调用
    getSecondCategoryList();
  })

  // 路由参数变化前调用解决路由缓存问题
  onBeforeRouteUpdate(to => {
    getSecondCategoryList(to.params.id);
  })

  return {
    secondCategory
  }
}