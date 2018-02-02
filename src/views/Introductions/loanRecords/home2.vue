<template>
	<div>
		<div ref="mian" >
      <Row style="padding:10px;background:#fff" v-show="isShow">
        <Col span="24">
            <div class="search">
              <span style="font-weight:700">当前利率设置 ：</span>
              <Input placeholder="请输入..." style="width: 100px" size="small"></Input>%
              <Button style="margin-left:10px"  type="info" size="small">保存</Button>
              <span style="margin-left:10px;font-size:12px;color:#ccc">核算年利率为：10000</span>
            </div>
        </Col>
        <Col span="24" style="height:40px;line-height:50px;">
            <div class="search">
              <span style="font-weight:700">活期宝收益补发 ：</span>
              <Button style="margin-left:10px"  type="info" size="small">全部补发</Button>
              <span style="margin-left:10px;font-size:12px;color:#ccc">
                <Icon type="ios-medical" color="red" size="10"></Icon>
                 本功能为发现系统未按时分发收益时，点击按钮进行补发，请慎重选择</span>
            </div>
        </Col>
        <Col span="24" style="height:30px;line-height:30px;">
              <span style="margin-left:10px;font-size:12px;color:#ccc">
                 <Icon type="ios-medical" color="red" size="10"></Icon>
                  注：每天00：00-00:30为系统发放收益时间，期间补发功能暂停使用</span>
        </Col>
      </Row>
			<Row style="background:#fff;padding:10px;margin-top:20px">
				<Col :span="24">       
					<div class="search">
						<span>交易周期 ：</span>
						<Input placeholder="请输入..." style="width: 100px" size="small"></Input>
					</div>
          <div class="search" style="margin-left:10px">
						<span>用户 ：</span>
						<Input placeholder="请输入..." style="width: 100px" size="small"></Input>
					</div>
          <div class="search" style="margin-left:10px">
						<span>交易类型 ：</span>
						<Select v-model="status" clearable  style="width:150px" size="small">
							<Option value="fifteenOne">全部</Option>
							<Option value="fifteenTwo">收益</Option>
							<Option value="fifteenThree">转出</Option>
							<Option value="fifteenFour">转入</Option>
						</Select>
					</div>						
					<div class="check">
						<Button type="info"  icon="ios-search" @click="check('formInline')" size="small">搜索</Button>				
					</div>							
				</Col>
				<Col :span="24" style="margin-top:20px;">
					<div class="search" style="width:100px" @click="modal2 = true">
              <Icon type="share" color="#2db7f5" size="16"></Icon>
							<span>导出</span>             
					</div>
          
          <div class="search" style="width:100px" @click="mian_header">   
              <Icon type="android-settings" color="#2db7f5"></Icon>
							<span>利率设置</span>
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
				<Col :span="24" style="text-align: right;margin-top: 10px;">			  
					<Page :total="this.data1.length" :current="1" show-total show-elevator @on-change="setInitPage"></Page>
				</Col>				
			</Row>
		</div>
		<div style="height:100px"></div>
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
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      modal2: false,
      modal_loading: false,
      passWrod: "",
      loading: false,
      isShow: false,
      btnText: "显示",
      valueDate: "",
      selItem: [],
      status: "",
      columns1: [
        {
          type: "index",
          title: "序号",
          align: "center"
        },
        {
          title: "用户",
          key: "userID",
          align: "center",
          className: "demo-table-info-column"
        },
        {
          title: "交易利率",
          key: "li",
          align: "center"
        },
        {
          title: "交易类型",
          key: "Style",
          align: "center"
        },
        {
          title: "交易金额",
          key: "money",
          align: "center",
          render: (h, params) => {
            if (params.row.Style == "收益" || params.row.Style == "转入") {
              return h("div", [
                h("Icon", {
                  props: {
                    type: "plus"
                  },
                  style: {
                    color: "#76CE32",
                    marginRight: "5px"
                  }
                }),
                h(
                  "span",
                  {
                    style: {
                      color: "#76CE32"
                    }
                  },
                  params.row.money
                )
              ]);
            } else {
              return h("div", [
                h("Icon", {
                  props: {
                    type: "minus"
                  },
                  style: {
                    color: "red",
                    marginRight: "5px"
                  }
                }),
                h(
                  "span",
                  {
                    style: {
                      color: "red"
                    }
                  },
                  params.row.money
                )
              ]);
            }
          }
        },
        {
          title: "活期宝余额",
          key: "Hmoney",
          align: "center"
        },
        {
          title: "所属平台",
          key: "terrace",
          align: "center"
        },
        {
          title: "交易时间",
          key: "CDTIME",
          align: "center"
        },
        {
          title: "备足",
          key: "remark",
          align: "center"
        }
      ],
      page_data1: [],
      data1: [],
      page: 1
    };
  },
  mounted() {},
  methods: {
    first(index) {
      console.log(this.data1[index].uuID);
      this.$router.push({
        path: "addManage",
        name: "新增标的管理",
        params: {
          uuID: this.data1[index].uuID
        }
      });
    },
    second(index) {
      this.$router.push({
        path: "home3",
        name: "兑换码详情",
        params: {
          uuID: this.data1[index].uuID
        }
      });
    },
    check() {
      alert("商户账号：" + this.status);
    },
    selChange(sel) {
      this.selItem = sel;
    },
    setInitPage(page) {
      // console.log(this.page+"+++++")
      this.page_data1 = [];
      let data1 = this.data1;
      this.page = page;
      for (var i = (page - 1) * 10; i < (page - 1) * 10 + 10; i++) {
        if (i < data1.length) {
          this.page_data1.push(this.data1[i]);
        }
      }
    },
    // 合同日期
    changeDate(daterange) {
      this.calueDate = daterange;
      console.log(this.calueDate);
    },
    mian_header() {
      if (this.isShow == false) {
        this.isShow = true;
      } else {
        this.isShow = false;
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
  created() {
    this.loading = true;
    axios
      .get("http://localhost:9001/static/home3.json")
      .then(reponse => {
        this.loading = false;
        var res = reponse.data.total;
        this.data1 = res;
        this.setInitPage(1);
      })
      .catch(error => {
        // alert("网络错误");
      });
  }
};
</script>

<style scoped>
/* 头部 */
.mian_header {
  display: none;
}
.table {
  margin-top: 30px;
}
.search {
  float: left;
}
.check {
  float: left;
  margin-left: 20px;
}
</style>
<style>
body,
html {
  width: 100%;
  height: 100%;
  background-color: #edeef2;
}
.ivu-table td.demo-table-info-column {
  color: #2db7f5;
}

.auditmanage_shezhi {
  font-size: 16px;
}

.auditmanage_shezhi:hover {
  color: #fe8320;
}
.ivu-dropdown-menu {
  min-width: 100px;
  text-align: left;
}
</style>

