<template>
	<div >
		<div class="chart1">
			<p class="name">用户年龄统计</p>
			<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />			
			<chart :options="option" class="echarts" id="chart" @click='aaaa'> </chart>
			<div>
				<Table :columns="columns1" :data="data1"></Table>
			</div>
		</div>
		

	</div>
</template>

<script>
	var xAxisData = ['25岁以下','26-30岁','31-35岁','36-40岁','41-45岁','46-50岁','50岁以上'];
	var data1 = [10,20,30,40,50,60,30];
	var data2 = [-10,-20,-30,-40,-50,-60,-20];
	
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
					xAxis: {
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
					yAxis: {				         
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
				                		position:'top',
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
				                		position:'bottom',
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
						title: '25岁以下',
						key: 'demand',
						align: 'center'
					},
					{
						title: '26-30岁',
						key: 'thirty',
						align: 'center'
					},
					{
						title: '31-35岁',
						key: 'ninety',
						align: 'center'
					},
					{
						title: '36-40岁',
						key: 'oneHundred',
						align: 'center'
					},
					{
						title: '41-45岁',
						key: 'threeHundred',
						align: 'center'
					},
					{
						title: '45-50岁',
						key: 'big',
						align: 'center'
					},
					{
						title: '50岁以上',
						key: 'Mbig',
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
						Mbig:'1111'
						

					},
					{
						scope: '金额占比',
						demand: '10%',
						thirty: '10%',
						ninety: '10%',
						oneHundred: '10%',
						threeHundred: '10%',
						big: '10%',
						Mbig:'10%'
						
					},
					{
						scope: '用户量',
						demand: '3000',
						thirty: '333',
						ninety: '1555',
						oneHundred: '1555',
						threeHundred: '12121',
						big: '12215',
						Mbig:'111111'
					},
					{
						scope: '用户量占比',
						demand: '10%',
						thirty: '10%',
						ninety: '10%',
						oneHundred: '10%',
						threeHundred: '10%',
						big: '10%',	
						Mbig:'20%'
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