<template>
	<div class="mian">

		<div class="age">
			用户年龄群体
		</div>
		<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />
		<div style="width:100%;height:300px;margin-top: 20px;" id="visite_volume_con"></div>

	</div>
</template>
<script>
	const echarts = require('echarts');
	export default {
		name: 'visiteVolume',
		data() {
			return {
				//
			};
		},
		mounted() {
			this.$nextTick(() => {
				let visiteVolume = echarts.init(document.getElementById('visite_volume_con'));

				const option = {
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						},
						formatter: '{a} <br/>{b} : {c}%'  
		             
					},
					grid: {
						top: 0,
						left: '2%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'value',
						boundaryGap: [0, 0.01],
						axisLabel: {  
			                  show: true,  
			                  interval: 'auto',  
			                  formatter: '{value} %'  
			                },  
			            show: true 
					},
					yAxis: {
						type: 'category',
						data: ['50岁以上', '46-50岁', '41-45岁', '36-40岁', '31-35岁', '26-30岁', '25岁一下'],
						nameTextStyle: {
							color: '#c3c3c3',							
						},
						 
						
					},
					series: [{
						name: '年龄比',
						type: 'bar',
						data: [{
								value: 45,
								name: '50岁以上',
								itemStyle: {
									normal: {
					                	color: '#C33531',
					                	label:{
					                		show:true,					                
					                		formatter:'{c}%'
					                	}
					                }
								}
						}, 
							{
								value: 87,
								name: '46-50岁',
								itemStyle: {
									normal: {
					                	color: '#C33531',
					                	label:{
					                		show:true,					                
					                		formatter:'{c}%'
					                	}
					                }
								}
							},
							{
								value: 25,
								name: '41-45岁',
								itemStyle: {
									normal: {
					                	color: '#C33531',
					                	label:{
					                		show:true,					                
					                		formatter:'{c}%'
					                	}
					                }
								}
							},
							{
								value: 19,
								name: '36-40岁',
								itemStyle: {
									normal: {
					                	color: '#C33531',
					                	label:{
					                		show:true,					                
					                		formatter:'{c}%'
					                	}
					                }
								}
							},
							{
								value: 54,
								name: '31-35',
								itemStyle: {
									normal: {
					                	color: '#C33531',
					                	label:{
					                		show:true,					                
					                		formatter:'{c}%'
					                	}
					                }
								},
								
							},
							{
								value: 30,
								name: '26-30岁',
								itemStyle: {
				                normal: {
					                	color: '#C33531',
					                	label:{
					                		show:true,					                
					                		formatter:'{c}%'
					                	}
					                }
					            },
							},
							{
								value: 10,
								name: '25岁以下',
								itemStyle: {
									normal: {
					                	color: '#C33531',
					                	label:{
					                		show:true,					                
					                		formatter:'{c}%'
					                	}
					                }
								},
													            
							}
						]
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
		height: 380px;
		background-color: #FFFFFF
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
	}
</style>