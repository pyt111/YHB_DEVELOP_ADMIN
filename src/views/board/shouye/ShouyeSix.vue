<template>
	<div class="mian">

		<div class="age">
			利率
		</div>
		<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />
		<div style="width:100%;height:300px;margin-top: 20px;" id="ShouyeSix"></div>

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
            var dataSourcePie = echarts.init(document.getElementById('ShouyeSix'));
            const option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}万元({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'right',
                    data: ['10%以上', '7%以下', '7%-10%', ]
                },
                series: [
                    {
                        name: '利率',
                        type: 'pie',
                        radius: '66%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 210, name: '10%以上', itemStyle: {normal: {color: '#D53A35'}}},
                            {value: 130, name: '7%以下', itemStyle: {normal: {color: '#2F4553'}}},
                            {value: 54, name: '7%-10%', itemStyle: {normal: {color: '#61A0A9'}}}
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