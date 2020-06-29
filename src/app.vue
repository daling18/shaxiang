<template>
  <div id="app" class="h-screen flex flex-col">
    <!-- 开发调试工具条，方便开发时访问特定状态用 -->
    <dev-bar class="flex-none" />
    <!-- 应用主体 -->
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
  import layouts from '@/layouts'

  export default {
    name: 'App',

    components: {
      DevBar: process.env.NODE_ENV !== 'development' ? {render: () => null} : () => import('@/components/dev-bar.vue'),
    },

    computed: {
      layout () {
        return layouts[this.$route.meta.layout ?? 'default']
      },
    },
  }
</script>

<style src="./assets/css/tailwind.scss" lang="scss"></style>
