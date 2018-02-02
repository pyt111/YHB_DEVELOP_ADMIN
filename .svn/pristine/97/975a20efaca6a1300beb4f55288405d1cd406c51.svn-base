<template>
	<div>
		<div ref="mian" >
			<Row>
				<Col :span="24">       
					<div class="search">
						<span>手机号 ：</span>
						<Input placeholder="请输入..." style="width: 100px"></Input>
					</div>
					<div class="search" style="margin-left:10px">
						<span>兑换码 ：</span>
						<Input placeholder="请输入..." style="width: 100px"></Input>
					</div>
					<div class="search" style="margin-left:10px">
						<span>兑换周期 ：</span>
						<DatePicker v-model="valueTime" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
					</div>						
					<div class="check" style="margin-left:10px">
						<Button type="info"  icon="ios-search" @click="check('formInline')">搜索</Button>				
					</div>							
				</Col>
			</Row>
			
			<Row class="table" >		
				<Col :span="24">
					<Table  :columns="columns1" :data="page_data1" ref='table' @on-selection-change='selChange'></Table>
					<div style="position:absolute;top:0px;width:100%;height:100%;display: flex;
									align-items: center;
									justify-content: center;background: rgba(210, 216, 222, 0.5);" v-if="loading">
						<Spin size="large"></Spin>
						<h6 style="color:#2d8cf0;margin-top:10px;">正在获取数据...</h6>
					</div>
				</Col>
				<Col :span="24" style="text-align: right;margin-top: 10px;">			  
					<Page :total="this.data1.length" :current="1" show-total show-elevator @on-change="setInitPage"></Page>
				</Col>				
			</Row>
		</div>
		<div style="height:100px"></div>
		
	</div>
</template>


<script>
	import axios from 'axios';

	export default {
		
		data() {
			return {
				loading:false,
                valueTime:'',
				selItem:[],
				status1:[],
				status:"",
				columns1: [ 
				{
					title:'产品ID',
					key: 'productID',
					align:'center'
				},{
										
					title: '产品名称',
					key: 'userLevel',
					align: 'center',
					
				},{					
					title: '产品状态',
					key: 'status',
					align: 'center',
					
				},{
										
					title: '账号',
					key: 'UUID',
					align: 'center',
					
				},{
										
					title: '姓名',
					key: 'name',
					align: 'center',
					
				},{
										
					title: '兑换码',
					key: 'CDKEY',
					align: 'center',
					
				},{
										
					title: '兑换时间',
					key: 'CDTIME',
					align: 'center',
					
				}],
				page_data1: [],
				data1:[],
				page:1　　　　　　　　
			}
		},
		mounted() {
			
		},
		methods: {
			first(index){
                console.log(this.data1[index].uuID)
				this.$router.push({
					path:'addManage',
					name:'新增标的管理',
					params:{
						uuID:this.data1[index].uuID
					}
				})
			},
			selChange(sel){
                    this.selItem = sel;
			},
			five(){
                this.week = true
			},
			six(){
                this.isOk = true
			},
			hide(){
				this.isOk = false;
				this.week = false;
				
			},
			Delete(){
				let arr=[];
				for(let i=0; i<this.selItem.length;i++){
					arr.push(this.selItem[i].userBalance);
					
				}
				this.$Modal.info({
						title: '用户信息',
						content: '确认删除：' + arr + "?"  
					})
				console.log(arr)
			},
			DElete(index){
                this.page_data1.splice(index, 1);
				this.data1.splice(index, 1);
				this.setInitPage(1);
			},
			check(){
				alert("商户账号："+this.status)
			},
			educe(){				
				this.$refs.table.exportCsv({
					filename: '原始数据',
					columns: this.columns1,
					data: this.video_list
				});				
			},
			setInitPage(page) {
				// console.log(this.page+"+++++")
				this.page_data1 = [];
				let data1 = this.data1;	
				this.page = page; 				
				for(var i = (page - 1) * 10; i < (page - 1) * 10 + 10; i++) {
					if(i < data1.length) {						
						this.page_data1.push(this.data1[i]);						
					}
				}
			},
			// 合同日期
			changeDate(daterange){
				this.calueDate = daterange;
				console.log(this.calueDate)
			}
		},
		created(){			
			this.loading = true;			
			axios.get('http://localhost:9001/static/home3.json')
			.then(reponse=>{
				this.loading = false;
				var res = reponse.data.total
				this.data1 = res;
	            this.setInitPage(1);
			})
			.catch(error=>{
				// alert('网络错误')
			})
			
		}

	}
</script>

<style scoped>

	/* 头部 */
	.table{
		margin-top: 30px;
	}
	.search{
		float: left;
	}
	.check{
		float: left;
		margin-left: 20px;
	}
    
	
	
</style>
<style>
body,
	html {
	width: 100%;
	height: 100%;
	background-color: #EDEEF2;
	}
    .ivu-table td.demo-table-info-column{    
        color: #2db7f5;
    }
	
	.auditmanage_shezhi{
		font-size:16px
	}

	.auditmanage_shezhi:hover{
		color: #FE8320
	}
	.ivu-dropdown-menu {
		min-width: 100px;
		text-align: left;
	}

    
</style>

