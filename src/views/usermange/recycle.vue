<template>
	<div>
		<div ref="mian" >
			<Row>
			  	<Col :span="24" style="margin-top:20px;">					
              <div class="search" style="width:60px">
                <div class="search" style="width:100px" @click="modal2 = true">
                    <Icon type="trash-b" color="#2db7f5"></Icon>
                    <strong>恢复</strong>             
                </div>
            </div>						
            <div class="delete" style="margin-left:60px;width:70px">    
                  <Icon type="ios-trash" color="#2db7f5"></Icon>
                  <strong>彻底删除</strong>
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
				<Col :span="8" style="margin-top: 10px;" class="page">	
                    <p >共{{this.data1.length}}记录，每页显示10条，共{{Math.ceil(this.data1.length/10)}}页</p>		
                </Col>
                <Col :span="16" style="text-align: right; margin-top: 10px;" >		  
					<Page :total="this.data1.length" :current="1"  show-elevator @on-change="setInitPage"></Page>
				    
                </Col>
			</Row>
		</div>
		</div>
        
	</div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      valueDate: "",
      selItem: [],
      Ymoney: "",
      vip: "",
      status: "",
      columns1: [
        
        {
          type: "selection",
          align: "center"
        },
        {					
					title: '编号',
					key: 'userLevel',
					align: 'center'
					
				},
        {
          title: "实名",
          key: "userLevel",
          align: "center",
          className: "demo-table-info-column"
        },
        {
          title: "手机",
          key: "userId",
          align: "center"
        },
        {
          title: "理财师等级",
          key: "userBalance",
          align: "center"
        },
        {
          title: "会员等级",
          key: "fenRunBalance",
          align: "center"
        },
        {
          title: "总余额（元）",
          key: "amountFrozen",
          align: "center",
          className: "demo-table-info-column"
        },
        {
          title: "冻结金额（元）",
          key: "name",
          align: "center"
        },
        {
          title: "注册途径",
          key: "idNumber",
          align: "center"
        },
        {
          title: "创建时间",
          key: "registrationWay",
          align: "center"
        },
        {
          title: "状态",
          key: "way",
          align: "center"
        },
        {
          title: "备注",
          key: "way",
          align: "center"
        },
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Dropdown",
                {
                  placement: "bottom-end",
                  style: {
                    align: "left"
                  }
                },
                [
                  h("i", {
                    class: {
                      auditmanage_shezhi: true,
                      icon: true,
                      "ivu-icon": true,
                      "ivu-icon-gear-b": true
                    }
                  }),
                  h(
                    "DropdownMenu",
                    {
                      slot: "list"
                    },
                    [
                      h(
                        "DropdownItem",
                        {
                          nativeOn: {
                            click: () => {
                              this.DElete(params.index);
                            }
                          }
                        },
                        [
                          h("Icon", {
                            props: {
                              type: "trash-a"
                            },
                            style: {
                              marginRight: "5px",
                              color: "#69BEE9"
                            }
                          }),
                          h("span", "删除")
                        ]
                      ),
                      h(
                        "DropdownItem",
                        {
                          nativeOn: {
                            click: () => {
                              this.three(params.index);
                            }
                          }
                        },
                        [
                          h("Icon", {
                            props: {
                              type: "close-round"
                            },
                            style: {
                              marginRight: "5px",
                              color: "#69BEE9"
                            }
                          }),
                          h("span", "彻底删除")
                        ]
                      )
                    ]
                  )
                ]
              )
            ]);
          }
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
    selChange(sel) {
      this.selItem = sel;
    },
    five() {
      this.week = true;
    },
    six() {
      this.isOk = true;
    },
    hide() {
      this.isOk = false;
      this.week = false;
    },
    DElete(index) {
      this.page_data1.splice(index, 1);
      this.data1.splice(index, 1);
      this.setInitPage(1);
    },
    check() {
      alert("商户账号：" + this.status);
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
    }
  },
  created() {
    this.loading = true;
    axios
      .get("http://localhost:9001/static/loanmanage.json")
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
.page {
  height: 40px;
}
.page p {
  border-left: 3px solid #2db7f5;
  height: 20px;
  margin-top: 10px;
  padding-left: 10px;
}

/* 头部 */
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
.delete {
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
.wan > .ivu-select-dropdown {
  top: 50px !important;
  left: 30px !important;
}
.page1 > .ivu-page-total {
  border: 1px solid red;
}
</style>

