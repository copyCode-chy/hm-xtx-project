// 此处封装倒计时函数
import { ref, computed, onMounted } from 'vue'
import dayjs from 'dayjs'

export const useCountDown = () => {
  let timer = null
  const time = ref(0)
  const timeData = computed(() => dayjs.unix(time.value).format('mm分ss秒'))

  const countDown = (data) => {
    // 每次调用countDown清除上一次的计时器
    if (timer) clearInterval(timer)

    time.value = data
    timer = setInterval(() => {
      if (time.value > 0) {
        // 如果计时器不小于0
        time.value--
      } else {
        clearInterval(timer)
      }
    }, 1000)
  }

  return {
    countDown,
    timeData
  }
}