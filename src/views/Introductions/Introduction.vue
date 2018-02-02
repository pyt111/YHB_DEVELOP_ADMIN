<template>
	<div>
		<div ref="mian" >
			<Row>
				<Col :span="4">       
					<div class="search">
						<span>贷款名称：</span>
						<Input placeholder="请输入..." style="width: 100px"></Input>
					</div>							
				</Col>
				<Col :span="4">       
					<div class="search">
						<span>贷款人：</span>
						<Input placeholder="请输入..." style="width: 100px"></Input>
					</div>							
				</Col>
				<Col :span="4">       
					<div class="search">
						<span>贷款金额：</span>
						<Input placeholder="请输入..." style="width: 100px"></Input>
					</div>							
				</Col>
				<Col :span="4">       
					<div class="search">
						<span>利率：</span>
						<Input placeholder="请输入..." style="width: 100px"></Input>
					</div>						
				</Col>
				<Col :span="8">       
					<div class="search">
						<span>还款方式：</span>
						<Select v-model="status" clearable  style="width:150px">
							<Option value="fifteenOne">付息还本</Option>
							<Option value="fifteenTwo">等额本息</Option>
							<Option value="fifteenThree">到期还本息</Option>
							<Option value="fifteenFour">本息均摊，利息固定</Option>
						</Select>
					</div>						
					<div class="check">
						<Button type="info"  icon="ios-search" @click="check('formInline')">搜索</Button>				
					</div>							
				</Col>
				<Col :span="24" style="margin-top:20px;">
          <div class="search" style="width:60px">   
								<Icon type="plus-circled" color="#2db7f5"></Icon>
								<span>恢复</span>
					</div>
					<div class="delete"  @click="Delete" style="margin-left:80px;width:80px">
						<Icon type="ios-close" color="#2db7f5"></Icon>
						<span>彻底删除</span>						
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
	
	</div>
</template>


<script>
	import axios from 'axios';
	import hetong from './book/hetong';
	import yuqi from './book/yuqi'
	export default {
		components:{
              hetong,
			  yuqi
		},
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
					type: 'selection',
					title: '序号',
					align: 'center',
				},{
										
					title: '产品名称',
					key: 'userLevel',
					align: 'center',
					
				}, {
					title: '贷款企业',
					key: 'userId',
					align: 'center',
					className:'demo-table-info-column'
				}, {
					title: '贷款总额',
					key: 'userBalance',
					align: 'center',
				}, {
					title: '贷款周期（天）',
					key: 'fenRunBalance',
					align: 'center',
				}, {
					title: '贷款期数（期）',
					key: 'amountFrozen',
					align: 'center',
				}, {
					title: '贷款利率',
					key: 'name',
					align: 'center',
				}, {
					title: '同步到第三方',
					key: 'creationTime',
					align: 'center',
					render: (h, params) => {
                        if (params.row.creationTime == '已同步') {
							return h('span', {
								style:{
									color:'#9AD295'
								}
							},params.row.creationTime);
						}else if (params.row.creationTime == '未同步') {
							return h('span', {
								style:{
									color:'#ccc'
								}
							},params.row.creationTime);
						}
						else{
							return h('span', {
								style:{
									color:'red'
								}
							},params.row.creationTime);
						}
                            
                    }
				},{
					title: '还账方式',
					key: 'way',
					align: 'center',
				},{
					title: '投标状态',
					key: 'statuss',
					align: 'center',
				},{
                    title: '投标数',
					key: 'statussNum',
					align: 'center',
					render: (h, params) => {
						     if (params.row.statussNum == '满标') {
								return h('div', [
                                h('Icon', {
									
                                    props: {
										type: 'android-star',
										size:'15'
									},
									style:{
										color: '#2db7f5',
										marginRight:'5px'
									}
                                }),
                                h('strong', params.row.statussNum)
                            ]) 		
						}else if (params.row.statussNum == '半标') {
								return h('div', [
                                h('Icon', {
									
                                    props: {
										type: 'android-star-half',
										size:'15'
                                    },
									style:{
										color: '#2db7f5',
										marginRight:'5px'
									}
                                }),
                                h('strong', params.row.statussNum)
                            ])
						}else if(params.row.statussNum == '载标'){
							    return h('div', [
                                h('Icon', {
									
                                    props: {
										type: 'android-star-outline',
										size:'15'
                                    },
									style:{
										color: '#2db7f5',
										marginRight:'5px'
									}
                                }),
                                h('strong', params.row.statussNum)
                            ])
						}
                            
                     }
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
													 this.second(params.index)
												 }
											 }
										 },[
											 h('Icon',{
												 props:{
                                                    type:'loop'
												 },
												 style:{
													 marginRight:'5px',
													 color:'#69BEE9'
												 }
											 }),
											 h('span','同步')
											 
										 ]),
										
										 h('DropdownItem',{
											 nativeOn:{
												 click:()=>{
													 this.seven(params.index)
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
											 h('span','放款')
											 
										 ]),
										 h('DropdownItem',{
											 nativeOn:{
												 click:()=>{
													 this.DElete(params.index)
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
											 h('span','删除')
											 
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

