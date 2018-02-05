<template>
	<div >
		<div class="chart1">
			<p class="name">用户分布统计</p>
			<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />			
			<chart :options="option" class="echarts" id="chart" @click='aaaa'> </chart>
			<div>
				<Table :columns="columns1" :data="data1"></Table>
			</div>
		</div>
		

	</div>
</template>

<script>
	var xAxisData = ['北京','上海','广州','深圳','重庆','新疆'];
	var data2 = [-10,-20,-30,-40,-50,-60];
	var data1 = [10,20,30,40,50,60];
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				option: {
                    
					backgroundColor: '#FFFFFF',
					legend: {
						data: ['用户占比', '金额占比'],
						align: 'left',
						bottom: 10
					},

					tooltip: {},
					yAxis: {
						data: xAxisData,
						silent: false,
						axisLine: {
							onZero: true
						},
						splitLine: {
							show: false
						},
						splitArea: {
							show: false
						},
						
					},
					xAxis: {				         
			            min: -130,
						max: 130,
                         type: 'value',  
				            axisLabel: {  
				                  show: true,  
				                  interval: 'auto',  
				                  formatter: ''  
				                },  
				            show: true,
				           	axisLine: {show: false},
				           	axisTick:{
        							show:false
    								}  				        						
					},
//					grid: {
//						left: 100
//					},

					series: [{
							name: '用户占比',
							type: 'bar',
							stack: 'one',
							itemStyle: {
				                normal: {
				                	color: '#62B1FE',
				                	label:{
				                		show:true,
				                		position:'right',
				                		formatter:'{c}%'
				                	}
				                }
				            },
							data: data1
						},
						{
							name: '金额占比',
							type: 'bar',
							stack: 'one',
							itemStyle: {
				                normal: {
				                	color: '#FFB600',
				                	label:{
				                		show:true,
				                		position:'left',
				                		formatter:function(params){
				                			return (params.data+'%').split('-')[1]
				                		}
				                	}
				                	}
				            },
							data: data2
						}
					]
			},
			columns1: [{
						title: '',
						key: 'scope',
						align: 'center'
					},
					{
						title: '北京',
						key: 'demand',
						align: 'center'
					},
					{
						title: '上海',
						key: 'thirty',
						align: 'center'
					},
					{
						title: '广州',
						key: 'ninety',
						align: 'center'
					},
					{
						title: '深圳',
						key: 'oneHundred',
						align: 'center'
					},
					{
						title: '山东',
						key: 'threeHundred',
						align: 'center'
					},
					{
						title: '新疆',
						key: 'big',
						align: 'center'
					}
				  ],
				data1: [{
						scope: '金额量',
						demand: '3000',
						thirty: '333',
						ninety: '1555',
						oneHundred: '1555',
						threeHundred: '12121',
						big: '12215',
						

					},
					{
						scope: '金额占比',
						demand: '10%',
						thirty: '10%',
						ninety: '10%',
						oneHundred: '10%',
						threeHundred: '10%',
						big: '10%',
						
					},
					{
						scope: '用户量',
						demand: '3000',
						thirty: '333',
						ninety: '1555',
						oneHundred: '1555',
						threeHundred: '12121',
						big: '12215',					
					},
					{
						scope: '用户量占比',
						demand: '10%',
						thirty: '10%',
						ninety: '10%',
						oneHundred: '10%',
						threeHundred: '10%',
						big: '10%',					
					}
				]
			}
		},
			methods:{
				aaaa(params){
					console.log(params)
				}
			}
			
	}
</script>
<style scoped>
	#chart{
		width: 100%;
		height: 500px;
		
	}
	.chart1{
		width: 100%;
		background-color: #FFFFFF;
		padding: 10px;
	}
	.name{
		height: 40px;
		padding: 10px;
		font-weight: 700;
	}
</style>