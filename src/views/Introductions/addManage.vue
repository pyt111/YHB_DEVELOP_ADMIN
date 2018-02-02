<template>
    <div class="auditmanage">
		<Button type="info" @click="back">
			<Icon type="ios-undo"></Icon>
			返回列表
		</Button>
		<Tabs value="name1" class="tab_mian">
			<TabPane label="贷款基本信息" name="name1" >
				<list-one :newId="newId"></list-one>
			</TabPane>
			<TabPane label="相关参数" name="name2">
				<list-two :newId="newId"></list-two>
			</TabPane>
			<TabPane label="相关资料" name="name3">
				<list-three :newId="newId"></list-three>
			</TabPane>
		</Tabs>
	</div>
</template>
<script>
	import listOne from './book/listOne';
	import listTwo from './book/listTwo';
	import listThree from './book/listThree';
    export default {
        components:{
			  listOne,
			  listTwo,
			  listThree
		},
		data(){
             return {
				 newId:this.$route.params.uuID
			 }
		},
		mounted(){
			// this.newId = this.$route.params.id
			console.log(this.newId)
			
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
    }
</script>
<style>
       .tab_mian{
		   margin-top: 20px;
		   width: 100%;
		   background-color: #fff;
	   }
	   .tab_mianOne{
		   background-color: #fff;
	   }
	   .ivu-tabs-nav-scroll{
		   background-color: #fff;
		   border-bottom: 1px solid red
	   }
</style>

