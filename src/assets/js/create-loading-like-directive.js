import { createApp } from 'vue'
import { addClass, removeClass } from '@/assets/js/dom'

const relativeCls = 'g-relative'

export default function createLoadingLikeDirective(Comp) {
  return {
    mounted(el, binding) {
      // 自定义指令钩子
      const app = createApp(Comp)
      // 创建引入的组件
      const instance = app.mount(document.createElement('div'))
      // 将其挂载到一个div上
      const name = Comp.name
      if (!el[name]) {
        el[name] = {}
      }
      el[name].instance = instance
      // 将其进行保存
      const title = binding.arg
      // 拿到传入的参数title
      if (typeof title !== 'undefined') {
        instance.setTitle(title)
      }

      if (binding.value) {
        // 通过binding穿过来的loading值即binding.value来进行显示
        // v-loading:[loadingText] = "loading"
        // 等号后面时value ,[]中是binding.arg
        append(el)
      }
      // 将创建的组件添加到目标组件上
    },
    updated(el, binding) {
      // 所绑定组件更新后进行调用
      const title = binding.arg
      const name = Comp.name
      if (typeof title !== 'undefined') {
        el[name].instance.setTitle(title)
      }
      // 判断传入的loading 是否为true，若为true添加该组件，若为false
      if (binding.value !== binding.oldValue) {
        binding.value ? append(el) : remove(el)
      }
    }
  }

  function append(el) {
    const name = Comp.name
    const style = getComputedStyle(el)
    if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
      addClass(el, relativeCls)
    }
    el.appendChild(el[name].instance.$el)
  }

  function remove(el) {
    const name = Comp.name
    removeClass(el, relativeCls)
    el.removeChild(el[name].instance.$el)
  }
}
