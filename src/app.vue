<template>
  <div id="app" class="h-screen flex flex-col">
    <!-- 开发调试工具条，方便开发时访问特定状态用 -->
    <div v-if="isDev" class="flex-none bg-black text-white py-1 text-sm flex">
      <span class="text-gray-500 pl-4">导航到</span>
      <router-link to="/" class="ml-4">Home</router-link>
      <router-link to="/login" class="ml-4">Login</router-link>
      <span class="text-gray-500 pl-4 border-l border-gray-600 ml-4">当前布局</span>
      <span class="ml-4 font-mono">{{ String($route.meta.layout) }}</span>
    </div>
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
  import layouts from '@/layouts'

  export default {
    name: 'App',

    computed: {
      isDev: () => process.env.NODE_ENV === 'development',

      layout () {
        return layouts[this.$route.meta.layout ?? 'default']
      },
    },
  }
</script>

<style src="./assets/css/tailwind.scss" lang="scss"></style>
