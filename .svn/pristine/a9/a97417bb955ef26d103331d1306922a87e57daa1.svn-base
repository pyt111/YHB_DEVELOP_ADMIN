<template>
     <div>
            <span>最早--最晚 :</span>
            <DatePicker class="wan" placeholder="请选择日期" @on-change="change_data" placement="bottom-end" :value="value1" :open="true" type="daterange" format="yyyy/MM/dd"  style="width: 200px;"></DatePicker>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                value1: ''
            }
        },
        methods:{
            change(daterange){
                this.value1 = daterange;
                console.log(daterange)
            }
        }
    }
</script>
<style scoped>
    .wan{
        margin-left: 200px;
    }
</style>



