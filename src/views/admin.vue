<template>
  <div class="mx-auto my-5 flex" style="width: 1481px;">
    <nav class="flex-none flex flex-col p-px bg-white shadow" style="width: 300px;">
      <a href="javascript:">服务分类</a>
      <a href="javascript:" class="active">创新方案</a>
      <a href="javascript:">研究成果<em class="ml-3 bg-red-600 text-white text-lg leading-none px-2 py-1 font-normal rounded-full">{{ $store.state.messages.length }}</em></a>
      <a href="javascript:">传播产品</a>
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
