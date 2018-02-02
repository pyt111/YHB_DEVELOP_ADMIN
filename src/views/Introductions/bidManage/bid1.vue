<template>
	<div>
		<div ref="mian" >
      
			<Row style="background:#fff;padding:15px;">
				<Col :span="24">       
					<div class="search">
						<span>产品名称 ：</span>
						<Input placeholder="请输入..." style="width: 100px" size="small"></Input>
					</div>
                   <div class="search" style="margin-left:10px">
						<span>用户名 ：</span>
						<Input placeholder="请输入..."  style="width: 100px" size="small"></Input>
					</div>
        
                     <div class="search" style="margin-left:10px">
						<span>投标周期 ：</span>
						<Input placeholder="请输入..."  style="width: 100px" size="small"></Input> --
                        <Input placeholder="请输入..."  style="width: 100px" size="small"></Input>
					</div>						
					<div class="check">
						<Button type="info"  icon="ios-search" @click="check('formInline')" size="small">搜索</Button>				
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
		
	</div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: false,
      btnText: "显示",
      valueDate: "",
      selItem: [],
      status: "",
      columns1: [
        {
          title: "编号",
          key: "date",
          align: "center"
        },
        {
          title: "用户名",
          key: "name",
          align: "center",
		  className:'demo-table-info-column'
        },
        {
          title: "产品名称",
          key: "product",
          align: "center"
        },
        {
          title: "普通利率",
          key: "remark",
          align: "center"
        },
        {
          title: "会员利率",
          key: "Hremark",
          align: "center"
        },
        {
          title: "投资金额",
          key: "money",
          align: "center"
        },
        {
          title: "冻结金额",
          key: "money",
          align: "center"
        },
        {
          title: "总期数",
          key: "Hremark",
          align: "center"
        },
        {
          title: "第几期",
          key: "money",
          align: "center"
        },
        {
          title: "投标时间",
          key: "date",
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

