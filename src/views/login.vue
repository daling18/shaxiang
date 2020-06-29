<template>
  <div class="h-full flex flex-col bg-gray-100">
    <div class="flex-none flex items-center">
      <strong class="font-semibold" style="font-size: 40px;">重庆市政务数据资源开放系统</strong>
    </div>
    <form class="flex-none self-center my-auto flex flex-col rounded bg-white shadow-lg p-10" @submit.prevent>
      <h1 class="text-center" style="font-size: 40px;">用户登录</h1>
      <input type="text" placeholder="请输入用户名">
      <input type="password" placeholder="请输入密码">
      <button @click="$router.push('/')">登录</button>
    </form>
    <footer class="flex-none flex items-center justify-center">
      <span>备案号：渝ICP备16007122号-2</span>
      <span style="margin-left: 40px;">渝公网备案：50011202502043号</span>
    </footer>
  </div>
</template>
