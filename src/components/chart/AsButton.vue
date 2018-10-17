<template>
  <div style="width: 200px;">
    <div class="made" @click="showTo($event)">
      <div class="demo">
        <div class="circle" :class="{'active':value==1}" @click="showToggle(1)"></div>
      </div>
      <span class="button-span-class">合并报表</span>
    </div>

    <div class="made1" sty @click="showTo($event)">
      <div class="demo">
        <div class="circle1" :class="{'active':value==2}" @click="showToggle(2)"></div>
      </div>
      <span class="buttonas-span" >母公司报表</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 1
      }
    },
    methods: {
      showToggle(index) {
        this.value = index
      },
      showTo(e) {
        console.log(e.path[2].innerText);
        console.log(e)
        //.path[2].firstElementChild.innerText
      },
      // showTo1(ev) {
      //   console.log(ev.path[2].firstElementChild.innerText)
      //   .path[2].firstElementChild.innerText
      // }
    }
  }

</script>

<style scoped>
  .nouse {
    height: 25px;
    line-height: 25px;
    display: inline-block;
  }

  .demo {
    height: 20px;
    width: 20px;
    border: 1px solid #1890ff;
    border-radius: 20px;
    display: inline-block;
  }

  .circle {
    width: 13px;
    height: 13px;
    border-radius: 13px;
    display: inline-block;
    margin-left: 2px
  }

  .nouse1 {
    height: 20px;
    width: 20px;
    border: 1px solid #1890ff;
    border-radius: 20px;
    display: inline-block;
  }

  .circle1 {
    width: 13px;
    height: 13px;
    border-radius: 13px;
    display: inline-block;
    margin-left: 2px;
  }

  .button-span-class {
    width:56px;
    display: inline-block;
    line-height: 25px;
    position: absolute;
    left:1.625rem;
    top:-4px;
  }
  .made{
    display: inline-block; 
    width:20px;height:20px;
    margin-bottom:20px;
    position: relative;
  }
  .made1{
    display: inline-block; 
    width:20px;height:20px;
    margin-bottom:20px;
    position: relative;
    margin-left: 66px;
  }
  .buttonas-span {
    width:71px;
    display: inline-block;
    line-height: 25px;
    position: absolute;
    left:1.625rem;
    top:-4px;
  }
  .active {
    background-color: #1890ff;
  }

</style>
