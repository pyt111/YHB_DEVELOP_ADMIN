<template>
  <div>
    <div style="width:80%;margin-left:10%;background-color: #fff;">
        <Form ref="formValidate" label-position="top" :model="formValidate" :rules="ruleValidate"  >
            <Row >
                <Col span="10" style="height:100px;">                   
                    <FormItem label="借款签约合同:" prop="twenty_nine" style="margin-top:20px;">           
                        <Input  v-model="formValidate.twenty_nine" number placeholder="暂无借款签约合同" style="width:300px"></Input>                                      
                    </FormItem>
                </Col>
                <Col span="8">
                    <div style="height:100px;line-height:115px">
                        
                        <Upload
                            action="//jsonplaceholder.typicode.com/posts/"
                            :on-success="handleSuccess"
                            :show-upload-list="false"
                            :format="['txt','word']">
                            <Button type="info" >请上传文件</Button>
                        </Upload>
                    </div>                
                </Col>
                <Col span="24">
                    <div style="color:#5cadff;width:100%">预览</div>
                </Col>

            </Row>
            <Row style="height:100px">
                <Col span="24">                   
                    <FormItem label="借款企业公章:" prop="thirty" style="margin-top:20px;">           
                        <Upload 
                            ref="upload"
                            :show-upload-list="false"
                            :format="['jpg','jpeg','png']"
                            :max-size="2048"
                            type="drag"
                            action="//jsonplaceholder.typicode.com/posts/"
                            style="display: inline-block;width:58px;">
                            <div style="width: 58px;height:58px;line-height: 58px;">
                                <Icon type="ios-plus-empty" size="58"></Icon>
                            </div>
                        </Upload>
                    </FormItem>
                </Col>
            </Row>
           
            <Row style="margin-top:20px">
                <Col span="8">
                     <FormItem>
                         <!-- v-if="newId == 0" -->
                        <Button type="primary" v-if="newId == 0"  @click="handleSubmit('formValidate')">新增</Button>
                        <Button type="success" v-else >通过</Button>
                        <Button type="ghost" v-if="newId == 0"  @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                        <Button type="error" v-else  style="margin-left: 8px">驳回</Button>
                    </FormItem>
                </Col>
            </Row>             
        </Form>
        
    </div>
    <div style="height:1080px;background-color: #EDEEF2;"></div>
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
            return {
                formValidate: {
                    twenty_nine: '',
                    thirty: '',
                   
                },
                ruleValidate: {
                    twenty_nine:[
                        { required: true, message: '不能为空', trigger: 'blur' }
                    ],
                    thirty:[
                        { required: true, message: '不能为空', trigger: 'blur' }
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
            handleSuccess (res, file) {
                this.formValidate.twenty_nine = file.name
                console.log(file)
            },
        },
        mounted () {
            this.uploadList = this.$refs.upload.fileList;
             console.log(this.uploadList)
        }
    }
</script>


