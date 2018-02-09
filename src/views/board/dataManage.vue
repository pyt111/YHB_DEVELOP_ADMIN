<template>
	<div  style=" position: relative;">

		<!-- <Row :gutter="16" style="margin-top: 20px;">
			<Col :xs="24" :sm="8" :md="8" :lg="8">
			<div class="state-overview">
				<Col span="24">
				<div class="mian">

					<div class="age">
						<span class="age_one">充值待付款
							<span class="age_tow">金额合计:{{totals}}元</span>
						</span>

						<router-link :to="{name:'list',params:{totals:user1}}">
							<span style="margin-right: 10px;" class="badge badge-info">317</span>
						</router-link>
					</div>
					<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />
					<div style="margin-top: 10px;" class="footer" v-for="(i,index) in user1" v-if="index<3">
						<div class="footer_left">
							<img src="../../../static/img/board/b5.png" />
							<span>{{i.name}}充值{{i.money}}元失败</span>
						</div>
						<div class="footer_right">
							发送时间：{{i.time}}
						</div>
					</div>

				</div>
				</Col>
			</div>
			</Col>
			<Col :xs="24" :sm="8" :md="8" :lg="8">
			<div class="state-overview">
				<Col span="24">
				<div class="mian">

					<div class="age">
						<span class="age_one">提现待审核
							<span class="age_tow">金额合计:{{totals}}元</span>
						</span>
						<span style="margin-right: 10px;" class="badge badge-info">317</span>
					</div>
					<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />
					<div style="margin-top: 10px;" class="footer" v-for="(i,index) in user1" v-if="index<3">
						<div class="footer_left">
							<img src="../../../static/img/board/b3.png" />
							<span>{{i.name}}充值{{i.money}}元失败</span>
						</div>
						<div class="footer_right">
							发送时间：{{i.time}}
						</div>
					</div>

				</div>
				</Col>
			</div>
			</Col>
			<Col :xs="24" :sm="8" :md="8" :lg="8">
			<div class="state-overview">
				<Col span="24">
				<div class="mian">

					<div class="age">
						<span class="age_one">提现待支付
							<span class="age_tow">金额合计:{{totals}}元</span>
						</span>
						<span style="margin-right: 10px;" class="badge badge-info">317</span>
					</div>
					<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />
					<div style="margin-top: 10px;" class="footer" v-for="(i,index) in user1" v-if="index<3">
						<div class="footer_left">
							<img src="../../../static/img/board/b4.png" />
							<span>{{i.name}}充值{{i.money}}元失败</span>
						</div>
						<div class="footer_right">
							发送时间：{{i.time}}
						</div>
					</div>

				</div>
				</Col>
			</div>
			</Col>

		</Row>
		<Row :gutter="16">
			<Col :xs="24" :sm="8" :md="8" :lg="8">
			<div class="state-overview">
				<Col span="24">
				<div class="mian">

					<div class="age">
						<span class="age_one">换卡待审核
							<span class="age_tow">金额合计:{{totals}}元</span>
						</span>
						<span style="margin-right: 10px;" class="badge badge-info">317</span>
					</div>
					<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />
					<div style="margin-top: 10px;" class="footer" v-for="(i,index) in user1" v-if="index<3">
						<div class="footer_left">
							<img src="../../../static/img/board/b1.png" />
							<span>{{i.name}}充值{{i.money}}元失败</span>
						</div>
						<div class="footer_right">
							发送时间：{{i.time}}
						</div>
					</div>

				</div>
				</Col>
			</div>
			</Col>
			<Col :xs="24" :sm="8" :md="8" :lg="8">
			<div class="state-overview">
				<Col span="24">
				<div class="mian">

					<div class="age">
						<span class="age_one">高端定制待审核
							<span class="age_tow">金额合计:{{totals}}元</span>
						</span>
						<span style="margin-right: 10px;" class="badge badge-info">317</span>
					</div>
					<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />
					<div style="margin-top: 10px;" class="footer" v-for="(i,index) in user1" v-if="index<3">
						<div class="footer_left">
							<img src="../../../static/img/board/b6.png" />
							<span>{{i.name}}充值{{i.money}}元失败</span>
						</div>
						<div class="footer_right">
							发送时间：{{i.time}}
						</div>
					</div>

				</div>
				</Col>
			</div>
			</Col>
			<Col :xs="24" :sm="8" :md="8" :lg="8">
			<div class="state-overview">
				<Col span="24">
				<div class="mian">

					<div class="age">
						<span class="age_one">理财师待审核
							<span class="age_tow">金额合计:{{totals}}元</span>
						</span>
						<span style="margin-right: 10px;" class="badge badge-info">317</span>
					</div>
					<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />
					<div style="margin-top: 10px;" class="footer" v-for="(i,index) in user1" v-if="index<3">
						<div class="footer_left">
							<img src="../../../static/img/board/b2.png" />
							<span>{{i.name}}充值{{i.money}}元失败</span>
						</div>
						<div class="footer_right">
							发送时间：{{i.time}}
						</div>
					</div>

				</div>
				</Col>
			</div>
			</Col>

		</Row> -->
		<div>数据管理</div>
		<Row :gutter="16" class="search" style="margin-left:5px">

			<Col :xs="24" :sm="8" :md="8" :lg="8">
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
		<search-top :tableArr="inputs" :btnSize="btnSize" :inptuSzie="inptuSzie"></search-top>
		<Row type="flex" align="top" class="cardList">
			<Spin size="large" fix v-if="loading"></Spin>
			<Col v-for=" x in cardList" :key="x.id" :xs="24" :sm="12" :md="8">
			<Card style="width:90%;margin:10px auto;">
				<p slot="title" class="cardP">
					<!-- <Icon type="ios-film-outline"></Icon> -->
					{{x.title}}
					<span class="spanOne" style="">合计金额:
						<span class="spanTwo">{{x.allMoney}}</span>
					</span>
				</p>
				<a href="#" slot="extra" @click.prevent="changeLimit">
					<Icon type="ios-loop-strong"></Icon>
					{{x.totals}}
				</a>
				<ul class="cardUl">
					<li v-for="y in x.list">
						<!-- <a :href="item.url" target="_blank">{{ item.name }}</a> -->
						<img src="static/img/board/b2.png" class="cardImg" />
						<router-link tag="a" :to="{name:y.url}" class="cardLink">{{y.name}}</router-link>
						<span class="cardTime">
							<span>发送时间:</span>{{y.time}}</span>

					</li>
				</ul>
			</Card>
			</Col>
		</Row>

	</div>
