<template>
  <div>
    <!-- 第一列top图 -->
    <a-row style="margin: 0 -12px">
      <!-- 总收入 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="总收入(年)" total="￥ 12,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="89" :scale="0" />
          </div>
          <div slot="footer">同年比<span> ￥12,423</span></div>
        </chart-card>
      </a-col>
      <!-- 净利润 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="净利润(年)" total="￥ 12,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="89" :scale="0" />
          </div>
          <div slot="footer">同年比<span> ￥12,423</span></div>
        </chart-card>
      </a-col>
      <!-- 总资产 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="总资产(年)" total="￥ 12,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="89" :scale="0" />
          </div>
          <div slot="footer">同年比<span> ￥12,423</span></div>
        </chart-card>
      </a-col>
      <!-- 净资本 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="净资本(年)" total="￥ 12,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="89" :scale="0" />
          </div>
          <div slot="footer">同年比<span> ￥12,423</span></div>
        </chart-card>
      </a-col>
      <!-- 总销售额 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px; width: 50%" >
        <chart-card title="总销售额" total="￥ 126,560">
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="89" :scale="0" />
          </div>
          <a-tooltip title="指标说明" slot="action" >
            <a-icon type="info-circle-o"  />
          </a-tooltip>
          <div>
            <mini-bar />
          </div>
          <div slot="footer">同年比<span> ￥12,423</span></div>
        </chart-card>
      </a-col> 
      <!-- 总收入月 -->
       <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px; width: 50%">
        <chart-card title="总收入(月)" total="￥ 126,560">
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="89" :scale="0" />
          </div>
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <mini-area />
          </div>
          <div slot="footer">同年比<span> ￥12,423</span></div>
        </chart-card>
      </a-col>
    </a-row>
    <!-- 多组柱状图 -->
    <a-card :bordered="false" :body-style="{padding: '24px',}">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrap" slot="tabBarExtraContent">
            <div class="extra-item">
              <a>今日</a>
              <a>本周</a>
              <a>本月</a>
              <a>本年</a>
            </div>
            <a-range-picker :style="{width: '256px'}"></a-range-picker>
          </div>
          <a-tab-pane loading="true" tab="总收入" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar title="总收入变化" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="总收入排行榜" :list="rankList" />
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane tab="净利润" key="2">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar title="总收入变化" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="总收入排行榜" :list="rankList" />
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane loading="true" tab="总资产" key="3">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar title="总收入变化" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="总收入排行榜" :list="rankList" />
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane loading="true" tab="净资本" key="4">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar title="总收入变化" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="总收入排行榜" :list="rankList" />
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>
    <!-- 长城证券饼环图 -->
    <a-card :bordered="false" :body-style="{padding: '24px',marginTop:'24px'}">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrap" slot="tabBarExtraContent">
            <div class="extra-item">
              <a>今日</a>
              <a>本周</a>
              <a>本月</a>
              <a>本年</a>
            </div>
            <a-range-picker :style="{width: '256px'}"></a-range-picker>
          </div>
          <a-tab-pane loading="true" tab="收入结构占比" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <div style="width:300px;height:300px;float:left;-webkit-box-orient: vertical;">
                  <p>长城证券</p>
                  <pel-one title="总收入变化" />
                </div>
                <div style="width:300px;height:300px;float:left;-webkit-box-orient: vertical;">
                  <p>第一梯队</p>
                  <pel-two title="总收入变化" />
                </div>
                <div style="width:300px;height:300px;float:left;-webkit-box-orient: vertical;">
                  <p>第二梯队</p>
                  <pel-three title="总收入变化" />
                </div>
                <div style="width:300px;height:300px;float:left;-webkit-box-orient: vertical;">
                  <p>第三梯队</p>
                  <pel-four title="总收入变化" />
                </div>
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="总收入排行榜" :list="rankList" />
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>

    <a-row style="margin: 0 -12px">
      <!-- <a-col style="padding: 0 12px" :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card :bordered="false" style="margin-top: 24px;" title="">
          <sales-data />
          <div slot="extra">
            <div>...</div>
          </div>
        </a-card>
      </a-col> -->
    </a-row>
  </div>
</template>

<script>
  import ACol from 'ant-design-vue/es/grid/Col'
  import ARow from 'ant-design-vue/es/grid/Row'
  import ACard from 'ant-design-vue/es/card/Card'
  import ChartCard from './ChartCard'
  import ATooltip from 'ant-design-vue/es/tooltip/Tooltip'
  import AIcon from 'ant-design-vue/es/icon/icon'
  import MiniArea from '../chart/MiniArea'
  import MiniBar from '../chart/MiniBar'
  import MiniProgress from '../chart/MiniProgress'
  import ATabs from 'ant-design-vue/es/tabs'
  import ADatePicker from 'ant-design-vue/es/date-picker'
  import Bar from '../chart/Bar'
  import PelOne from '../chart/PelOne'
  import PelTwo from '../chart/PelTwo'
  import PelThree from '../chart/PelThree'
  import PelFour from '../chart/PelFour'
  import RankingList from '../chart/RankingList'
  import HotSearch from '../analysis/HotSearch'
  import SalesData from '../analysis/SalesData'
  import Trend from '../chart/Trend'

  const rankList = []
  for (let i = 0; i < 8; i++) {
    rankList.push({
      name: '桃园店' + i + '号店',
      total: 323234 - i * 100
    })
  }
  const ATabPane = ATabs.TabPane
  const ARangePicker = ADatePicker.RangePicker
  export default {
    name: 'dashboard',
    data() {
      return {
        rankList
      }
    },
    components: {
      Trend,
      SalesData,
      HotSearch,
      RankingList,
      Bar,
      PelOne,
      PelTwo,
      PelThree,
      PelFour,
      ARangePicker,
      ATabPane,
      ATabs,
      MiniProgress,
      MiniBar,
      MiniArea,
      AIcon,
      ATooltip,
      ChartCard,
      ACard,
      ARow,
      ACol
    }
  }

</script>

<style lang="less" scoped>

  .extra-item {
    display: inline-block;
    margin-right: 24px;
    a {
      margin-left: 24px;
    }
  }

</style>
