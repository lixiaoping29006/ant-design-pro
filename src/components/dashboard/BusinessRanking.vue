<template>
  <div>
    <!-- 业务排名页面 -->
    <a-row style="margin: 0 -12px">
      <!-- 证券经纪业务收入 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="证券经纪业务收入" total="￥ 2,089">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="89" :scale="0" />
          </div>
          <div slot="footer">同比<span> 22.10%</span>
            <a-icon type="caret-up" class="creat-up-a" />
          </div>
        </chart-card>
      </a-col>
      <!-- 两融业务利息收入 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="两融业务利息收入" total="￥ 12,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="89" :scale="0" />
          </div>
          <div slot="footer">同比<span> 22.10%</span>
            <a-icon type="caret-up" class="creat-up-a" />
          </div>
        </chart-card>
      </a-col>
      <!-- 投行业务净收入 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="投行业务净收入" total="￥ 12,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="89" :scale="0" />
          </div>
          <div slot="footer">同比<span> 22.10%</span>
            <a-icon type="caret-up" class="creat-up-a" />
          </div>
        </chart-card>
      </a-col>
      <!-- 受托资产管理净收入 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="受托资产管理净收入" total="￥ 12,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="89" :scale="0" />
          </div>
          <div slot="footer">同比<span> 22.10%</span>
            <a-icon type="caret-up" class="creat-up-a" />
          </div>
        </chart-card>
      </a-col>
    </a-row>
    <!-- 业务收入结构 -->
    <!-- <a-card :bordered="false" :body-style="{padding: '24px',}">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <a-tab-pane loading="true" tab="业务收入结构" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24" style="width:90%">
                
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card> -->
    
     <a-card :bordered="false" :body-style="{padding: '24px',}">
      <div class="salesCard">
        <div class="head-max" >
          <div class="demo" >
            <h3 class="demo-h3">业务收入结构</h3>
          </div>
        </div>
        <div class="max-tabs" style=" width: 100%;overflow: hidden;display: flex;box-sizing: border-box;">
          <a-row>
            <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24" style="position: relative;">
               <!-- <echarts-bar-all title="总收入变化"  :shapeData='shapeData' id='shape'/> -->
            </a-col>
          </a-row>
        </div>
      </div>
    </a-card>

    <!-- 经纪业务 -->
    <a-card :bordered="false" :body-style="{padding: '24px',marginTop:'24px'}">
      <div class="salesCard">
        <div class="head-max" >
          <div class="demo" >
            <h3 class="demo-h3">经纪业务</h3>
          </div>
          <div class="extra-wrap" slot="tabBarExtraContent" >
            <div class="extra-item">
              <p @click="interchange(1)" :class="{'active-a':bust==1}" ref="yearas">年报</p>
              <p @click="interchange(2)" :class="{'active-a':bust==2}" ref="as">中报</p>
            </div>
            <!-- <a-range-picker :style="{width: '256px'}" ></a-range-picker> -->
            <range-picker :style="{width: '256px'}" ></range-picker>
          </div>
        </div>
        <div class="max-tabs" style=" width: 100%;display: flex;box-sizing: border-box;">
            <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}" style="width:80%;">
              <a-tab-pane loading="true" tab="净收入" key="1">
                <a-row>
                  <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24" style="position: relative;">
                    <div style="position:position: relative;">
                      <as-button style="position: absolute;left:104%;top:-60px;"/>
                    </div>
                    <echarts-bar1 title="总收入变化" :status=1 />
                  </a-col>
                </a-row>
              </a-tab-pane>
              <a-tab-pane loading="true" tab="股基成交额" key="2">
                <a-row>
                  <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24" style="position: relative;">
                    <div style="position:absolute;top: -14%;left: 80%;">
                      <as-button />
                    </div>
                  </a-col>
                </a-row>
              </a-tab-pane>
              <a-tab-pane loading="true" tab="两融业务利息收入" key="3">
                <a-row>
                  <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24" style="position: relative;">
                    <div style="position:absolute;top: -14%;left: 80%;">
                      <as-button />
                    </div>
                  </a-col>
                </a-row>
              </a-tab-pane>
            </a-tabs>
            <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24" style="width:34%;margin-top: 24px;">
              <ranking-list title="总收入排行榜" :list="rankList" />
            </a-col>
        </div>
      </div>
    </a-card>

    <!-- 投行业务 -->
     <a-card :bordered="false" :body-style="{padding: '24px',marginTop:'24px'}">
      <div class="salesCard">
        <div class="head-max" >
          <div class="demo" >
            <h3 class="demo-h3">投行业务</h3>
          </div>
          <div class="extra-wrap" slot="tabBarExtraContent" >
            <div class="extra-item">
              <p @click="interchange(1)" :class="{'active-a':bust==1}" ref="yearas">年报</p>
              <p @click="interchange(2)" :class="{'active-a':bust==2}" ref="as">中报</p>
            </div>
            <!-- <a-range-picker :style="{width: '256px'}" ></a-range-picker> -->
            <range-picker :style="{width: '256px'}" @click="aschange($event)"></range-picker>
          </div>
        </div>
        <div class="max-tabs" style=" width: 100%;display: flex;box-sizing: border-box;">
            <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}" style="width:80%;">
              <a-tab-pane loading="true" tab="投行业务净收入" key="1">
                <a-row>
                  <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24" style="position: relative;">
                    <div style="position:absolute;top: -14%;left: 50%;">
                      <as-button />
                    </div>
                    <echarts-bar2 title="总收入变化" :status=1 />
                  </a-col>
                </a-row>
              </a-tab-pane>
            </a-tabs>
            <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24" style="width:34%;margin-top: 24px;">
              <ranking-list title="总收入排行榜" :list="rankList" />
            </a-col>
        </div>
      </div>
    </a-card>
    <!-- 资管业务 -->
    <a-card :bordered="false" :body-style="{padding: '24px',marginTop:'24px'}">
      <div class="salesCard">
        <div class="head-max" >
          <div class="demo" >
            <h3 class="demo-h3">资管业务</h3>
          </div>
          <div class="extra-wrap" slot="tabBarExtraContent" >
            <div class="extra-item">
              <p @click="interchange(1)" :class="{'active-a':bust==1}" ref="yearas">年报</p>
              <p @click="interchange(2)" :class="{'active-a':bust==2}" ref="as">中报</p>
            </div>
            <!-- <a-range-picker :style="{width: '256px'}" ></a-range-picker> -->
            <range-picker :style="{width: '256px'}" @click="aschange($event)"></range-picker>
          </div>
        </div>
        <div class="max-tabs" style=" width: 100%;display: flex;box-sizing: border-box;">
            <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}" style="width:80%;">
              <a-tab-pane loading="true" tab="受托资产管理费收入" key="1">
                <a-row>
                  <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24" style="position: relative;">
                    <div style="position:absolute;top: -14%;left: 50%;">
                      <as-button />
                    </div>
                    <echarts-bar3 title="总收入变化" :status=1 />
                  </a-col>
                </a-row>
              </a-tab-pane>
            </a-tabs>
            <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24" style="width:34%;margin-top: 24px;">
              <ranking-list title="总收入排行榜" :list="rankList" />
            </a-col>
        </div>
      </div>
    </a-card>

    
    
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
  import EchartsBar1 from './businesscharts/EchartsBar1'
  import EchartsBar2 from './businesscharts/EchartsBar2'
  import EchartsBar3 from './businesscharts/EchartsBar3'
  import EchartsBarAll from './businesscharts/EchartsBarAll'
  import MiniProgress from '../chart/MiniProgress'
  import ATabs from 'ant-design-vue/es/tabs'
  import ADatePicker from 'ant-design-vue/es/date-picker'
  import LineOne from '../chart/LineOne'
  import BarShape from '../chart/BarShape'
  import BaraAs from '../chart/BaraAs'
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
        rankList,
        aa: '',
        bust: 1,
        lineData: [],
      }
    },
    methods: {
      callback(key) {},
      aschange(event) {
        console.log(event.toElement.innerText)
      },
      interchange(inter) {
        this.bust = inter
        console.log(this.$refs.as.innerText)
      }
    },
    components: {
      Trend,
      SalesData,
      HotSearch,
      RankingList,
      LineOne,
      BarShape,
      BaraAs,
      EchartsBar1,
      EchartsBar2,
      EchartsBar3,
      EchartsBarAll,
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
      ACol,
      AsButton,
      RangePicker
    }
  }

</script>

<style lang="less" scoped>
  .extra-item {
    display: inline-block;
    margin-right: 12px;
    p {
      margin-left: 24px;
      display: inline-block;
      cursor: pointer;
    }
  }

  .creat-up-a {
    color: #52c41a;
  }

  .a-button {
    color: #1890ff;
    border: #1890ff 1px solid;
  }

  .active-a {
    color: #1890ff
  }
  .extra-wrap{
    display: inline-block;
    float: right;
  }
.demo{
    display: inline-block;
    float: left;
  }
  .demo h3{
        margin-left: 30px;
  }
  .head-max{
    border-bottom: 1px solid #d9d9d9;
    overflow: hidden;
    padding: 0px 0 8px 0;
  }
  .demo-h3{
    font-weight: bold;
  }
  
</style>
