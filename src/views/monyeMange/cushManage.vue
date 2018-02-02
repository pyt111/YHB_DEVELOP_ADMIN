<template>
    <row>
    	<div>
    		<Button v-for="(a,b) in options1" :key="a.id" @click="change" class="click" v-bind:class="{today:today[b]}" >{{a}}</Button>
    	</div>
         <i-col span="12">
            <Date-picker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
        </i-col>
        <i-col span="12">
        <div v-for = "(name,index) in name" v-if ='index<=2'>
        	<b>{{name.name}}</b>
        	<b>{{name.money}}</b>
        	<b>{{name.time}}</b>        	
        </div> 
        </i-col>
    </row>
</template>
<script>
	import axios from 'axios';
	const end = new Date();
    const start = new Date();
    export default {
        data () {
            return {
                options1:['今天','最近一周','最近三个月','全部'],
                value2: [start,end],
                today:[1,0,0,0],
                name:[],
            }
        },
        methods:{
        	change(){
        		var Div = event.currentTarget;
        		var text = Div.children[0].innerHTML
        		var shortcuts=[
                        {
                            text: '今天',
                            value () {
                            	const end = new Date();
    							const start = new Date();
                                return [start, end];
                            }
                        },
                        {
                            text: '最近一周',
                            value () {
                                const end = new Date();
    							const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '最近三个月',
                            value () {
                                const end = new Date();
    							const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
        		if (text=='今天'){
        			this.value2 = shortcuts[0].value();
        			this.today=[1,0,0,0]
        		}else if (text=='最近一周'){
        			this.value2 = shortcuts[1].value();
        			this.today=[0,1,0,0]
        		}else if (text=='最近三个月'){
        			this.value2 = shortcuts[2].value();
        			this.today=[0,0,1,0]
        		}else if (text=='全部'){
        			this.value2 = shortcuts[2].value();
        			this.today=[0,0,0,1]
        		}
        	}
        },
        created(){			
			this.loading = true;			
			axios.get('http://localhost:9001/static/dataManage.json')
			.then(reponse=>{
	            this.name=reponse.data.total;
			})
			.catch(error=>{
				alert('网络错误')
			})
			
		}
    }
</script>
<style>
	.today {
		background: #f00;
		color: #fff;
	}
	.click {
		width: 100px;
		height: 30px;
		text-align: center;
		border: 1px solid #f00;
	}	
</style>
