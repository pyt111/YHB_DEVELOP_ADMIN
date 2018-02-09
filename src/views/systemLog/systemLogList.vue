<template>
	<div>
		<Row>
			<Form ref="formInline" :model="formInline" inline>
				<FormItem prop="userID">
					<div class="search">
						<span>商户账号：</span>
						<Input v-model="formInline.userID" placeholder="输入商户账号" style="width: 150px;"></Input>
					</div>
				</FormItem>
				<FormItem prop="userName">
					<div class="search">
						<span>真实姓名：</span>
						<Input v-model="formInline.userName" placeholder="输入真实姓名" style="width: 150px;"></Input>
					</div>
				</FormItem>
				<FormItem class="check">
					<div>
						<Button type="info" style="width: 100px;" @click="check('formInline')">查询</Button>
						<Button type="primary" style="width: 100px;" @click="educe">导出</Button>
					</div>
				</FormItem>
			</Form>
		</Row>

		<Row class="table">
			<Col :span="24">
			<basics-table :baseC="baseConfig" :apiNameConfig="apiName" :apiPortConfig="apiPort"></basics-table>
			<!-- <Table  :columns="columns1" :data="page_data1" ref='table'></Table>
			   <div style="position:absolute;top:0px;width:100%;height:100%;display: flex;
                            align-items: center;
                            justify-content: center;background: rgba(210, 216, 222, 0.5);" v-if="loading">
					<Spin size="large"></Spin>
					<h6 style="color:#2d8cf0;margin-top:10px;">正在获取数据...</h6>
				</div>
			</Col>
			<Col :span="24" style="text-align: right;margin-top: 10px;">			  
			   <Page :total="this.data1.length" :current="1" show-total show-elevator @on-change="setInitPage"></Page> -->
			</Col>
		</Row>
	</div>
</template>

<script>
import axios from "axios";
import BasicsTable from "components/customTemplate/table/BasicsTable"; //table+page组件
import SearchTop from "components/customTemplate/search/InputList"; //input搜索框组件
export default {
    components: {
        BasicsTable,
        SearchTop
    },
    data() {
        return {
            loading: false,
            formInline: {
                userID: "",
                userName: ""
            },
            page_data1: [],
            data1: [],
            data2: "",
			page: 1,
			  apiName: {
                count: "count",
                list: "list"
            },
            apiPort: {
                countPort: "systemLog/getByGradeNm/count",
                listPort: "systemLog/getByGradeNm/list",
                jsons:'getByGradeNm'
            },
            baseConfig: {
                data: [],
                page: 1, //默认第一页
                tots: 0, //总计多少条  默认0
                putData: {
                    pageSize: 10 //每页显示多少条  默认10条
                },
                columns: [
                    {
						title: "编号",
						id:'memberRates',
                        key: "memberRates",
                        align: "center"
                    },
                    {
						title: "登陆账户",
						id:'loggerName',
                        key: "loggerName",
                        align: "center"
                    },
                    {
						title: "操作IP",
						id:'levelString',
                        key: "levelString",
                        align: "center"
                    },
                    {
						title: "操作时间",
						id:'timestmp',
                        key: "timestmp",
                        align: "center"
                    },
                    {
						title: "操作模块",
						id:'callerFilename',
                        key: "callerFilename",
                        align: "ce2ter"
                    }
                ]
            }
        };
    },
    methods: {
        check() {
            alert(
                "商户账号：" +
                    this.formInline.userID +
                    "<br>" +
                    "商户ID：" +
                    this.formInline.userName
            );
        },
        educe() {
            this.$refs.table.exportCsv({
                filename: "原始数据",
                columns: this.columns1,
                data: this.video_list
            });
        },
        setInitPage(page) {
            console.log(this.page + "+++++");
            this.page_data1 = [];
            let data1 = this.data1;
            this.page = page;
            for (var i = (page - 1) * 10; i < (page - 1) * 10 + 10; i++) {
                if (i < data1.length) {
                    this.page_data1.push(this.data1[i]);
                }
            }
        }
    },
    created() {
        this.loading = true;

        // axios.get('http://localhost:9001/static/systemLogList.json')
        // .then(reponse=>{
        // 	this.loading = false;
        //     this.data1 = reponse.data.total;
        //     console.log(reponse.data.total[0].handle)
        //     this.setInitPage(1);
        // })
        // .catch(error=>{
        // 	alert('网络错误')
        // })
    }
};
</script>

<style scoped>
.table {
    margin-top: 30px;
}
.check {
    float: right;
    text-align: right;
}
</style>
