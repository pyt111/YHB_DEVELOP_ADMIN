<template>
	<div class="mian">

		<div class="age">
			单笔借款金额
		</div>
		<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />
		<div style="width:100%;height:300px;margin-top: 20px;" id="ShouyeSeven"></div>

	</div>
</template>
<script>
	const echarts = require('echarts');

export default {
    name: 'dataSourcePie',
    data () {
        return {
            //
        };
    },
    mounted () {
        this.$nextTick(() => {
            var dataSourcePie = echarts.init(document.getElementById('ShouyeSeven'));
            const option = {
                color: ['#3398DB'],
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis : [
			        {
			            type : 'category',
			            data : ['0-0.1W', '0.1-1W', '1-5W', '5-10W', '10-50W', '50-100W', '100W以上'],
			            axisTick: {
			                alignWithLabel: true
			            }
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value',
			            
			        }
			    ],
			    series : [
			        {
			            name:'直接访问',
			            type:'bar',
			            barWidth: '60%',
			            itemStyle: {
				                normal: {
				                	color: '#62B1FE',
				                	label:{
				                		show:true,
				                		position:'top',
				                		formatter:'{c}次'
				                	}
				                }
				            },
			            data:[10, 52, 200, 334, 390, 330, 220]
			        }
			    ]
            };
            dataSourcePie.setOption(option);
            window.addEventListener('resize', function () {
                dataSourcePie.resize();
            });
        });
    }
};
</script>
<style scoped>
	.mian {

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