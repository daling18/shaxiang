<template>
  <div class="h-full flex flex-col bg-gray-100">
    <div class="bg-blue-500 shadow border-b border-white border-solid" style="height: 100px; padding: 0 30px;">
      <div class="flex-none self-center flex items-center mx-10 justify-between">
        <!-- <i class="not-italic bg-gray-400 text-gray-800 flex items-center justify-center" style="width: 62px; height: 62px; margin-right: 30px;">LOGO</i> -->
        <div class="flex">
          <img class="mr-2" src="@/assets/img/logo.png" style="width: 46.66px; height: 31.33px;" alt="LOGO">
          <strong class="font-semibold text-white" style="font-size: 20px;">重庆市政务数据资源开放系统</strong>
        </div>
        <div class="flex">
          <button class="class flex items-center text-white" style="margin-left: 24px;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 24px; height: 24px; margin-right: 16px;"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg>
            <span style="font-size: 16px;" class="text-white">黄鹤</span>
          </button>
        </div>
      </div>
      <div class="flex-none flex items-center ml-10">
        <nav class="flex-none flex my-4">
          <router-link to="/" exact>首页</router-link>
          <router-link to="/assets">资源目录</router-link>
          <router-link to="/admin">应用展现</router-link>
        </nav>
      <!-- <button class="flex items-center justify-center text-gray-500" style="margin-left: 52px;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 24px; height: 24px;"><path d="M22 20H2v-2h1v-6.969C3 6.043 7.03 2 12 2s9 4.043 9 9.031V18h1v2zM5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18zm4.5 3h5a2.5 2.5 0 1 1-5 0z"/></svg>
      </button> -->
      </div>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  nav > * {
    @apply flex-none flex items-center relative text-white;

    padding: 0 6px;
    font-size: 14px;

    &:not(:first-child) {
      margin-left: 20px;
    }

    &.active {

      &::after {
        @apply block absolute inset-x-0 bottom-0 bg-white;

        content: '';
        height: 2px;
      }
    }
  }
</style>
