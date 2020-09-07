<template>
  <div class="mx-auto my-5 flex" style="width: 1481px;">
    <nav class="flex-none flex flex-col p-px bg-white shadow" style="width: 300px;">
      <a href="javascript:">系统监控</a>
      <a href="javascript:" class="active">项目管理</a>
      <a href="javascript:">资源管理<em class="ml-3 bg-red-600 text-white text-lg leading-none px-2 py-1 font-normal rounded-full">{{ $store.state.messages.length }}</em></a>
      <a href="javascript:">审核管理</a>
      <a href="javascript:">空间管理</a>
      <a href="javascript:">系统管理</a>
    </nav>
    <div class="flex-1 ml-1 bg-white shadow">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  nav {
    &::after {
      @apply block flex-none;

      content: '';
      height: 250px;
    }

    > a {
      @apply flex-none bg-gray-200 text-gray-800 font-medium flex items-center px-5 py-4;

      font-size: 20px;

      &:not(:first-child) {
        @apply mt-5;
      }

      &.active {
        @apply bg-blue-500 text-white;
      }
    }
  }
</style>
