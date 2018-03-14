import Vue from "vue";
import Router from "vue-router";
const _import = require("./_import_" + process.env.NODE_PROD);
import Full from "@/containers/Full"
import Full2 from "@/containers/Full2"

import Buttons from "@/views/components/Buttons"
// Views - Pages
import Page404 from "@/views/errorPages/Page404"
import Page500 from "@/views/errorPages/Page500"


/* login */
const Login = _import("login/index");
Vue.use(Router);

export const constantRouterMap = [
	{ "path": "/login", "component": Login, "hidden": true },
	{
		"path": "/pages", "redirect": "/pages/p404", "name": "Pages",
		"component": {
			render(c) { return c("router-view") }
			// Full,
		},
		"children": [{ "path": "404", "name": "Page404", "component": _import("errorPages/Page404") },
		{ "path": "500", "name": "Page500", "component": _import("errorPages/Page404") },
		]
	}


]

export default new Router({
	"mode": "hash",
	"linkActiveClass": "open active",
	scrollBehavior: () => ({ y: 0 }),
	"routes": constantRouterMap
});

export const asyncRouterMap = [

	{
		"path": "/",
		"redirect": "/dashboard",
		"name": "首页",
		"component": Full,
		"hidden": false,
		"icon": "android-cloud",
		"children": [
			{ "path": "/dashboard", "name": "Dashboard", "icon": "speedometer", "component": _import("Dashboard") },
			{ "path": "/introduction", "name": "介绍", "icon": "thumbsup", "component": _import("Introduction") },
			{
				"path": "/components",
				"name": "component组件",
				"redirect": "/components/buttons",
				"icon": "bookmark",
				"component": { render(c) { return c("router-view") } },
				"children": [
					{ "path": "buttons", "name": "Buttons按钮", "icon": "social-youtube", "component": _import("components/Buttons"), "hidden": false },
					{ "path": "hoverbuttons", "name": "悬停特效按钮", "icon": "wand", "component": _import("components/HoverButtons") },
					{ "path": "alert", "name": "Alert警告提示", "icon": "alert", "component": _import("components/Alert") },
					{ "path": "card", "name": "Card卡片", "icon": "ios-browsers-outline", "component": _import("components/Card") },
					{ "path": "datepicker", "name": "DatePicker", "icon": "ios-calendar-outline", "component": _import("components/DatePicker") },
					{ "path": "form", "name": "Form表单", "icon": "ios-list-outline", "component": _import("components/Form") },
					{ "path": "modal", "name": "Modal对话框", "icon": "ios-chatbubble-outline", "component": _import("components/Modal") },
					{ "path": "select", "name": "Select选择器", "icon": "ios-arrow-down", "component": _import("components/Select"), meta: { role: [ "editor"] } },
					{ "path": "spin", "name": "Spin加载中", "icon": "load-d ", "component": _import("components/Spin"), meta: { role: [ "editor"] } },
					{ "path": "steps", "name": "Steps步骤条", "icon": "ios-checkmark-outline", "component": _import("components/Steps"), meta: { role: [ "editor"] } },
					{ "path": "timeline", "name": "Timeline时间轴", "icon": "android-more-vertical", "component": _import("components/Timeline"), meta: { role: ["editor"] } },
					{ "path": "transfer", "name": "Transfer穿梭框", "icon": "ios-pause-outline", "component": _import("components/Transfer"), meta: { role: ["editor"] } },
					{ "path": "timepicker", "name": "Timepicker", "icon": "ios-clock-outline", "component": _import("components/Timepicker"), meta: { role: ["editor"] } },
					{ "path": "upload", "name": "Upload上传", "icon": "ios-cloud-upload-outline", "component": _import("components/Upload"), meta: { role: ["editor"] } },
				]
			},
			{
				"path": "/charts",
				"name": "echart图表",
				"redirect": "/charts/shopchart",
				"icon": "pie-graph",
				"component": { render(c) { return c("router-view") } },
				"children": [
					{ "path": "shopchart", "name": "商场统计图表", "icon": "stats-bars", "component": _import("charts/ShopChart"), meta: { role: ["admin"] }, "hidden": false },
					{ "path": "radarchart", "name": "雷达图", "icon": "arrow-graph-up-right", "component": _import("charts/RadarChart"), meta: { role: ["admin"] } },
					{ "path": "cakechart", "name": "蛋糕销量图表", "icon": "ios-analytics", "component": _import("charts/CakeChart"), meta: { role: ["admin"] } }
				]
			},
			{ "path": "/table", "name": "表格综合实例", "icon": "ios-paper", "component": _import("Table"), meta: { role: ["admin"] } },
			{ "path": "/jsontree", "name": "JSON视图", "icon": "merge", "component": _import("JsonTree"), meta: { role: ["admin"] } },
			{ "path": "/tabledetail/:id", "name": "TableDetail", "hidden": true, "component": _import("TableDetail"), meta: { role: ["admin"] } },
			{ "path": "/tinymce", "name": "Tinymce编辑器", "icon": "android-document", "component": _import("Tinymce"), meta: { role: ["admin"] } },
			{ "path": "/quill", "name": "quill编辑器", "icon": "android-document", "component": _import("quill"), meta: { role: ["admin"] } },
			{ "path": "/markdown", "name": "Markdown", "icon": "android-list", "component": _import("Markdown"), meta: { role: ["admin"] } },
			{
				"path": "/userModule",
				"name": "用户模块",
				"redirect": "/userModule/userList",
				"icon": "android-person",
				"component": { render(c) { return c("router-view") } },
				meta: { role: [ "develop"] },
				"children": [
					{ "path": "userList", "name": "用户列表M", "icon": "android-people", "component": _import("userModule/userList") },
					{ "path": "chartsM", "name": "chartsM", "icon": "android-people", "component": _import("visualDataModule/chartsM") },
					{ "path": "basicsTable", "name": "table模板", "icon": "android-people", "component": _import("userModule/user") }
				]
			},
			{
				"path":"/board",
				"name":"看板",
				"icon": "thumbsup",
				"redirect":"/board/dataManage",
				meta: { role: [ "admin"] },
				"component":{
					render(c){
						return c("router-view")
					}
				},
				"children":[{
					"path": "dataManage",
					"name": "数据管理",
					"component": _import("board/dataManage"),
					"hidden": false,
				},
				{
					"path": "dataOperational",
					"name": "运营数据",
					"component": _import("board/dataOperational"),
					
				},
				{
					"path": "webStats",
					"name": "网站统计",
					"component": _import("board/webStats"),
				},
				{
					"path": "list",
					"name": "list",
					"component": _import("board/list"),
					"hidden":true,
				}
				]
				
			},
			{
				"path":"/systemLog",
				"name":"系统日志",
				"icon": "social-yen",
				"redirect":"/systemLog/systemLogList",
				"component":{render(c){return c("router-view")}},
				meta: { role: [ "develop"] },
				"children":[
					{"path": "systemLogList","name": "系统日志列表","component": _import("systemLog/systemLogList")}
				]
				
			}
		]
	},
	// {
	// 	"path": "/home1",
	// 	"redirect": "/home1/introduction",
	// 	"name": "首页2",
	// 	"component": Full2,
	// 	"hidden": false,
	// 	"icon": "stats-bars",
	// 	"children": [
	// 		{ "path": "/home1/dashboard", "name": "Dashboard2", "icon": "speedometer", "component": _import("Dashboard2") },
	// 		{ "path": "/home1/introduction", "name": "介绍2", "icon": "thumbsup", "component": _import("Introduction") }

	// 	]
	// },
	// {
	// 	"path": "/home2",
	// 	"redirect": "/dashboard2",
	// 	"name": "首页3",
	// 	"component": Full,
	// 	"hidden": false,
	// 	"icon": "stats-bars",
	// 	"children": [
	// 		{ "path": "/dashboard2", "name": "Dashboard02", "icon": "speedometer", "component": _import("Dashboard2") },
	// 		{ "path": "/introduction", "name": "介绍1", "icon": "thumbsup", "component": _import("Introduction") }
	// 	]
	// },
	{
		"path": "/Introductions",
		"redirect": "/Introductions/auditmanage",
		"name": "借贷管理",
		"component": Full,
		"hidden": false,
		"children": [
			{
				"path": "/Introductions",
				"name": "标的审核",
				"redirect": "/Introductions/auditmanage",
				"icon": "pie-graph",
				"component": { render(c) { return c("router-view") } },
				"children": [
					{ "path": "auditmanage", "name": "标的审核管理", "component": _import("Introductions/auditmanage") },
					{ "path": "loanmanage", "name": "标的放款管理", "component": _import("Introductions/loanmanage") },
					{ "path": "Introductions", "name": "回收站", "component": _import("Introductions/Introduction") }
				]
			},
			{ "path": "/Introductions/addManage", "name": "新增标的管理", "component": _import("Introductions/addManage"), "hidden": true },
			{
				"path": "/Introductions/loanRecords",
				"name": "标的管理",
				"redirect": "/Introductions/loanRecords/loanRecords",
				"icon": "pie-graph",
				"component": { render(c) { return c("router-view") } },
				"children": [
					{ "path": "loanRecords", "name": "已发布产品", "component": _import("Introductions/loanRecords/loanRecords") },
					{ "path": "home1", "name": "兑换码产品", "component": _import("Introductions/loanRecords/home1") },
					{ "path": "home2", "name": "活期宝", "component": _import("Introductions/loanRecords/home2") },
					{ "path": "home3", "name": "兑换码详情", "component": _import("Introductions/loanRecords/home3"), "hidden": true }
				]
			},
			{
				"path": "/Introductions/bidding",
				"name": "借款记录",
				"redirect": "/Introductions/bidding/bidding",
				"icon": "pie-graph",
				"component": { render(c) { return c("router-view") } },
				"children": [
					{ "path": "bidding", "name": "待还款账单", "component": _import("Introductions/bidding/bidding") },
					{ "path": "bidding1", "name": "还款账单", "component": _import("Introductions/bidding/bidding1") }
				]
			},
			{
				"path": "/Introductions/bidManage",
				"name": "投标信息",
				"redirect": "/Introductions/bidManage/bid1",
				"icon": "pie-graph",
				"component": { render(c) { return c("router-view") } },
				"children": [
					{ "path": "bid1", "name": "成功投标", "component": _import("Introductions/bidManage/bid1") },
					{ "path": "bid2", "name": "失败投标", "component": _import("Introductions/bidManage/bid2") },
					{ "path": "bid3", "name": "所有投标", "component": _import("Introductions/bidManage/bid3") }
				]
			}


		]
	},
	{
		"path": "/usermange",
		"redirect": "/usermange/userCenter",
		"name": "用户管理",
		"component": Full,
		"hidden": false,
		"children": [
			{
				"path": "/usermange",
				"name": "用户列表",
				"icon": "person-stalker",
				"redirect": "/usermange/userCenter",
				"component": {render(c) {return c("router-view")}},
				"children": [
					{ "path": "userCenter", "name": "个人用户", "component": _import("usermange/userCenter") },
					{ "path": "userCompany", "name": "企业用户", "component": _import("usermange/userCompany") },
					{ "path": "approveManage", "name": "理财师管理", "component": _import("usermange/approveManage") },
					{ "path": "memberList", "name": "会员列表", "component": _import("usermange/memberList") }
				]
			},
			{
				"path": "/usermange/check",
				"name": "审核管理",
				"icon": "person-stalker",
				"redirect": "/usermange/check/personalUser",
				"component": {render(c) {return c("router-view")}},
				"children": [
					{ "path": "personalUser", "name": "企业审核", "component": _import("usermange/check/personalUser") },
					{ "path": "planner", "name": "理财师审核", "component": _import("usermange/check/planner") },
					{ "path": "bankCard", "name": "银行卡审核", "component": _import("usermange/check/bankCard") }
				]
			},
			{
				"path": "/usermange/message",
				"name": "信息快速查询",
				"icon": "person-stalker",
				"redirect": "/usermange/message/bankList",
				"component": {render(c) {return c("router-view")}},
				"children": [
					{ "path": "personalUser", "name": "银行卡列表", "component": _import("usermange/message/bankList") }
				]
			},
			{
				"path": "/usermange/recycle",
				"name": "回收站-用户",
				"icon": "trash-a",
				"component": _import("usermange/recycle")
			}

		]
	},
	{
		"path": "/monyeMange",
		"redirect": "/monyeMange/peturnDetuild",
		"name": "资金管理",
		"component": Full,
		"hidden": false,
		"children": [
			{
				"path": "/monyeMange",
				"name": "充值管理",
				"icon": "social-usd",
				"redirect": "/monyeMange/peturnDetuild",
				"component": {render(c) {return c("router-view")}},
				"children": [
					{ "path": "peturnDetuild", "name": "收益明细", "component": _import("monyeMange/peturnDetuild"), "hidden": false, },
					{ "path": "cushlog", "name": "资金日志", "component": _import("monyeMange/cushlog") },
					{ "path": "cushManage", "name": "提现管理", "component": _import("monyeMange/cushManage") },
					{ "path": "change", "name": "手动变更", "component": _import("monyeMange/change") }
				]
			}
		]
	},
	{
		"path": "/marketingPromotion",
		"redirect": "/marketingPromotion/userRewards",
		"name": "营销推广",
		"component": Full,
		"hidden": false,
		"children": [
			{
				"path": "/marketingPromotion",
				"name": "营销推广-s",
				"icon": "ios-flask",
				"redirect": "/marketingPromotion/userRewards",
				"component": {render(c) {return c("router-view")}},
				"children": [
					{ "path": "userRewards", "name": "用户奖励", "component": _import("marketingPromotion/userRewards"), "hidden": false, },
					{ "path": "skin", "name": "皮肤", "component": _import("marketingPromotion/skin") },
					{ "path": "integralmall", "name": "积分商城", "component": _import("marketingPromotion/integralmall") },
					{ "path": "inviteRebate", "name": "邀请返利", "component": _import("marketingPromotion/inviteRebate") },
					{ "path": "agent", "name": "代理商", "component": _import("marketingPromotion/agent") },
					{ "path": "action", "name": "活动管理", "component": _import("marketingPromotion/action") },
					{ "path": "redEnvelope", "name": "红包", "component": _import("marketingPromotion/redEnvelope") },
					{ "path": "experienceGold", "name": "体验金", "component": _import("marketingPromotion/experienceGold") },
					{ "path": "tools", "name": "工具", "component": _import("marketingPromotion/tools") },
					{ "path": "highCustom", "name": "高端定制", "component": _import("marketingPromotion/highCustom") }
				]
			}
		]
	},
	{
		"path": "/dataStutistics",
		"redirect": "/dataStutistics/investmentSutistics",
		"name": "统计",
		"component": Full,
		"hidden": false,
		"children": [
			{
				"path": "/dataStutistics",
				"name": "数据统计",
				"icon": "connection-bars",
				"redirect": "/dataStutistics/investmentSutistics",
				"component": {render(c) {return c("router-view")}},
				"children": [
					{ "path": "investmentSutistics", "name": "投资统计", "component": _import("dataStutistics/investmentSutistics"), "hidden": false, },
					{ "path": "borrow", "name": "借款统计", "component": _import("dataStutistics/borrow") },
					{ "path": "platformstats", "name": "平台统计", "component": _import("dataStutistics/platformstats") }
				]
			}
		]
	},
	{
		"path": "/cloud",
		"redirect": "/cloud/cloud1",
		"name": "员工管理",
		"component": Full,
		"hidden": false,
		"children": [
			{
				"path": "/cloud",
				"name": "员工",
				"icon": "connection-bars",
				"redirect": "/cloud/cloud1",
				"component": {render(c) {return c("router-view")}},
				"children": [
					{ "path": "cloud1", "name": "成员", "component": _import("cloud/cloud1"), "hidden": false, }
				]
			}
		]
	},
	{
		"path": "/webSet",
		"redirect": "/webSet/articleManage",
		"name": "前端设置",
		"component": Full,
		"children": [
			{
				"path": "/webSet",
				"name": "文章设置",
				"icon": "social-html5",
				"redirect": "/webSet/articleManage",
				"component": {render(c) {return c("router-view")}},
				"children": [
					{ "path": "articleManage", "name": "文章列表", "component": _import("webSet/articleManage"), "hidden": false, },
				]
			},
			{
				"path": "/webSet",
				"name": "PC端设置",
				"icon": "social-html5",
				"redirect": "/webSet/siteSearch",
				"component": {render(c) {return c("router-view")}},
				"children": [
					{ "path": "siteSearch", "name": "网站搜索", "component": _import("webSet/siteSearch") },
					{ "path": "PcSet", "name": "pc端设置", "component": _import("webSet/PcSet") }
				]
			},
			{
				"path": "/webSet",
				"name": "移动端设置",
				"icon": "social-html5",
				"redirect": "/webSet/PcSet",
				"component": {render(c) {return c("router-view")}},
				"children": [
					// { "path": "PcSet", "name": "pc端设置", "component": _import("webSet/PcSet") }
				]
			},
		]
	},
	{
		"path": "/systemSet",
		"redirect": "/systemSet/systemSet",
		"name": "系统设置",
		"component": Full,
		"children": [
			{
				"path": "/systemSet",
				"name": "系统配置",
				"icon": "ios-gear",
				"redirect": "/systemSet/systemSet",
				"component": {render(c) {return c("router-view")}},
				"children": [
					{ "path": "systemSet", "name": "基本配置", "component": _import("systemSet/systemSet"), "hidden": false, },
					{ "path": "userSet", "name": "用户配置", "component": _import("systemSet/userSet") },
					{ "path": "cushSet", "name": "提现配置", "component": _import("systemSet/cushSet") },
					{ "path": "interfaceSet", "name": "接口设置", "component": _import("systemSet/interfaceSet") },
					{ "path": "systemAdmin", "name": "系统管理员", "component": _import("systemSet/systemAdmin") },
					{ "path": "messageSet", "name": "消息配置", "component": _import("systemSet/messageSet") },
					{ "path": "produceSet", "name": "产品设置", "component": _import("systemSet/produceSet") }
				]
			},
		]
	},
	{ "path": "*", "redirect": "/pages/404", "hidden": true }

];
