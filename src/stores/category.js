// 此处存储分类数据
import { defineStore } from "pinia";
import { ref } from 'vue'
import { getCategoryList } from "@/apis/categoryList";

export const useCategoryStore = defineStore("category", () => {
  // 导航列表数据管理
  // state导航列表数据
  const categoryList = ref([]);

  // action 获取导航数据的方法
  const getCategory = async () => {
    const res = await getCategoryList()
    categoryList.value = res.data.result;
  }

  return {
    categoryList,
    getCategory
  }
})

