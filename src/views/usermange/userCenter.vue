<template>
	<div>
		<div ref="mian" >
			<Row>
                <Col :span="3" >    
					<span>实名：</span>
					<Input placeholder="请输入..." style="width: 100px" size="small"></Input>				
				</Col>
				<Col :span="3" >  
					<span>手机号：</span>
					<Input placeholder="请输入..." style="width: 100px" size="small"></Input>						
				</Col>
                <Col :span="3" >  
					<span>推荐人：</span>
					<Input placeholder="请输入..." style="width: 100px" size="small"></Input>						
				</Col>
				<Col :span="3" >  
                    <span>余额：</span>
                    <Select v-model="Ymoney" clearable size="small" style="width:100px">
                        <Option value="YmoneyAll">全部</Option>
                        <Option value="YmoneyYes">有</Option>
                        <Option value="YmoneyNo">无</Option>
                    </Select>																					
				</Col>
                <Col :span="4">  
                    <span>会员等级：</span>
                    <Select v-model="vip" clearable size="small" style="width:100px">
                        <Option value="vipAll">全部</Option>
                        <Option value="vipOne">一级会员</Option>
                        <Option value="vipTwo">二级会员</Option>
                        <Option value="vipNo">非会员</Option>
                    </Select>																					
				</Col>
                <Col :span="6"> 
				<span>注册时间：</span>
					<Date-picker v-model="valueDate" format="yyyy/MM/dd" size='small' type="daterange" placeholder="选择日期" style="width: 200px"></Date-picker>					
				</Col>
                <Col :span="2"> 
					<Button type="info" size="small" icon="ios-search" @click="check('formInline')">搜索</Button>						
				</Col>
				
				<Col :span="24" style="margin-top:20px;">					
					<div class="search" style="width:60px">
						<div class="search" style="width:100px" @click="modal2 = true">
                            <Icon type="share" color="#2db7f5" size="16"></Icon>
							<strong>导出</strong>             
					    </div>
					</div>						
					<div class="delete" style="margin-left:60px;width:60px">
						<router-link :to="{name:'新增标的管理',params:{uuID:'0'}}" >     
							<Icon type="plus-circled" color="#2db7f5"></Icon>
							<strong>新增</strong>
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
				<Col :span="8" style="margin-top: 10px;" class="page">	
                    <p >共{{this.data1.length}}记录，每页显示10条，共{{Math.ceil(this.data1.length/10)}}页</p>		
                </Col>
                <Col :span="16" style="text-align: right; margin-top: 10px;" >		  
					<Page :total="this.data1.length" :current="1"  show-elevator @on-change="setInitPage"></Page>
				    
                </Col>
			</Row>
		</div>
		
		<Modal v-model="modal2" width="360" :mask-closable="false">
            <p slot="header" style="color:#19be6b">
                <Icon type="share"></Icon>
                <span>导出</span>
            </p>
            <div>
                <p>导出密码 ：</p>
                <Input v-model="passWrod" placeholder="请输入..." style="width: 200px" size="small"></Input>
            </div>
            <div slot="footer" style="text-align:center">
                <Button type="info" size="large"  :loading="modal_loading" @click="del">确定</Button>
            </div>
        </Modal>
		</div>
        
	</div>
</template>


<script>
	import axios from 'axios';
	export default {
		
		data() {
			return {
                modal2: false,
                modal_loading: false,
                passWrod: "",
				loading:false,
                valueDate:'',
				selItem:[],
                Ymoney:'',
                vip:'',
				status:"",
				columns1: [
				{
					type: 'selection',
					align: 'center',
				},{
										
					title: '实名',
					key: 'userLevel',
					align: 'center',
					className:'demo-table-info-column'
					
				}, {
					title: '手机',
					key: 'userId',
					align: 'center'
				}, {
					title: '理财师',
					key: 'userBalance',
					align: 'center',
				}, {
					title: '会员等级',
					key: 'fenRunBalance',
					align: 'center',
				}, {
					title: '推荐人',
					key: 'amountFrozen',
                    align: 'center',
                    className:'demo-table-info-column'
				}, {
					title: '贷款利润',
					key: 'name',
					align: 'center',
				}, {
					title: '累计充值（元）',
					key: 'idNumber',
					align: 'center',
				}, {
					title: '冻结金额（元）',
					key: 'registrationWay',
					align: 'center',
				},{
					title: '余额',
					key: 'way',
					align: 'center',
				},{
					title: '注册途径',
					key: 'way',
					align: 'center',
				},{
					title: '创建时间',
					key: 'way',
					align: 'center',
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
                                                    type:'checkmark-circled'
												 },
												 style:{
													 marginRight:'5px',
													 color:'#69BEE9'
												 }
											 }),
											 h('span','编辑')
											 
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
                                                    type:'loop'
												 },
												 style:{
													 marginRight:'5px',
													 color:'#69BEE9'
												 }
											 }),
											 h('span','前台')
											 
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
											 
										 ]),
										 h('DropdownItem',{
											 nativeOn:{
												 click:()=>{
													 this.three(params.index)
												 }
											 }
										 },[
											 h('Icon',{
												 props:{
                                                    type:'close-round'
												 },
												 style:{
													 marginRight:'5px',
													 color:'#69BEE9'
												 }
											 }),
											 h('span','拉黑')
											 
										 ]),
										 h('DropdownItem',{
											 nativeOn:{
												 click:()=>{
													 this.four(params.index)
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
											 h('span','分享金追加')
											 
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
                                                    type:'checkmark-circled'
												 },
												 style:{
													 marginRight:'5px',
													 color:'#69BEE9'
												 }
											 }),
											 h('span','红包追加')
											 
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
            del() {
            this.modal_loading = true;
            setTimeout(() => {
                if (this.passWrod == "123456") {
                this.modal_loading = false;
                this.modal2 = false;
                this.$refs.table.exportCsv({
                    filename: "当前表格数据"
                });
                } else {
                this.modal_loading = false;
                this.modal2 = false;
                this.$Message.error({
                    content: "密码错误"
                });
                }
            }, 2000);
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

