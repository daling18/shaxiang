<template>
  <div v-show="visible" class="bg-black text-white text-xs flex">
    <div class="py-1 flex">
      <span class="text-gray-500 pl-4">导航到</span>
      <router-link to="/" class="ml-4">Home</router-link>
      <router-link to="/login" class="ml-4">Login</router-link>
      <router-link to="/demo/subnav-layout" class="ml-4">Sub Nav Demo</router-link>
      <router-link to="/demo/simple-chart" class="ml-4">Simple Chart</router-link>
      <router-link to="/demo/sidebar-layout" class="ml-4">Sidebar Layout</router-link>
      <span class="text-gray-500 pl-4 border-l border-gray-600 ml-4">当前布局</span>
      <span class="ml-4 font-mono">{{ String(this.$route.meta.layout) }}</span>
    </div>
    <button class="ml-auto pr-1 flex items-center" @click="visible = false">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5"><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" /></svg>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'DevBar',

    data () {
      return {
        visible: true, 
      }
    },

    watch: {
      visible (val) {
        if (!val) {
          console.log('按 Ctrl/control + ` 重新显示开发调试工具条')
        }
      },
    },

    created () {
      document.body.addEventListener('keypress', ev => {
        if (this.visible) return
        if (ev.ctrlKey && ev.key === '`') {
          this.visible = true
        }
      })
    },
  }
</script>
