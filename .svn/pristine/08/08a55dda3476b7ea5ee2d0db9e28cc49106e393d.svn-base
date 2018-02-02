<template>
    <div style="width:80%;margin-left:10%;background-color: #fff;">
        <Form ref="formValidate" label-position="top" :model="formValidate" :rules="ruleValidate"  >
            <Row style="border-bottom:1px solid #ccc;height:160px">
                <Col span="8">
                    <FormItem label="产品类别 :" prop="category" >
                        <Select v-model="formValidate.category" clearable placeholder="请选择" style="width:200px" >
                            <Option value="categoryOne">新手专享</Option>
                            <Option value="categoryTwo">普通定期</Option>
                            <Option value="categoryThree">普通活期</Option>
                            <Option value="categoryFour">经销商专享</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="最高借款金额:" prop="two" style="margin-top:20px;">           
                        <Input v-model="formValidate.two" number placeholder="200,000,000 元" style="width:200px"></Input> 元    
                    </FormItem>
                </Col>
                <Col span="8" >
                    <FormItem label="借款方 :" prop="three">
                        <Input v-model="formValidate.three" placeholder="请输入借款方名称" style="width:200px"></Input> 
                    </FormItem>
                    
                    <FormItem label="环迅借款金额 :" prop="four" style="margin-top:20px;">
                        <Input v-model="formValidate.four" placeholder="请输入环迅借款金额" number style="width:200px"></Input> 元 
                    </FormItem>
                </Col>
                <Col span="8">
                <FormItem label="产品名称 ：" prop="five">
                        <Input v-model="formValidate.five" placeholder="请输入产品名称+编号" style="width:200px"></Input>
                        <p>列如：“十月慧盈+2707”</p>
                    </FormItem>               
                </Col>
            </Row>
            <Row style="border-bottom:1px solid #ccc;height:160px;margin-top:20px">
                <Col span="8">
                    <FormItem label="优先通道 :"  >
                        <RadioGroup v-model="formValidate.six" type="button">
                            <Radio label="环迅账号"></Radio>
                            <Radio label="富有账号"></Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="起投金额:" prop="seven" style="margin-top:20px;">           
                        <Input v-model="formValidate.seven" number placeholder="请输入起投金额" style="width:200px"></Input> 元    
                    </FormItem>
                </Col>
                <Col span="8" >
                    <FormItem label="普通年利率 :" prop="eight">
                        <Input v-model="formValidate.eight" number placeholder="输入日利率计算年利率" style="width:200px"></Input> %
                    </FormItem>
                    
                    <FormItem label="最大转出金额 :" prop="nine" style="margin-top:20px;">
                        <Input v-model="formValidate.nine" placeholder="请输入最大转出金额" number style="width:200px"></Input> 元 
                    </FormItem>
                </Col>
                <Col span="8">
                <FormItem label="会员年利率 ：" prop="ten">
                        <Input v-model="formValidate.ten" number placeholder="输入日利率计算年利率" style="width:200px"></Input> %
                    </FormItem>               
                </Col>
            </Row>
            <Row style="border-bottom:1px solid #ccc;height:240px;margin-top:20px">
                <Col span="8">
                    <FormItem label="借款期限 :" prop="eleven" >
                        <Input v-model="formValidate.eleven" number placeholder="请输入借款期限" style="width:200px"></Input> 天   
                    </FormItem>
                    <FormItem label="借款用途:" prop="twelve" style="margin-top:20px;">           
                        <Select v-model="formValidate.twelve" clearable placeholder="请选择" style="width:200px" >
                            <Option value="twelveOne">企业运营</Option>
                            <Option value="twelveTwo">购房借款</Option>
                            <Option value="twelveThree">装修借款</Option>
                            <Option value="twelveFour">个人消费</Option>
                            <Option value="twelveFive">婚礼筹备</Option>
                            <Option value="twelveSix">教育培训</Option>
                            <Option value="twelveSeven">汽车消费</Option>
                            <Option value="twelveEight">投资创业</Option>
                            <Option value="twelveNine">医疗支出</Option>
                        </Select>    
                    </FormItem>
                    <FormItem label="仅限兑换码投资 :" prop="thirteen" style="margin-top:20px;">           
                        <RadioGroup v-model="formValidate.thirteen" type="button">
                            <Radio label="启动"></Radio>
                            <Radio label="关闭"></Radio>
                        </RadioGroup>    
                    </FormItem>
                </Col>
                <Col span="8" >
                    <FormItem label="筹标期限 :" prop="fourteen">
                        <Input v-model="formValidate.fourteen" number placeholder="请输入筹标期限" style="width:200px"></Input>    
                    </FormItem>
                    
                    <FormItem label="还款方式 :" prop="fifteen" style="margin-top:20px;">
                        <Select v-model="formValidate.fifteen" clearable placeholder="请选择" style="width:200px" >
                            <Option value="fifteenOne">付息还本</Option>
                            <Option value="fifteenTwo">等额本息</Option>
                            <Option value="fifteenThree">到期还本息</Option>
                            <Option value="fifteenFour">本息均摊，利息固定</Option>
                        </Select> 
                    </FormItem>
                    <FormItem label="是否允许新手礼包 :"  style="margin-top:20px;">           
                        <RadioGroup v-model="formValidate.sixteen" type="button">
                            <Radio label="是"></Radio>
                            <Radio label="否"></Radio>
                        </RadioGroup>    
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="虚拟投资额 ：" prop="seventeen">
                        <Input v-model="formValidate.seventeen" number placeholder="单位 “万元” " style="width:200px"></Input> 万元
                    </FormItem>  
                    <FormItem label="借款合同范本 :" prop="eighteen" style="margin-top:20px;">
                        <Select v-model="formValidate.eighteen" clearable placeholder="请选择借款合同范本" style="width:200px" >
                            <Option value="eighteenOne">等额本息合同[普通]</Option>
                            <Option value="eighteenTwo">付息还本合同范本[普通]</Option>
                            <Option value="eighteenThree">到期本息合同范本[普通]</Option>
                        </Select> 
                    </FormItem>             
                </Col>
            </Row>
            <Row style="border-bottom:1px solid #ccc;height:300px;margin-top:20px">
                <Col span="24">
                    <FormItem label="借款企业信息：" prop="nineteen">
                        <Input v-model="formValidate.nineteen" type="textarea" :autosize="{minRows: 2,maxRows: 10}" placeholder="请编辑企业信息..."></Input>
                    </FormItem>
                </Col>
                 <Col span="24">
                    <FormItem label="安全保障：" prop="twenty">
                        <Input v-model="formValidate.twenty" type="textarea" :autosize="{minRows: 2,maxRows: 10}" placeholder="请编辑安全保障..."></Input>
                    </FormItem>
                </Col>
                 <Col span="24">
                    <FormItem label="回款计划：" prop="twent_one">
                        <Input v-model="formValidate.twent_one" type="textarea" :autosize="{minRows: 2,maxRows: 10}" placeholder="请编辑回款计划..."></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row style="border-bottom:1px solid #ccc;height:80px;margin-top:20px">
                <Col span="8">
                    <FormItem label="风险等级：" >
                        <Rate  allow-half v-model="formValidate.twenty_two"></Rate>
                    </FormItem>
                </Col>
                 <Col span="8">
                    <FormItem label="类型：" >
                        <RadioGroup v-model="formValidate.twenty_three" type="button">
                            <Radio label="首推"></Radio>
                            <Radio label="秒杀"></Radio>
                            <Radio label="普通"></Radio>
                        </RadioGroup> 
                    </FormItem>
                </Col>
                 <Col span="8">
                    <FormItem label="隐藏：" >
                        <RadioGroup v-model="formValidate.twenty_four" type="button">
                            <Radio label="是"></Radio>
                            <Radio label="否"></Radio>
                        </RadioGroup> 
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
        <div style="height:60px"></div>
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
                    category: [],
                    two: '',
                    three:'',
                    four:'',
                    five:'',
                    six: '环迅账号', 
                    seven:'',
                    eight:'', 
                    nine:'', 
                    ten:'', 
                    eleven:'',
                    twelve:[],
                    thirteen:'启动',
                    fifteen:[],
                    sixteen:'是',
                    seventeen:'',
                    eighteen:[],
                    nineteen:'',
                    twenty:'',
                    twent_one:'',
                    twenty_two: 3.5,
                    twenty_three:'首推',
                    twenty_four:'是'
                },
                ruleValidate: {
                    category: [
                        { required: true, message: '您未选择', trigger: 'change' }
                    ],
                    two: [
                        { validator: validateNum, trigger: 'blur' }
                    ],
                    three:[
                        { required: true, message: '请输入名称', trigger: 'blur' }
                    ],
                    four:[
                        { validator: validateNum, trigger: 'blur' }
                    ],
                    five:[
                        { required: true, message: '请输入贷款产品名称', trigger: 'blur' }
                    ],
                    seven:[
                        { validator: validateNum, trigger: 'blur' }
                    ],
                    eight:[
                        { validator: validateNum, trigger: 'blur' }
                    ],
                    nine:[
                        { validator: validateNum, trigger: 'blur' }
                    ],
                    ten:[
                        { validator: validateNum, trigger: 'blur' }
                    ],
                    eleven:[
                        { validator: validateNum, trigger: 'blur' }
                    ],
                    twelve:[
                        { required: true, message: '请选择贷款用途', trigger: 'change' }
                    ],
                    fourteen:[
                        { validator: validateNum, trigger: 'blur' }
                    ],
                    fifteen:[
                        { required: true, message: '请选择还款方式', trigger: 'change' }
                    ],
                    seventeen:[
                        { validator: validateNum, trigger: 'blur' }
                    ],
                    eighteen:[
                        { required: true, message: '请选择借款合同范本', trigger: 'change' }
                    ],
                    nineteen: [
                        { required: true, message: '企业信息不能为空', trigger: 'blur' },
                        { type: 'string', min: 20, message: '企业信息不能低于20个字', trigger: 'blur' }
                    ],
                    twenty: [
                        { required: true, message: '安全保障不能为空', trigger: 'blur' },
                        { type: 'string', min: 20, message: '安全保障不能低于20个字', trigger: 'blur' }
                    ],
                    twent_one: [
                        { required: true, message: '风险等级不能为空', trigger: 'blur' },
                        { type: 'string', min: 20, message: '风险等级不能低于20个字', trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            handleSubmit (name) {
                console.log(this.formValidate.category);
                console.log(this.formValidate.six);
                console.log(this.formValidate.twelve);
                console.log(this.formValidate.fifteen);
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