</template>

<script>
import axios from "axios";
import SearchTop from "components/customTemplate/search/InputList"; //input搜索框组件
import { mapGetters } from "vuex";
const end = new Date();
const start = new Date();
export default {
    data() {
        return {
            options1: ["今天", "最近7天", "最近一个月", "全部"],
            value2: [start, end],
            today: [1, 0, 0, 0],
			user1: [],
			loading:true,
            cardList: [],
            inputs: [
                {
                    kind: "daterange",
                    id: "time",
                    name: "数据期间:",
                    placeholder: "请选择日期",
                    type: "daterange",
                    colSize: { xs: 12, sm: 6, md: 6, lg: 5 },
                    val: ""
                }
            ],
            inptuSzie: "",
            btnSize: ""
        };
    },
    components: {
        SearchTop
    },
    computed: {
        ...mapGetters([
            //获取getters的table_serchData方法返回的值
            "table_serchData" //搜索框value
        ])
    },
    watch: {
        table_serchData: "postData" //监听table_serchData发生变化执行bignFunce方法
    },
    methods: {
        postData() {
            this.loading = true;
            axios.post("/board/dataManage")
                .then(reponse => {
					setTimeout(() => {
						this.loading = false;
					},1000)
                    
                    this.cardList = reponse.data;
                    console.log(this.cardList);
                })
                .catch(error => {
                    // alert("网络错误");
                });
        },
        change() {
            var Div = event.currentTarget;
            var text = Div.children[0].innerHTML;
            console.log(text);
            var shortcuts = [
                {
                    text: "今天",
                    value() {
                        const end = new Date();
                        const start = new Date();
                        return [start, end];
                    }
                },
                {
                    text: "最近7天",
                    value() {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        return [start, end];
                    }
                },
                {
                    text: "最近一个月",
                    value() {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        return [start, end];
                    }
                },
                {
                    text: "全部",
                    value() {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        return [start, end];
                    }
                }
            ];
            if (text == "今天") {
                this.value2 = shortcuts[0].value();
                this.today = [1, 0, 0, 0];
            } else if (text == "最近7天") {
                this.value2 = shortcuts[1].value();
                this.today = [0, 1, 0, 0];
            } else if (text == "最近一个月") {
                this.value2 = shortcuts[2].value();
                this.today = [0, 0, 1, 0];
            } else if (text == "全部") {
                this.value2 = shortcuts[3].value();
                this.today = [0, 0, 0, 1];
            }
        },
        check() {
            this.$Modal.info({
                content: "起始日期：" + this.value2
            });
        }
    },
    mounted() {
		this.postData()
	}
};
</script>

<style lang="scss" scoped>
.search {
    display: block;
    width: 100%;
    padding: 8px;
    background-color: #ffffff;
    margin-bottom: 20px;
}
.top {
    float: left;
}
.header {
    float: left;
}
.header_span {
    display: block;
    width: 80px;
    float: left;
    margin-left: 10px;
}
.today {
    background: #3db1f3;
    color: #ffffff;
}
/*下面部分*/
.cardList {
    .cardP {
        margin: 0 0 0 10px;
        font-weight: 500;
        font-size: 16px;
        span {
            font-weight: 100;
            font-size: 13px;
            color: #9c9393;
        }

        .spanOne {
        }
        .spanTwo {
        }
    }
    .cardImg {
        margin: 0 15px 0 10px;
    }
    .cardUl {
        li {
			height: 50px;
			position: relative;
            .cardTime {
				position: absolute;
				 right: 0;  
				 top: 25%;
			   color: #9c9393;
            }

            .cardLink {
                line-height: 50px;
            }
        }
    }
}
</style>