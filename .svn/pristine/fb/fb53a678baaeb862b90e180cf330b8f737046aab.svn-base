<template>
<div>
    <Button @click="modal2 = true">导出</Button>
    <Modal v-model="modal2" width="360" :mask-closable="false">
        <p slot="header" style="color:#f60;">
            <Icon type="information-circled"></Icon>
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
	<div>{{passWrod}}</div>
	</div>
</template>
<script>
    export default {
        data () {
            return {
                modal2: false,
				modal_loading: false,
				passWrod:''
            }
        },
        methods: {
            del () {
				this.modal_loading = true;
				
                
				if (this.passWrod == "123456") {
					setTimeout(() => {
						this.modal_loading = false;
						this.modal2 = false;
						console.log("成功")
					}, 2000);
				}else{
					setTimeout(() => {
						this.modal_loading = false;
						this.modal2 = false;
						console.log("失败")
					}, 2000);
				}
            }
        }
    }
</script>
