<template>
  <div class="rank">
    <h4 class="title">{{title}}</h4>
    <ul class="list">
      <li :key="index" v-for="(item, index) in list">
        <div v-if="index===3&&list.length>6" style="padding-left:15px">...</div>
        <template v-else-if="index<3||index>list.length-4">
          <span :class="index < 3 ? 'active' : null" >{{index + 1}}</span>
          <span >xx证券</span>
          <span :class="index==8 ? 'active1': null">322,234</span>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RankingList',
  props: ['title', 'list']
}
</script>

<style lang="less" scoped>
  .rank{
    padding: 0 32px 32px 45px;
    
    .list{
      margin: 25px 18px 0;
      padding: 0;
      list-style: none;
      li {
        margin-top: 16px;
        span {
          color: rgba(0,0,0,.65);
          font-size: 14px;
          line-height: 22px;
          margin-left: -18px;
        }
        span:first-child {
          background-color: #f5f5f5;
          border-radius: 20px;
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          margin-right: 24px;
          height: 20px;
          line-height: 20px;
          width: 20px;
          text-align: center;
        }
        span.active {
          background-color: #314659;
          color: #fff;
        }
        span.active1 {
          color:#1890ff;
        }
        span:last-child {
          float: right;
        }
      }
    }
  }
</style>
