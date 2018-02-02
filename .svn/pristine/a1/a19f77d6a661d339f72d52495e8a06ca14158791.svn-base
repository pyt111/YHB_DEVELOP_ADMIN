<template>
	<div>
		<div ref="mian" >
			<Row>
                <Col :span="4" >    
					<span>手机号：</span>
					<Input placeholder="请输入..." style="width: 100px" size="small"></Input>				
				</Col>
                <Col :span="4" >    
					<span>实名：</span>
					<Input placeholder="请输入..." style="width: 100px" size="small"></Input>				
				</Col>
				<Col :span="4" >  
					<span>管理员：</span>
                    <Input placeholder="请输入..." style="width: 100px" size="small"></Input>						
				</Col>
				<Col :span="4" >  
					<span>银行卡号：</span>
                    <Input placeholder="请输入..." style="width: 100px" size="small"></Input>						
				</Col>
                <Col :span="4"> 
				    <span>绑卡类型：</span>
                    <Select v-model="Ymoney" clearable size="small" style="width:100px">
                        <Option value="YmoneyAll">全部</Option>
                        <Option value="YmoneyYes">环迅</Option>
                        <Option value="YmoneyNo">富有</Option>
                    </Select>
                </Col>
                <Col :span="2"> 
					<Button type="info" size="small" icon="ios-search" @click="check('formInline')">搜索</Button>						
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
				<Col :span="8" style="margin-top: 10px;" class="page">	
                    <p >共{{this.data1.length}}记录，每页显示10条，共{{Math.ceil(this.data1.length/10)}}页</p>		
                </Col>
                <Col :span="16" style="text-align: right; margin-top: 10px;" >		  
					<Page :total="this.data1.length" :current="1"  show-elevator @on-change="setInitPage"></Page>
				    
                </Col>
			</Row>
		</div>
		</div>
        
	</div>
</template>


<script>
	import axios from 'axios';
	export default {
		
		data() {
			return {
				loading:false,
                valueDate:'',
				selItem:[],
                Ymoney:'',
                vip:'',
				status:"",
				columns1: [
				{					
					title: '序号',
					key: 'userLevel',
					align: 'center'
					
				}, {
					title: '管理员',
					key: 'userId',
					className:'demo-table-info-column'
				}, {
					title: '姓名',
					key: 'name'
				}, {
					title: '手机号',
					key: 'fenRunBalance',
					align: 'center',
				},{
					title: '身份证号',
					key: 'amountFrozen'
				},{
					title: '银行卡号',
					key: 'amountFrozen',
                    className:'demo-table-info-column'
				},{
					title: '银行名称',
					key: 'amountFrozen'
				},{
					title: '开户网点',
					key: 'amountFrozen'
				},{
					title: '绑卡类型',
					key: 'amountFrozen'
				},{
					title: '绑卡时间',
					key: 'amountFrozen'
				},{
					title: '状态',
					key: 'statuss',
					render:(h,params)=>{
						if (params.row.statuss == "待审核") {
							return h('div',{
								style:{
									color:"#000"
								}
							},params.row.statuss)
						}else{
							return h('div',{
								style:{
                                    color:"red"
                                }
							},params.row.statuss)
						}
					}
				},{
					title: '操作',
					key: 'action',
					width: 150,
					align:'center',
					render: (h, params) => {
						return h('div',[
								 h('Dropdown',{
									 placement:'bottom-end',
									 style:{
										 align:'left'
									 }
								 },[
									 h('i',{
										 
										 class:{
											'auditmanage_shezhi':true,
											'icon':true,
											'ivu-icon':true,
											'ivu-icon-gear-b':true
										 }
									 }),
                                     h('DropdownMenu',{
										  slot:"list"
									 },[
										h('DropdownItem',{
											 nativeOn:{
												 click:()=>{
													 this.first(params.index)
												 }
											 }
										 },[
											 h('Icon',{
												 props:{
                                                    type:'ios-close'
												 },
												 style:{
													 marginRight:'5px',
													 color:'#69BEE9'
												 }
											 }),
											 h('span','禁用')
											 
                                         ]),
                                         h('DropdownItem',{
											 nativeOn:{
												 click:()=>{
													 this.second(params.index)
												 }
											 }
										 },[
											 h('Icon',{
												 props:{
                                                    type:'checkmark-circled'
												 },
												 style:{
													 marginRight:'5px',
													 color:'#69BEE9'
												 }
											 }),
											 h('span','修改')
											 
										 ]),
										 h('DropdownItem',{
											 nativeOn:{
												 click:()=>{
													 this.five(params.index)
												 }
											 }
										 },[
											 h('Icon',{
												 props:{
                                                    type:'trash-a'
												 },
												 style:{
													 marginRight:'5px',
													 color:'#69BEE9'
												 }
											 }),
											 h('span','驳回')
											 
                                         ])
									 ])
								 ])
								
						])
					}
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
			check(){
				alert("商户账号："+this.status)
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
			}
		},
		created(){			
			this.loading = true;			
			axios.get('http://localhost:9001/static/loanmanage.json')
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
    
   .page{
       height: 40px;
   }
   .page p{
       border-left: 3px solid #2db7f5;
       height: 20px;
       margin-top: 10px;
       padding-left: 10px;
   }
  
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
    .delete{
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
	.wan>.ivu-select-dropdown{
		 top:50px !important;
		 left: 30px !important;
	}
    .page1>.ivu-page-total{
        border:1px solid red
    }
    
</style>

