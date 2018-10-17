<template>
  <div>
    <!-- 行业排名页面 -->
    <a-row style="margin: 0 -12px">
      <!-- 总收入 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="营业收入" total="￥ 62457">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="89" :scale="0" />
          </div>
          <div slot="footer">同年比<span> 3%</span>
            <a-icon type="caret-up" class="creat-up-a" />
          </div>
        </chart-card>
      </a-col>
      <!-- 净利润 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="净利润" total="3.2%">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="89" :scale="0" />
          </div>
          <div slot="footer">同年比<span> 0.5%</span>
            <a-icon type="caret-up" class="creat-up-a" />
          </div>
        </chart-card>
      </a-col>
      <!-- 总资产 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="利润总额" total="￥ 2458">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="89" :scale="0" />
          </div>
          <div slot="footer">同年比<span> 0.5%</span>
            <a-icon type="caret-up" class="creat-up-a" />
          </div>
        </chart-card>
      </a-col>
      <!-- 净资本 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="净利润回报率" total="2.1%">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="89" :scale="0" />
          </div>
          <div slot="footer">同年比<span> 0.5%</span>
            <a-icon type="caret-up" class="creat-up-a" />
          </div>
        </chart-card>
      </a-col>

      <!-- 总收入左图 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px; width: 50%">
        <chart-card title="2018年8月营收入" total="￥ 126,560">
          <div class="echartstrend">
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="89" :scale="0" />
          </div>
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div style="margin-left:50%">
            <echarts-mini-bar />
          </div>
          <div slot="footer">同年比<span> 2%</span>
            <a-icon type="caret-up" class="creat-up-a" />
          </div>
        </chart-card>
      </a-col>
      <!-- 2018年8月净利润 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px; width: 50%">
        <chart-card title="2018年8月净利润" total="￥ 126,560">
          <div class="echartstrend">
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="89" :scale="0" />
          </div>
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div style="margin-left:50%">
            <echarts-mini-area />
          </div>
          <div slot="footer">同年比<span> 2%</span>
            <a-icon type="caret-up" class="creat-up-a" />
          </div>
        </chart-card>
      </a-col>
    </a-row>

    <!-- 多组柱状图 -->
    <a-card :bordered="false" :body-style="{padding: '24px'}">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrap" slot="tabBarExtraContent">
            <div class="extra-item">
              <p @click="yearchange(1)" :class="{'active-a':test==1}" ref="yearas">年报</p>
              <p @click="yearchange(2)" :class="{'active-a':test==2}" ref="as">中报</p>
            </div>
            <range-picker :style="{width: '256px'}"></range-picker>
          </div>
          <a-tab-pane loading="true" tab="营业总收入" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <div style="margin-left:50%">
                  <as-button />
                </div>
                <!-- <echarts-bar-as title="总收入变化" :barData="barData" id="bar"/> -->
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="行业排名" :list="rankList" />
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane loading="true" tab="净利润" key="2">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <echarts-bar-as2 title="总收入变化" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="行业排名" :list="rankList" />
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane loading="true" tab="利润总额" key="3">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">

                <echarts-bar-as3 title="总收入变化" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="行业排名" :list="rankList" />
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane loading="true" tab="资产回报率" key="4">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">

                <echarts-bar-as4 title="总收入变化" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="行业排名" :list="rankList" />
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>
    <!-- 营业收入柱状图 -->
    <a-card :bordered="false" :body-style="{padding: '24px',marginTop:'24px'}">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrap" slot="tabBarExtraContent">
            <div class="extra-item">
              <a>月报</a>
            </div>
            <a-range-picker :style="{width: '256px'}" :placeholder="['Start month', 'End month']" format="YYYY-MM"
              :value="value" :mode="mode2" @panelChange="handlePanelChange2"></a-range-picker>
          </div>
          <a-tab-pane loading="true" tab="营业收入" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <div style="margin-left:50%">
                  <as-button />
                </div>
                <!-- <echarts-line title="" :lineData="lineData" id="line"/> -->
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="行业排名" :list="rankList" />
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane loading="true" tab="净利润" key="2">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <echarts-line2 title="总收入变化" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="行业排名" :list="rankList" />
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
  import MiniProgress from '../chart/MiniProgress'
  import ATabs from 'ant-design-vue/es/tabs'
  import ADatePicker from 'ant-design-vue/es/date-picker'
  import Bar from '../chart/Bar'
  import BaraAs from '../chart/BaraAs'
  import EchartsBarAs from './industrycharts/EchartsBarAs'
  import EchartsBarAs2 from './industrycharts/EchartsBarAs2'
  import EchartsBarAs3 from './industrycharts/EchartsBarAs3'
  import EchartsBarAs4 from './industrycharts/EchartsBarAs4'
  import EchartsLine from './industrycharts/EchartsLine'
  import EchartsLine2 from './industrycharts/EchartsLine2'
  import EchartsMiniBar from '../chart/EchartsMiniBar'
  import EchartsMiniArea from '../chart/EchartsMiniArea'
  import RankingList from '../chart/RankingList'
  import HotSearch from '../analysis/HotSearch'
  import SalesData from '../analysis/SalesData'
  import Trend from '../chart/Trend'
  import AsButton from '../chart/AsButton'
  import RangePicker from '../chart/RangePicker'

  const rankList = []

  for (let i = 0; i < 8; i++) {
    rankList.push({
      name: 'xx证券' + i + '号店',
      total: 323234 - i * 100
    })
  }

  const ATabPane = ATabs.TabPane
  const ARangePicker = ADatePicker.RangePicker
  export default {
    name: 'dashboard',
    data() {
      return {
        mode2: ['month', 'month'],
        value: [],
        test: 1,
        rankList,
        barData: [],
        lineData: [],
      }
    },
    components: {
      Trend,
      SalesData,
      HotSearch,
      RankingList,
      EchartsBarAs,
      EchartsBarAs2,
      EchartsBarAs3,
      EchartsBarAs4,
      EchartsLine,
      EchartsLine2,
      EchartsMiniBar,
      EchartsMiniArea,
      ARangePicker,
      ATabPane,
      ATabs,
      MiniProgress,
      AIcon,
      ATooltip,
      ChartCard,
      ACard,
      ARow,
      ACol,
      AsButton,
      RangePicker,
    },
    
    methods: {
      handlePanelChange2(value, mode) {
        this.value = value
        //console.log('value',value.map(e=>{return e._d.getFullYear()}-${e._d.getMonth()+1}-${e._d.getDate()}))
        console.log('value', value.map(e => {
          return `${e._d.getFullYear()}-${e._d.getMonth()+1}`
        }))
        this.mode2 = [
          mode[0] === 'date' ? 'month' : mode[0],
          mode[1] === 'date' ? 'month' : mode[1],
        ]
      },
      created() {
        this.getHomeData()
      },
      downData() {},
      getHomeData() {
        this.httpRequest({
        methods: 'POST',
        url: '/trades/info',
        }).then(res => {
        const data = res.data
        this.good = data
        console.log(this.good)
        }).catch(err => {
          console.log(err);
        })
      },
      yearchange(all) {
        this.test = all
        console.log(this.$refs.yearas.innerText)

        //点击之后当数据发生改变时，就刷新视图重新发送请求
        function refreshData(data) {
          if (!myChart) {
            return;
          }
          let option = myChart.getOption();
          option.setOption(optin);
          //重新请求后台接口
          getHoneData()
        }
        refreshData();
      },
    }
  }

</script>

<style lang="less" scoped>
  .extra-item {
    display: inline-block;
    margin-right: 24px;

    p {
      margin-left: 24px;
      cursor: pointer;
      display: inline-block;
    }
  }

  .creat-up-a {
    color: #52c41a;
    margin-left: 4px;
  }

  .caret-down-a {
    color: red;
    margin-left: 4px;
  }

  p {
    margin-left: 33px;
  }

  .active-a {
    color: #1890ff
  }

  .echartstrend {
    position: absolute;
    top: 84%;
  }

</style>
