<template>
   <a-range-picker
      :placeholder="['Start', 'End']"
      format="YYYY"
      :value="value"
      :mode="mode2"
      @panelChange="handlePanelChange2"
    />
</template>

<script>
import moment from 'moment';
    export default {
        data(){
        return {
         mode2: ['year', 'year'],
         value: [],
        }
    },
    methods: {
        handlePanelChange2 (value, mode) {
        console.log('value',value.map(e=>{return e._d.getFullYear()}))
        this.value = value
        },
    }
  }
 
</script>

<style scoped>

</style>