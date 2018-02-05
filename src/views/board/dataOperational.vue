<template>
	<div class="animated fadeIn">
        <Row :gutter="16" class="search" style="margin-left:5px">

			<Col :xs="24" :sm="12" :md="12" :lg="12">			   			  
			    <div class="top">
					<span>数据期间:</span>
					<Date-picker :value="value2" format="yyyy/MM/dd" type="daterange" placeholder="选择日期" style="width: 200px"></Date-picker>
				    <Button type="success" style="width: 80px;" @click="check('formInline')">搜索</Button>
				</div>					               
			</Col>
			<Col :xs="24" :sm="12" :md="12" :lg="12">
			    <div class="header">
			    	<Button v-for="(item,index ) in options1" :key="item.id" @click="change" class="header_span" :class="{today:today[index]}">{{item}}</Button>
			    </div>               
			</Col>			
		</Row>  
		<Row :gutter="16" style="margin-left:2px">
			<Col span="6">
				<div>
					<div class="panel-body">
						
						<p class="succss">成功提现总金额</p>
						<p class="succss_one">￥16,520,520</p>
						<p>共52笔</p>						
					</div>
				</div>
			</Col>
			<Col span="6">
				<div class="panel-body">
						
						<p class="succss">成功提现总金额</p>
						<p class="succss_one">￥16,520,520</p>
						<p>共52笔</p>						
					</div>
			</Col>
			<Col span="6">
				<div class="panel-body">
						
						<p class="succss">成功提现总金额</p>
						<p class="succss_one">￥16,520,520</p>
						<p>共52笔</p>						
					</div>
			</Col>
			<Col span="6">
				<div class="panel-body">
						
						<p class="succss" >成功提现总金额</p>
						<p class="succss_one">￥16,520,520</p>
						<p>共52笔</p>						
					</div>
			</Col>
		</Row>
				
		<Row :gutter="16">
			<Col :xs="24" :sm="12" :md="12" :lg="12">			   
			   <div class="state-overview">
					<Col span="24">	
					   <shouye-eight></shouye-eight>	
					</Col>					
				</div>               
			</Col>			
			<Col :xs="24" :sm="12" :md="12" :lg="12">

			     <shouye-nine></shouye-nine>

			</Col>
		</Row>
		<Row :gutter="16">
			<Col :xs="24" :sm="12" :md="12" :lg="12">			   
			   <div class="state-overview">
					<Col span="24">	
					   <shouye-five></shouye-five>	
					</Col>					
				</div>               
			</Col>			
			<Col :xs="24" :sm="12" :md="12" :lg="12">

			     <shouye-ten></shouye-ten>

			</Col>
		</Row>
		<Row :gutter="16">
			<Col :xs="24" :sm="24" :md="24" :lg="24">			   
			   <div class="state-overview">
					<Col span="24">	
					   <shouye-twelve></shouye-twelve>	
					</Col>					
				</div>               
			</Col>			
			
		</Row>
		<Row :gutter="16">
			<Col :xs="24" :sm="12" :md="12" :lg="12">			   
			   <div class="state-overview">
					<Col span="24">	
					   <shouye-one></shouye-one>	
					</Col>					
				</div>               
			</Col>			
			<Col :xs="24" :sm="12" :md="12" :lg="12">
			     <shouye-eleven></shouye-eleven>

			</Col>
		</Row>
		
        <div style="height: 50px;"></div>
	</div>
</template>

<script>
	
    import ShouyeEight from './shouye/ShouyeEight'
	import ShouyeNine from './shouye/ShouyeNine'
	import ShouyeFive from './shouye/ShouyeFive'
	import ShouyeTen from './shouye/ShouyeTen'
	import ShouyeOne from './shouye/ShouyeOne'
	import ShouyeEleven from './shouye/ShouyeEleven'
	import ShouyeTwelve from './shouye/ShouyeTwelve'
	const end = new Date();
    const start = new Date();
	export default {
	
		name: 'dashboard',
		components: {
			ShouyeEight,
			ShouyeNine,
			ShouyeFive,
			ShouyeTen,
			ShouyeOne,
			ShouyeEleven,
			ShouyeTwelve
		},
		data() {
			return {
				speed: 10000,
				options1:['今天','最近7天','最近一个月','全部'],
                value2: [start,end],
                today:[1,0,0,0],
			}
		},
		methods: {
			test_logout() {
				this.$store.dispatch('LogOut').then(() => {
					this.$router.push({
						path: '/login'
					});
				}).catch(err => {
					this.$message.error(err);
				});
			},
			change(){
        		var Div = event.currentTarget;
        		var text = Div.children[0].innerHTML
        		console.log(text)
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
                            text: '最近7天',
                            value () {
                                const end = new Date();
    							const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '最近一个月',
                            value () {
                                const end = new Date();
    							const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '全部',
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
        		}else if (text=='最近7天'){
        			this.value2 = shortcuts[1].value();
        			this.today=[0,1,0,0]
        		}else if (text=='最近一个月'){
        			this.value2 = shortcuts[2].value();
        			this.today=[0,0,1,0]
        		}else if (text=='全部'){
        			this.value2 = shortcuts[3].value();
        			this.today=[0,0,0,1]
        		}
        	},
        	
        	check(){
				this.$Modal.info({
					content: "起始日期："+this.value2
               })
			},
		},
		mounted() {
			const token = this.$store.getters.token;

		},
		
	}
</script>

<style type="text/css" scoped>
/*查询*/
    .search{
		display: block;
		width: 100%;
		padding: 8px;
		background-color: #FFFFFF;
	}
	.top{
		float: left;
	}
	.header{
		float: left;		
	}
	.header_span{
        display: block;
        width: 80px;
        float: left;	    
		margin-left: 10px;
	}
	.today {
		background: #3DB1F3;
		color: #FFFFFF;
	}
/*成功提现总金额*/
.succss{
	border-bottom: 2px solid #dcdcdc;
	height: 30px;
}
.succss_one{
	height: 40px;
	
	line-height: 40px;
	font-size: 22px;
	font-weight: 700;
}


/*原来的*/

	.state-overview .ivu-col {
		margin-bottom: 20px
	}
	
	.state-overview .state-value .value {
		font-size: 24px;
		font-weight: 700;
		margin-bottom: 5px
	}
	
	.state-overview .state-value .title {
		font-size: 14px
	}
	
	.state-value {
		width: 60%;
		display: inline-block
	}
		.ivu-row {
		margin-bottom: 20px!important
	}
	.panel.purple {
		background: #6a8abe;
		box-shadow: 0 5px 0 #5f7cab
	}
	
	.panel.red {
		background-color: #fc8675;
		box-shadow: 0 5px 0 #e27869
	}
	
	.panel.blue {
		background: #5ab6df;
		box-shadow: 0 5px 0 #51a3c8
	}
	
	.panel.green {
		background: #4acacb;
		box-shadow: 0 5px 0 #42b5b6
	}
    .state-info{
		display: block;
		border: 1px solid red
	}
	
	.state-info .panel {
		margin-bottom: 20px;
		float: left;
		margin-left: 15px;
		border: 1px solid red
	}
	
	.panel {
		background-color: #fff;
		border: 1px solid transparent;
		border-radius: 4px;
		-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
		box-shadow: 0 1px 1px rgba(0, 0, 0, .05)
	}
	
	.panel-body {
		padding: 10px;
		text-align: center;
		background-color: #ffffff
	}
	

	


	
	
</style>