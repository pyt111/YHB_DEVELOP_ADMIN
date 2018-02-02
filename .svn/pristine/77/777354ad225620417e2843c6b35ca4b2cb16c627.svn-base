<template>
	<div>
		<div ref="mian" >
			<Row>
				<Col :span="4" >  
					<span>手机号：</span>
					<Input placeholder="请输入..." style="width: 100px" size="small"></Input>						
				</Col>
				<Col :span="3" >    
					<span>实名：</span>
					<Input placeholder="请输入..." style="width: 100px" size="small"></Input>				
				</Col>
				<Col :span="4" >  
                    <span>级别：</span>
                    <Select v-model="level" clearable size="small" style="width:100px">
                        <Option value="levelAll">全部</Option>
                        <Option value="levelOne">一级</Option>
                        <Option value="levelTwo">二级</Option>
                    </Select>																					
				</Col>
				<Col :span="4" >  
                    <span>有下级：</span>
                    <Select v-model="Ymoney" clearable size="small" style="width:100px">
                        <Option value="YmoneyAll">全部</Option>
                        <Option value="YmoneyYes">是</Option>
                        <Option value="YmoneyNo">否</Option>
                    </Select>																					
				</Col><Col :span="4" >  
                    <span>时间搜索：</span>
                    <Select v-model="Time" clearable size="small" style="width:100px">
                        <Option value="TimeAll">全部</Option>
                        <Option value="TimeYes">购买时间</Option>
                        <Option value="TimeNo">到期时间</Option>
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
				selItem:[],
				Ymoney:'',
				level:'',
				Time:'',
				status:"",
				columns1: [
				{   
					title:'序号',
					key: 'uuID',
					align: 'center',
				},{
										
					title: '实名',
					key: 'userLevel',
					align: 'center',
					className:'demo-table-info-column'
					
				}, {
					title: '手机号',
					key: 'userId',
					align: 'center'
				}, {
					title: '级别',
					key: 'userBalance',
					align: 'center',
				}, {
					title: '上级',
					key: 'fenRunBalance',
					align: 'center',
					className:'demo-table-info-column'
				}, {
					title: '下级总数（人）',
					key: 'fenRunBalance',
                    align: 'center'
				}, {
					title: '购买时间',
					key: 'idNumber',
					align: 'center',
				}, {
					title: '到期时间',
					key: 'idNumber',
					align: 'center',
				}, {
					title: '状态',
					key: 'zhuang',
					align: 'center',
					render:(h,params)=>{
						if (params.row.zhuang == "已过期") {
							return h('div',{
								style:{
									color:"red"
								}
							},params.row.zhuang)
						}else{
							return h('div',{
								style:"#000"
							},params.row.zhuang)
						}
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
    
</style>

