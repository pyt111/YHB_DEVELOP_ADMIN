<template>
    <div>
        <Button type="primary" @click="show = !show">点我点我</Button>
        <transition name="fade">
        	<p v-if="show">hello</p>
        </transition>
    </div>
</template>
<script>
    export default {
    	data(){
    		return {
    			show: true
    		}
    	},
        methods: {
            handleSpinShow () {
                this.$Spin.show();
                setTimeout(() => {
                    this.$Spin.hide();
                }, 3000);
            }
        }
    }
</script>
<style>
    .fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
