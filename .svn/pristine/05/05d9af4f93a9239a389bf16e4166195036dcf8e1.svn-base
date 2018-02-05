<template>
	<div class="mian">

		<div class="age">
			单笔借款金额
		</div>
		<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />
		<div style="width:100%;height:300px;margin-top: 20px;" id="ShouyeTen"></div>
		<div>
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
						title: '',
						key: 'scope',
						align: 'center'
					},
					{
						title: '0.1-1w',
						key: 'demand',
						align: 'center'
					},
					{
						title: '0.1-1w',
						key: 'thirty',
						align: 'center'
					},
					{
						title: '1-5w',
						key: 'ninety',
						align: 'center'
					},
					{
						title: '5-10w',
						key: 'oneHundred',
						align: 'center'
					},
					{
						title: '10-50w',
						key: 'threeHundred',
						align: 'center'
					},
					{
						title: '50-100w',
						key: 'big',
						align: 'center'
					},
					{
						title: '100w以上',
						key: 'Mbig',
						align: 'center'
					}
				],
				data1: [{
						scope: '投资笔数',
						demand: '3000',
						thirty: '333',
						ninety: '1555',
						oneHundred: '1555',
						threeHundred: '12121',
						big: '12215',
						Mbig:'1212'

					},
					{
						scope: '投资总金额',
						demand: '3000',
						thirty: '333',
						ninety: '1555',
						oneHundred: '1555',
						threeHundred: '12121',
						big: '12215',
						Mbig:'1212'
					},
					{
						scope: '总金额占比',
						demand: '3000',
						thirty: '333',
						ninety: '1555',
						oneHundred: '1555',
						threeHundred: '12121',
						big: '12215',
						Mbig:'1212'
					}
				]
			}
		},

		mounted() {
			this.$nextTick(() => {
				let visiteVolume = echarts.init(document.getElementById('ShouyeTen'));

				const option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b} : {c}万元({d}%)'
					},
					legend: {
						orient: 'vertical',
						left: 'left',
						data: ['0-0.1w', '0.1-1w', '1-5w', '5-10w', '10-50w', '50-100w','100w以上']
					},
					series: [{
						name: '期限',
						type: 'pie',
						radius: '66%',
						center: ['50%', '60%'],
						data: [{
								value: 210,
								name: '0-0.1w',
								itemStyle: {
									normal: {
										color: '#D53A35'
									}
								}
							},
							{
								value: 130,
								name: '0.1-1w',
								itemStyle: {
									normal: {
										color: '#2F4553'
									}
								}
							},
							{
								value: 54,
								name: '1-5w',
								itemStyle: {
									normal: {
										color: '#316182'
									}
								}
							},
							{
								value: 79,
								name: '5-10w',
								itemStyle: {
									normal: {
										color: '#61A0A9'
									}
								}
							},
							{
								value: 340,
								name: '10-50w',
								itemStyle: {
									normal: {
										color: '#D38265'
									}
								}
							},
							{
								value: 240,
								name: '50-100w',
								itemStyle: {
									normal: {
										color: '#C67861'
									}
								}
							}
							,
							{
								value: 200,
								name: '100w以上',
								itemStyle: {
									normal: {
										color: '#C99A32'
									}
								}
							}
						],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
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
		padding: 10px;
		background-color: #FFFFFF;
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