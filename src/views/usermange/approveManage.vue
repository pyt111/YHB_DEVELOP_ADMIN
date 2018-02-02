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
                    <span>理财师级别：</span>
                    <Select v-model="level" clearable size="small" style="width:100px">
                        <Option value="levelAll">全部</Option>
                        <Option value="levelOne">一级</Option>
                        <Option value="levelTwo">二级</Option>
						<Option value="levelThree">星级</Option>
                    </Select>																					
				</Col>
				<Col :span="4" >  
                    <span>分润余额：</span>
                    <Select v-model="Ymoney" clearable size="small" style="width:100px">
                        <Option value="YmoneyAll">全部</Option>
                        <Option value="YmoneyYes">有</Option>
                        <Option value="YmoneyNo">无</Option>
                    </Select>																					
				</Col><Col :span="4" >  
                    <span>时间搜索：</span>
                    <Select v-model="Time" clearable size="small" style="width:100px">
                        <Option value="TimeAll">全部</Option>
                        <Option value="TimeYes">有</Option>
                        <Option value="TimeNo">无</Option>
                    </Select>																					
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
					title: '理财师级别',
					key: 'userBalance',
					align: 'center',
				}, {
					title: '上级',
					key: 'fenRunBalance',
					align: 'center',
				}, {
					title: '下级总数（人）',
					key: 'fenRunBalance',
                    align: 'center',
                    className:'demo-table-info-column'
				}, {
					title: '分润余额',
					key: 'idNumber',
					align: 'center',
				}, {
					title: '申请时间',
					key: 'idNumber',
					align: 'center',
				}, {
					title: '备注',
					key: 'registrationWay',
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
    
</style>

