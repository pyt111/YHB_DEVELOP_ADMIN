<template>
	<div>
		<div ref="mian" >
			<Row>
				<Col :span="8">       
					<div class="search">
						<span>发布周期 ：</span>
						<Input placeholder="请输入..." style="width: 100px"></Input>
					</div>						
					<div class="check">
						<Button type="info"  icon="ios-search" @click="check('formInline')">搜索</Button>				
					</div>							
				</Col>
				<Col :span="24" style="margin-top:20px;">
					<div class="search" style="width:100px">
						<router-link :to="{name:'新增标的管理',params:{uuID:'0'}}" >     
							<Icon type="plus-circled" color="#2db7f5"></Icon>
							<span>新增产品</span>
						</router-link> 
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
				isOk:false,
			    week:false,
				loading:false,
                valueDate:'',
				selItem:[],
				status1:[],
				status:"",
				columns1: [
                {					
                    type: 'index',
                    title:'序号',
					align: 'center',
				}, 
				{
					title:'产品ID',
					key: 'productID',
				},{
										
					title: '产品名称',
					key: 'userLevel',
					align: 'center',
					
				},{					
					title: '产品状态',
					key: 'status',
					align: 'center',
					
				},{
                    title: '隐藏',
					key: 'hide',
					align: 'center',
					render: (h, params) => {
                        if (params.row.hide == '是') {
							return h('span', {
								style:{
									color:'red'
								}
							},params.row.hide);
						}else{
							return h('span', {
								style:{
									color:'#2db7f5'
								}
							},params.row.hide);
						}
                            
                    }
                },{
										
					title: '发布时间',
					key: 'time',
					align: 'center',
					
				},
                {
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
                                                    type:'plus-circled'
												 },
												 style:{
													 marginRight:'5px',
													 color:'#69BEE9'
												 }
											 }),
											 h('span','添加商户兑换码')
											 
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
                                                    type:'clipboard'
												 },
												 style:{
													 marginRight:'5px',
													 color:'#69BEE9'
												 }
											 }),
											 h('span','查看兑换码详情')
											 
										 ]),
										
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
			second(index){
                this.$router.push({
					path:'home3',
					name:'兑换码详情',
					params:{
						uuID:this.data1[index].uuID
					}
				})
			},
			check(){
				alert("商户账号："+this.status)
			},
			selChange(sel){
                    this.selItem = sel;
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
			axios.get('http://localhost:9001/static/loanRecords.json')
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

