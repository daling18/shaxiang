<template>
  <div class="h-full flex flex-col bg-gray-100">
    <div class="bg-blue-500 shadow border-b border-white border-solid" style="height: 60px; padding: 10px;">
      <div class="flex-none self-center flex items-center mx-10 justify-between">
        <!-- <i class="not-italic bg-gray-400 text-gray-800 flex items-center justify-center" style="width: 62px; height: 62px; margin-right: 30px;">LOGO</i> -->
        <div class="flex items-center">
          <img class="mr-2" src="@/assets/img/logo.png" style="width: 56.66px; height: 41.33px;" alt="LOGO">
          <strong class="font-semibold text-white" style="font-size: 30px;">重庆大数据资源中心数据沙箱系统</strong>
        </div>
        <div class="flex">
          <button class="class flex items-center text-white" style="margin-left: 24px;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 34px; height: 34px; margin-right: 16px;"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg>
            <span style="font-size: 26px;" class="text-white">黄鹤</span>
          </button>
        </div>
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
