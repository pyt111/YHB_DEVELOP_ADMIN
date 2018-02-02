<template>
	<div class="animated fadeIn">

	    <h3>代理商</h3>
	    <Table :columns="columns1" :data="data1"></Table>
	</div>
</template>

<script>
	export default {
        data () {
            return {
            	 columns1:[
            	  {
            	  	title:'姓名',
            	  	key:'name'
            	  },{
            	  	title:'年龄',
            	  	key:'age'
            	  },{
            	  	title:'地址',
            	  	key:'address'
            	  },{
            	  	title:'操作',
            	  	key:'action',
            	  	width:150,
            	  	align:'center',
            	  	render:(h,params)=>{
            	  		return h('div',[
            	  		       h('Button',{
            	  		       	props:{
            	  		       		type:'primary',
            	  		       		size:'small'
            	  		       	},
            	  		       	style:{
            	  		       		marginRight:'5px'
            	  		       	},
            	  		       	on:{
            	  		       		click:()=>{
            	  		       			this.show(params.index)
            	  		       		}
            	  		       	}
            	  		       },'查看'),
            	  		        h('Button',{
            	  		        	props:{
            	  		        		type:'error',
            	  		        		size:'small'
            	  		        	},
            	  		        	on:{
            	  		        		click:()=>{
            	  		        			this.remove(params.index)
            	  		        		}
            	  		        	}
            	  		        },'删除')
            	  		   ])
            	  	}
            	  }
            	],
            	data1:[
            	  {
            	  	name:'古言',
            	  	age:18,
            	  	address:'上海'
            	  },{
            	  	name:'古古',
            	  	age:22,
            	  	address:'毕节'
            	  },{
            	  	name:'言言',
            	  	age:33,
            	  	address:'上海'
            	  },{
            	  	name:'大家',
            	  	age:44,
            	  	address:'贵阳'
            	  },{
            	  	name:'古言',
            	  	age:18,
            	  	address:'上海'
            	  }
            	]
        　　　　　　　　}
      },
      methods:{
      	show(index){
      		console.log(this.data1[index].name)
      		this.$Modal.info({
      			title:'用户信息',
      			content:'姓名：'+this.data1[index].name+'<br>'+'年龄：'+this.data1[index].age+'<br>'+'地址：'+this.data1[index].address
      		})
      	},
        remove (index){
        	this.data1.splice(index,1)
        }
      }
       
    }
</script>

<style>
</style>