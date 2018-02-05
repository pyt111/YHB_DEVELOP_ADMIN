<template>
	<div class="mian">

		<div class="age">
			期限
		</div>
		<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />
		<div style="width:100%;height:300px;margin-top: 20px;" id="ShouyeFive"></div>
		<div >
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
				columns1: [
				    {
						title: '',
						key: 'scope',
						align: 'center'
					},
				    {
						title: '活期',
						key: 'demand',
						align: 'center'
					},
					{
						title: '30天以内',
						key: 'thirty',
						align: 'center'
					},
					{
						title: '30-90天',
						key: 'ninety',
						align: 'center'
					},
					{
						title: '90-180天',
						key: 'oneHundred',
						align: 'center'
					},
					{
						title: '180-365天',
						key: 'threeHundred',
						align: 'center'
					},
					{
						title: '365天以上',
						key: 'big',
						align: 'center'
					}
				],
				data1: [{
						scope: '投资用户',
						demand: '3000',
						thirty: '333',
						ninety:'1555',
						oneHundred:'1555',
						threeHundred:'12121',
						big:'12215'

					},
					{
						scope: '投资金额',
						demand: '3000',
						thirty: '333',
						ninety:'1555',
						oneHundred:'1555',
						threeHundred:'12121',
						big:'12215'
					},
					{
						scope: '金额占比',
						demand: '3000',
						thirty: '333',
						ninety:'1555',
						oneHundred:'1555',
						threeHundred:'12121',
						big:'12215'
					}
				]
			}
		},
	
		mounted() {
			this.$nextTick(() => {
				let visiteVolume = echarts.init(document.getElementById('ShouyeFive'));

				const option = {
					tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}万元({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    right: 'right',
                    data: ['365天', '365天以上', '活期', '30天内', '30-90天','30-180天']
                },
                series: [
                    {
                        name: '期限',
                        type: 'pie',
                        radius: '66%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 210, name: '365天', itemStyle: {normal: {color: '#D53A35'}}},
                            {value: 130, name: '365天以上', itemStyle: {normal: {color: '#2F4553'}}},
                            {value: 54, name: '活期', itemStyle: {normal: {color: '#61A0A9'}}},
                            {value: 79, name: '30天内', itemStyle: {normal: {color: '#D38265'}}},
                            {value: 340, name: '30-90天', itemStyle: {normal: {color: '#C67861'}}},
                            {value: 240, name: '30-180天', itemStyle: {normal: {color: '#C99A32'}}}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
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