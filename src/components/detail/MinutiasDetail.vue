<template>
  <div>
    <a-card :bordered="false" :body-style="{padding: '24px',}">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">

          <a-tab-pane loading="true" tab="总收入" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">

              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane tab="净利润" key="2">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">

              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane loading="true" tab="总资产" key="3">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">

              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane loading="true" tab="净资本" key="4">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">

              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
        <a>选择日期:</a>
        <a-range-picker :defaultValue="[moment('2017/01/01', dateFormat), moment('2018/01/01', dateFormat)]" :format="dateFormat" />

        <a-table :dataSource="data" bordered style="margin-top: 24px">
          <a-table-column-group>
            <span slot="title"></span>
            <a-table-column dataIndex="firstName" key="firstName" sorter='(a, b) => a.firstName - b.firstName'>
              <span slot="title" style="color: black; font-weight:bold">最新排名</span>
            </a-table-column>
          </a-table-column-group>
          <a-table-column-group>
            <span slot="title"></span>
            <a-table-column dataIndex="lastName" key="lastName" sorter='(a, b) => a.lastName - b.lastName'>
              <span slot="title" style="color: black; font-weight:bold">商劵</span>
            </a-table-column>
          </a-table-column-group>

          <a-table-column-group>
            <span slot="title" style="color: black; font-weight:bold">2015</span>
            <a-table-column dataIndex="age" key="age" sorter='(a, b) => a.age - b.age'>
              <span slot="title" style="color: black; font-weight:bold">数值</span>
            </a-table-column>
            <a-table-column dataIndex="address" key="address" sorter='(a, b) => a.address - b.address'>
              <span slot="title" style="color: black; font-weight:bold">同比</span>
              <template slot-scope="address">
                <span>
                  <span>{{address}}</span>
                  <a-icon type="caret-up" class="aicon" />
                </span>
              </template>
            </a-table-column>
            <a-table-column dataIndex="tags" key="tags" sorter='(a, b) => a.tags - b.tags'>
              <span slot="title" style="color: black; font-weight:bold">历史排名</span>
              <template slot-scope="tags">
                <span>{{tags}}</span>
              </template>
            </a-table-column>
            <a-table-column key="action" dataIndex="action" sorter='(a, b) => a.action - b.action'>
              <span slot="title" style="color: black; font-weight:bold">排名变化</span>
              <template slot-scope="action">
                <span>
                  <span>{{action}}</span>
                  <a-icon type="caret-up" class="aicon" />
                </span>
              </template>
            </a-table-column>
          </a-table-column-group>
          <a-table-column-group>
            <span slot="title" style="color: black; font-weight:bold">2015</span>
            <a-table-column dataIndex="numerical" key="numerical" sorter='(a, b) => a.numerical - b.numerical'>
              <span slot="title" style="color: black; font-weight:bold">数值</span>
            </a-table-column>
            <a-table-column dataIndex="year" key="year" sorter='(a, b) => a.year - b.year'>
              <span slot="title" style="color: black; font-weight:bold">同比</span>
              <template slot-scope="year">
                <span>
                  <span>{{year}}</span>
                  <a-icon type="caret-up" class="aicon" />
                </span>
              </template>
            </a-table-column>
            <a-table-column dataIndex="history" key="history" sorter='(a, b) => a.history - b.history'>
              <span slot="title" style="color: black; font-weight:bold">历史排名</span>
              <template slot-scope="history">
                <span>{{history}}</span>
              </template>
            </a-table-column>
            <a-table-column key="change" dataIndex="change" sorter='(a, b) => a.change - b.change'>
              <span slot="title" style="color: black; font-weight:bold; text-align:center">排名变化</span>
              <template slot-scope="change">
                <span>
                  <span>{{change}}</span>
                  <a-icon type="caret-up" class="aicon" />
                </span>
              </template>
            </a-table-column>
          </a-table-column-group>

        </a-table>
      </div>
    </a-card>
  </div>
</template>

<script>
  import moment from 'moment';
  import ACol from 'ant-design-vue/es/grid/Col'
  import ARow from 'ant-design-vue/es/grid/Row'
  import ACard from 'ant-design-vue/es/card/Card'
  import AIcon from 'ant-design-vue/es/icon/icon'
  import ATabs from 'ant-design-vue/es/tabs'
  import ADatePicker from 'ant-design-vue/es/date-picker'
  import MiniProgress from '../chart/MiniProgress'
  import RankingList from '../chart/RankingList'

  const ATabPane = ATabs.TabPane
  const ARangePicker = ADatePicker.RangePicker
  const rankList = []

  const data = [{
      key: '1',
      firstName: '1',
      lastName: 'xx商劵',
      age: 419203,
      address: '0.01%',
      tags: 419203,
      action: 2,
      numerical: 7,
      year: '0.02%',
      history: 1234,
      change: 7,
    },
    {
      key: '2',
      firstName: '2',
      lastName: 'xx商劵',
      age: 419203,
      address: '0.01%',
      tags: 419203,
      action: 2,
      numerical: 7,
      year: '0.02%',
      history: 1234,
      change: 7,
    },
    {
      key: '3',
      firstName: '3',
      lastName: 'xx商劵',
      age: 419203,
      address: '0.01%',
      tags: 419203,
      action: 2,
      numerical: 7,
      year: '0.02%',
      history: 1234,
      change: 7,
    },
    {
      key: '4',
      firstName: '4',
      lastName: 'xx商劵',
      age: 419203,
      address: '0.01%',
      tags: 419203,
      action: 2,
      numerical: 7,
      year: '0.02%',
      history: 1234,
      change: 7,
    },
    {
      key: '5',
      firstName: '5',
      lastName: 'xx商劵',
      age: 419203,
      address: '0.01%',
      tags: 419203,
      action: 2,
      numerical: 7,
      year: '0.02%',
      history: 1234,
      change: 7,
    }
  ];


  export default {
    name: 'MinutiasDetail',
    data() {
      return {
        rankList,
        dateFormat: 'YYYY/MM/DD',
        monthFormat: 'YYYY/MM',
        data,
      }
    },
    methods: {
      moment,
    },
  }
  components: {
    ATabPane,
    ATabs,
    MiniProgress,
    ADatePicker,
    RankingList,
    AIcon,
    ACard,
    ARow,
    ACol
  }

</script>

<style lang="less" scoped>
  a {
    margin-left: 33px;
    color: black;
  }

  .aicon {
    color: green;
  }

</style>
