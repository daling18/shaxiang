<template>
  <div class="h-full flex flex-col">
    <div class="flex-none bg-indigo-700 text-white py-10">
      <dl class="mx-auto flex items-center" style="width: 1480px;">
        <div>
          <dt>已共享资源总数（项）</dt>
          <dd>{{ platformStats.publishedAssets }}</dd>
        </div>
        <div>
          <dt>累计数据调用次数（次）</dt>
          <dd>{{ platformStats.apiInvoked | humanize }}</dd>
        </div>
        <div>
          <dt>累计数据调用条数（条）</dt>
          <dd>{{ platformStats.sentRecords | humanize }}</dd>
        </div>
        <div>
          <dt>累计访问流量（次）</dt>
          <dd>{{ platformStats.totalPV | humanize }}</dd>
        </div>
      </dl>
    </div>
    <h1 class="self-center my-auto">HOME VIEW</h1>
  </div>
</template>

<script>
  import QUERY_PLATFORM_STATS from '@/graphql/fetch-platform-stats.gql'

  export default {
    filters: {
      humanize: (num = 0) => (num / 100000000).toFixed(1) + '亿',
    },

    data () {
      return {
        platformStats: {},
      }
    },

    apollo: {
      platformStats: QUERY_PLATFORM_STATS,
    },
  }
</script>

<style lang="scss" scoped>
  dl {
    div {
      @apply flex-1 text-center;
    }

    dd {
      @apply font-medium;

      font-size: 60px;
    }
  }
</style>
