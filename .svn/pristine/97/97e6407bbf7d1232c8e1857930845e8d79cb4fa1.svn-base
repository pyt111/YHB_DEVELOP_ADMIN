<template>
	<div>
		<p>风控管理</p>
		<Row>
			<Form ref="formInline" :model="formInline"  inline>
		        <FormItem prop="userID">		           
					<div class="search">
						<p>开始时间 —— 结束时间</p>
						<DatePicker :value="formInline.time" @on-change="handleChange" type="daterange" placeholder="Select date" style="width: 200px"></DatePicker>
					</div>						
		        </FormItem>
		        <FormItem prop="userName">		            
				    <div class="search">
						<p>真实姓名：</p>
						<Input v-model="formInline.userName" placeholder="输入真实姓名" style="width: 150px;"></Input>
					</div>						
		        </FormItem>
		        <FormItem prop="userName">		            
				    <div class="search">
						<p>身份证号：</p>
						<Input v-model="formInline.numberID" placeholder="输入真实姓名" style="width: 150px;"></Input>
					</div>						
		        </FormItem>
		        <FormItem prop="userName">		            
				    <div class="search">
						<p>商户级别：</p>
						<Select v-model="formInline.model1" clearable style="width:150px">
					        <Option v-for="item in formInline.cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
					    </Select>
					</div>						
		        </FormItem>
		        <FormItem class="check">
		            <div class="educe">
		            	<Button type="info" style="width: 100px;" @click="check('formInline')">查询</Button>
						<Button type="primary" style="width: 100px;" @click="educe">导出</Button>					
		            </div>						
		        </FormItem>
		    </Form>
		</Row>
	
		<Row class="table">		
			<Col :span="24">
			   <Table  :columns="columns1" :data="page_data1" ref='table'></Table>
			   <div style="position:absolute;top:0px;width:100%;height:100%;display: flex;
                            align-items: center;
                            justify-content: center;background: rgba(210, 216, 222, 0.5);" v-if="loading">
					<Spin size="large"></Spin>
					<h6 style="color:#2d8cf0;margin-top:10px;">正在获取数据...</h6>
				</div>
			</Col>
			<Col :span="24" style="text-align: center;margin-top: 10px;">			  
			   <Page :total="this.data1.length" show-total show-elevator @on-change="setInitPage"></Page>
			</Col>
		</Row>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				loading:false,
				
				formInline: {
					time:'',
                    userID: '',
                    userName: '',
                    numberID:'',
                     cityList: [
	                    {
	                        value: '一级销商',
	                        label: '一级销商'
	                    },
	                    {
	                        value: '二级销商',
	                        label: '二级销商'
	                    },
	                    {
	                        value: '星级商户',
	                        label: '星级商户'
	                    },
	                    {
	                        value: '普通商户',
	                        label: '普通商户'
	                    },
	                    
	                ],
	                model1: ''
                },
                //选择框
               
                //用户别表
				columns1: [{
					title: '用户级别',
					key: 'userLevel',
					align: 'center',
				}, {
					title: '商户账号',
					key: 'userId',
					align: 'center',
				}, {
					title: '商户余额',
					key: 'userBalance',
					align: 'center',
				}, {
					title: '分润余额',
					key: 'fenRunBalance',
					align: 'center',
				}, {
					title: '冻结金额',
					key: 'amountFrozen',
					align: 'center',
				}, {
					title: '真实姓名',
					key: 'name',
					align: 'center',
				}, {
					title: '身份证号',
					key: 'idNumber',
					align: 'center',
				}, {
					title: '注册途径',
					key: 'registrationWay',
					align: 'center',
				}, {
					title: '创建时间',
					key: 'creationTime',
					align: 'center',
				}, {
					title: '操作',
					key: 'action',
					width: 150,
					align: 'center',
					render: (h, params) => {
						return h('div', [
							h('Button', {
								props: {
									type: 'primary',
									size: 'small'
								},
								style: {
									marginRight: '5px'
								},
								on: {
									click: () => {
										this.show(params.index)
									}
								}
							}, '查看'),
							h('Button', {
								props: {
									type: 'error',
									size: 'small'
								},
								on: {
									click: () => {
										this.remove(params.index)
									}
								}
							}, '删除')
						])
					}
				}],
				page_data1: [],
				data1:[]　　　　　　　　
			}
		},
		methods: {
			show(index) {
				console.log(this.data1[index].name)
				this.$Modal.info({
					title: '用户信息',
					content: '商户账户：' + this.data1[index].userId + '<br>' + '名字：' + this.data1[index].name + '<br>' 
				})
			},
			remove(index) {
				this.page_data1.splice(index, 1);
				this.data1.splice(index, 1);
				this.setInitPage(1);
			},
			check(){
				this.$Modal.info({
					title: '用户信息',
					content: "起始日期："+this.formInline.time+"<br>"+
					"商户ID："+this.formInline.userName+"<br>"+
					"身份证号:"+this.formInline.numberID+"<br>"+
					"级别:"+this.formInline.model1 
					})

			},
			educe(){				
				this.$refs.table.exportCsv({
					filename: '原始数据',
					columns: this.columns1,
					data: this.video_list
				});				
			},
			setInitPage(page) {
				console.log(page)
				this.page_data1 = [];
				let data1 = this.data1;				
				for(var i = (page - 1) * 10; i < (page - 1) * 10 + 10; i++) {
					if(i < data1.length) {						
						this.page_data1.push(this.data1[i]);						
					}
				}
			},
			handleChange (date) {
                this.formInline.time = date;
            },
		},
		created(){			
			this.loading = true;
			axios.get('http://localhost:9001/static/loanmanage.json')
			.then(reponse=>{
				console.log(reponse)
				this.loading = false;
	            this.data1 = reponse.data.total;
	            this.setInitPage(1);
			})
			.catch(error=>{
				alert('网络错误')
			})
			
		}

	}
</script>

<style scoped>

	.table{
		margin-top: 30px;
		
	}
	.search{
		display: block;
	}
	.check{
		float: right;
		text-align: right;
	}
	.educe{
		height: 70px;
		line-height: 70px;
	}
</style>