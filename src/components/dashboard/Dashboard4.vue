<template>
  <div>
    <!-- 第一列top图 -->
    <a-row style="margin: 0 -12px">
      <!-- 总收入 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="日均活跃人数" total="126,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="89" :scale="0" />
          </div>
          <div slot="footer">月年比<span>  3%</span><a-icon type="caret-up" class="creat-up-a"/></div>
        </chart-card>
      </a-col>
      <!-- 净利润 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="日均活跃人数" total="126,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="89" :scale="0" />
          </div>
          <div slot="footer">月年比<span>  22%</span></div>
        </chart-card>
      </a-col>
      <!-- 总资产 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="启动次数(月)" total="126,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="89" :scale="0" />
          </div>
          <div slot="footer">同年比<span>  ￥12,423</span></div>
        </chart-card>
      </a-col>
      <!-- 净资本 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="使用时长(月)" total="126,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="89" :scale="0" />
          </div>
          <div slot="footer">年同比<span>  ￥12,423</span></div>
        </chart-card>
      </a-col>
    </a-row>


    <!-- 多组柱状图 -->
    <a-card :bordered="false" :body-style="{padding: '24px'}">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrap" slot="tabBarExtraContent">
            <div class="extra-item">
              <a>中报</a>
              <a>年报</a>
            </div>
            <a-range-picker :style="{width: '256px'}"></a-range-picker>
          </div>
          <a-tab-pane loading="true" tab="月度指标" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <div style="margin-left:5%">
                  <a-button-group>
                    <a-button type="primary">活动人数</a-button>
                    <a-button>启动次数</a-button>
                    <a-button>使用时长</a-button>
                    <a-button>次月留存</a-button>
                  </a-button-group>
                </div>
                <bar title="总收入变化" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="月度活跃排名" :list="rankList"/>
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
             
            </div>
            <a-range-picker :style="{width: '256px'}"></a-range-picker>
          </div>
          <a-tab-pane loading="true" tab="日均指标" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <div style="margin-left:5%">
                  <a-button-group>
                    <a-button type="primary">活动人数</a-button>
                    <a-button>启动次数</a-button>
                    <a-button>使用时长</a-button>
                  </a-button-group>
                </div>
                <bar title="总收入变化" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="日均活跃排名" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>

    <a-card :bordered="false" :body-style="{padding: '24px',marginTop:'24px'}">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrap" slot="tabBarExtraContent">
            <div class="extra-item">
             
            </div>
            <a-range-picker :style="{width: '256px'}"></a-range-picker>
          </div>
          <a-tab-pane loading="true" tab="人均指标" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <div style="margin-left:5%">
                  <a-button-group>
                    <a-button type="primary">启动次数</a-button>
                    <a-button>使用时长</a-button>
                    <a-button>单日启动时长</a-button>
                    <a-button>单日启动次数</a-button>
                    <a-button>月度使用天数</a-button>
                  </a-button-group>
                </div>
                <bar title="总收入变化" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="人均活跃排名" :list="rankList"/>
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
import BaraAs from '../chart/BaraAs'
import Bara from '../chart/Bara'
import LineOne from '../chart/LineOne'
import RankingList from '../chart/RankingList'
import HotSearch from '../analysis/HotSearch'
import SalesData from '../analysis/SalesData'
import Trend from '../chart/Trend'

const rankList = []

for (let i = 0; i < 8; i++) {
  rankList.push({
    name: 'xx证券' + i + '号店',
    total:323234 - i * 100
  })
}

const ATabPane = ATabs.TabPane
const ARangePicker = ADatePicker.RangePicker
export default {
  name: 'dashboard',
  data () {
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
    BaraAs,
    Bara,
    LineOne,
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
    ACol}
}
</script>

<style lang="less" scoped>
  .extra-item{
    display: inline-block;
    margin-right: 24px;
    a{
      margin-left: 24px;
    }
  }
  .creat-up-a{
    
     color: #52c41a;
    margin-left: 4px;
  }
  .caret-down-a{
   color: red;
    margin-left: 4px;
  }
  p{
  margin-left: 33px;
}
  #a-button-group-demo-buttom {
    margin-left: 5%;
    
  }

</style>
