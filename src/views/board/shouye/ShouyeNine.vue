<template>
	<div class="mian">

		<div class="age">
			利率
		</div>
		<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />
		<div style="width:48%;height:300px;margin-top: 20px;float: left;" id="ShouyeNine"></div>
		<div style="height: 300px;width: 48%;float: right;">
			<div style="height: 110px;"></div>
			<Table :columns="columns1" :data="data1"></Table>
		</div>

	</div>
</template>
<script>
	const echarts = require('echarts');
	export default {
		name: 'visiteVolume',
		data() {
			return {
				columns1: [{
						title: '账户分类',
						key: 'scope',
						align: 'center'
					},
					{
						title: '投资用户',
						key: 'user',
						align: 'center'
					},
					{
						title: '投资金额',
						key: 'money',
						align: 'center'
					}
				],
				data1: [{
						scope: '7%一下',
						user: '10000',
						money: '10000',

					},
					{
						scope: '7%-10%',
						user: '5021',
						money: '10000',
					},
					{
						scope: '10%以上',
						user: '8520147',
						money: '10000',
					}
				]
			}
		},
	
		mounted() {
			this.$nextTick(() => {
				let visiteVolume = echarts.init(document.getElementById('ShouyeNine'));

				const option = {
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: {
					
						
						data: ['投资用户', '投资金额']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: ['7%一下', '7%-10%', '10%以上']
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [{
							name: '投资用户',
							type: 'bar',
							right:'right',
							itemStyle: {
								normal: {
									color: '#C23531',
									label: {
										show: true,
										position: 'top',
										formatter: '{c}%'
									}
								}
							},
							data: [20, 52, 38]
						},
						{
							name: '投资金额',
							type: 'bar',
							right:'right',
							itemStyle: {
								normal: {
									color: '#D48265',
									label: {
										show: true,
										position: 'top',
										formatter: '{c}%'
									}
								}
							},
							data: [10, 60, 30]
						}
					]
				};

				visiteVolume.setOption(option);

				window.addEventListener('resize', function() {
					visiteVolume.resize();
				});
			});
		}
	};
</script>
<style scoped>
	.mian {
		height: 380px;
		background-color: #FFFFFF;
		padding: 10px;
	}
	
	.age {
		height: 40px;
		padding: 10px;
		font-weight: 700;
		border-bottom: 2px;
	}
	
	.list {
		text-align: center;
		margin-top: 20px;
	}
	
	.progress {
		margin-top: 10px;
		color: rgba(0, 89, 255, 0.582)
	}
</style>