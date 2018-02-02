<template>
  <div>
    <div style="width:80%;margin-left:10%;background-color: #fff;">
        <Form ref="formValidate" label-position="top" :model="formValidate" :rules="ruleValidate"  >
            <Row style="border-bottom:1px solid #ccc;height:100px">
                <Col span="24">                   
                    <FormItem label="成交服务费:" prop="twenty_five" style="margin-top:20px;">           
                        <Input v-model="formValidate.twenty_five" number placeholder="请输入服务费" style="width:300px"></Input> 元    
                    </FormItem>
                </Col>
            </Row>
            <Row style="border-bottom:1px solid #ccc;height:100px">
                <Col span="24">                   
                    <FormItem label="借款中管理费:" prop="twenty_six" style="margin-top:20px;">           
                        <Input v-model="formValidate.twenty_six" number  placeholder="管理费=本金总额+管理费率 0即不收取" style="width:300px"></Input> 元    
                    </FormItem>
                </Col>
            </Row>
            <Row style="border-bottom:1px solid #ccc;height:100px">
                <Col span="24">                   
                    <FormItem label="投资者管理费:" prop="twenty_seven" style="margin-top:20px;">           
                        <Input v-model="formValidate.twenty_seven" number placeholder="管理费=投资总额+管理费率 0即不收取" style="width:300px"></Input> 元    
                    </FormItem>
                </Col>
            </Row>
            <Row style="border-bottom:1px solid #ccc;height:100px">
                <Col span="24">                   
                    <FormItem label="投资人返利:" prop="twenty_eight" style="margin-top:20px;">           
                        <Input v-model="formValidate.twenty_eight" number placeholder="返利金额=投标金额+返利百分比 【需满标】" style="width:300px"></Input> 元    
                    </FormItem>
                </Col>
            </Row> 
            <Row style="margin-top:20px">
                <Col span="8">
                     <FormItem>
                        <Button type="primary" v-if="newId == 0" @click="handleSubmit('formValidate')">新增</Button>
                        <Button type="success" v-else @click="success">通过</Button>
                        <Button type="ghost" v-if="newId == 0" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                        <Button type="error" v-else @click="error" style="margin-left: 8px">驳回</Button>
                    </FormItem>
                </Col>
            </Row>             
        </Form>
        
    </div>
    <div style="height:850px;background-color: #EDEEF2;"></div>
    </div>
</template>
<script>
    export default {
        props:{
            newId:{
                type:String,
                required:true
            }
        },
        data () {
            const validateNum = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('输入框不能为空'));
                }                
                if (!Number.isInteger(value)) {
                    return callback(new Error('请输入数字格式'));
                } 
                callback()
                
            };
            return {
                formValidate: {
                    twenty_five: '',
                    twenty_six: '',
                    twenty_seven:'',
                    twenty_eight:'',
                   
                },
                ruleValidate: {
                    twenty_five: [
                        { validator: validateNum, trigger: 'blur' }
                    ],
                    twenty_six: [
                        { validator: validateNum, trigger: 'blur' }
                    ],
                    twenty_seven:[
                        { validator: validateNum, trigger: 'blur' }
                    ],
                    twenty_eight:[
                        { validator: validateNum, trigger: 'blur' }
                    ]
                    
                }
            }
        },
        methods: {
            handleSubmit (name) {
                console.log(this.formValidate.twenty_eight);
                
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            success(){
                   console.log(this.newId)
            },
            error(){
                console.log('审核失败')
            }
        }
    }
</script>
<style>
   .ss {
       background-color: #dcdcdc;
   }
</style>



