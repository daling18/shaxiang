# 重庆市政务数据资源开放系统前端应用

```bash
# 安装工程依赖
# 注意不要使用 npm
yarn

# 启动开发服务器
yarn serve

# 构建编译
yarn build

# 代码检查
yarn lint
```

## 协作开发注意事项

1. **不要**直接在 dev 分支上进行开发。每一单元的开发工作在基于 dev 分支的新分支上进行，完成后在 GitLab 上以 dev 为目标分支创建 Merge Request（合并请求），由 Maintainer 合并。
2. **不要**在同一分支上创建多个 Merge Request。相关分支会在 Merge Request 被合并后移除。
3. 可以视需要自行创建任意远端分支，但请在完成相关工作后及时清理，保证分支列表的整洁。

## 关键技术参考资料

* GraphQL: [https://graphql.cn/](https://graphql.cn/)（中文版）
* Vue Apollo: [https://apollo.vuejs.org/](https://apollo.vuejs.org/)（有中文版，但内容稍过时）
* Tailwind CSS: [https://tailwindcss.com/](https://tailwindcss.com/)（英文版）

2020 &copy; 东方金信
