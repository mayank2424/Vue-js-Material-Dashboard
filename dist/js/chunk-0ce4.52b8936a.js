(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ce4"],{"2b56":function(t,a,e){"use strict";var s=e("3ec9"),r=e.n(s);r.a},"3ec9":function(t,a,e){},7277:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{md12:"",sm12:"",lg12:""}},[e("v-card",{staticClass:"dash_card"},[e("v-toolbar",{staticStyle:{background:"#fff","box-shadow":"none !important","border-bottom":"1px solid #e2e2e2"},attrs:{id:"core-toolbar"}},[e("div",{staticClass:"v-toolbar-title"},[e("v-toolbar-title",{staticClass:"tertiary--text font-weight-normal",staticStyle:{"font-size":"1.25rem !important"}},[t._v("\n              "+t._s(t.activeDashboardTab.title)+"\n            ")])],1),e("v-spacer"),e("v-toolbar-items",[e("v-flex",{attrs:{"align-center":"",layout:"","py-2":""}},[e("Select",{attrs:{items:t.visitor_month,label:t.selectedMonthinVisitors,width:"150px",type:"month"}}),e("Select",{attrs:{items:t.visitor_year,label:t.selectedYearinVisitors,width:"120px",type:"year"}})],1)],1)],1),e("div",{staticStyle:{padding:"20px",background:"white"}},[e("v-fade-transition",{attrs:{mode:"out-in"}},["0"==t.activeDashboardTab.id?e("column-chart",{attrs:{dataset:{maxBarThickness:12},stacked:!0,colors:["blue","blue"],data:t.getDashBoardData.visitors[t.selectedMonthinVisitors][t.selectedYearinVisitors]}}):t._e(),"1"==t.activeDashboardTab.id?e("line-chart",{attrs:{data:t.getDashBoardData.performanceData[t.selectedMonthinVisitors][t.selectedYearinVisitors]}}):t._e(),"2"==t.activeDashboardTab.id?e("area-chart",{attrs:{data:t.getDashBoardData.overallData[t.selectedMonthinVisitors][t.selectedYearinVisitors]}}):t._e()],1)],1)],1)],1),t._l(t.statsCards.data,function(a){return e("v-flex",{key:a.title,attrs:{md6:"",sm6:"",lg3:""}},[e("v-card",{staticClass:"stats_card dash_card"},[e("h3",{staticClass:"stats_title"},[t._v(t._s(a.title))]),e("h1",{staticClass:"stats_value"},[t._v(t._s(a.value))]),e("div",{staticClass:"stats_div"},[e("p",{staticClass:"stats_growth",style:{color:a.growthColor}},[t._v("\n            "+t._s(a.growth)+"\n          ")]),e("v-icon",{style:{color:a.growthColor}},[t._v(t._s(a.icon))])],1),e("area-chart",{attrs:{height:"130px","margin-top":"-30px",colors:a.color,library:{scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}},data:a.chartData}})],1)],1)}),e("v-flex",{attrs:{md12:"",lg8:""}},[e("v-card",{staticClass:"dash_card"},[e("div",{staticClass:"table_header"},[e("h2",[t._v("Most Visited Pages")])]),e("v-divider"),e("div",[e("v-data-table",{attrs:{headers:t.headers,rounded:"",items:t.items,"hide-actions":""},scopedSlots:t._u([{key:"headerCell",fn:function(a){var s=a.header;return[e("span",{staticClass:"table_row_header text-xs-left text-warning text--darken-3",domProps:{textContent:t._s(s.text)}})]}},{key:"items",fn:function(a){a.index;var s=a.item;return[e("td",{staticClass:"table_data_td"},[t._v("\n                "+t._s(s.name)+"\n                "),e("v-icon",{staticClass:"table_icon"},[t._v("mdi-open-in-new")])],1),e("td",{staticClass:"text-xs-left table_data_td"},[t._v(t._s(s.visitors))]),e("td",{staticClass:"text-xs-left table_data_td"},[t._v("\n                "+t._s(s.page_visits)+"\n              ")]),e("td",{staticClass:"text-xs-left table_data_td graph_td"},[t._v("\n                "+t._s(s.bounce)+"\n                "),e("area-chart",{attrs:{width:"100px",height:"45px",colors:["#0f65db","#e8effa"],library:{scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}},data:s.chartData}})],1)]}}])})],1)],1)],1),e("v-flex",{attrs:{md12:"",lg4:""}},[e("v-card",{staticClass:"dash_card"},[e("div",{staticClass:"table_header"},[e("h2",[t._v("Social Media Traffic")])]),e("v-divider"),e("div",[e("v-data-table",{attrs:{headers:t.traffic_table_headers,rounded:"",items:t.traffic_table_items,"hide-actions":""},scopedSlots:t._u([{key:"headerCell",fn:function(a){var s=a.header;return[e("span",{staticClass:"table_row_header text-xs-left text-warning text--darken-3",domProps:{textContent:t._s(s.text)}})]}},{key:"items",fn:function(a){a.index;var s=a.item;return[e("td",{staticClass:"table_data_td"},[t._v("\n                "+t._s(s.name)+"\n              ")]),e("td",{staticClass:"text-xs-left table_data_td graph_td"},[t._v("\n                "+t._s(s.visitors)+"\n              ")]),e("td",{staticClass:"prog_class"},[e("v-progress-linear",{staticClass:"progress_bar",attrs:{color:"indigo",rounded:"",value:s.progress_value}})],1)]}}])})],1)],1)],1)],2)],1)},r=[],i=e("db72"),o=e("2f62");function n(t,a){if(a){var e=this.$data._chart,s=t.datasets.map(function(t){return t.label}),r=a.datasets.map(function(t){return t.label}),i=JSON.stringify(r),o=JSON.stringify(s);o===i&&a.datasets.length===t.datasets.length?(t.datasets.forEach(function(t,s){var r=Object.keys(a.datasets[s]),i=Object.keys(t),o=r.filter(function(t){return"_meta"!==t&&-1===i.indexOf(t)});for(var n in o.forEach(function(t){delete e.data.datasets[s][t]}),t)t.hasOwnProperty(n)&&(e.data.datasets[s][n]=t[n])}),t.hasOwnProperty("labels")&&(e.data.labels=t.labels,this.$emit("labels:update")),t.hasOwnProperty("xLabels")&&(e.data.xLabels=t.xLabels,this.$emit("xlabels:update")),t.hasOwnProperty("yLabels")&&(e.data.yLabels=t.yLabels,this.$emit("ylabels:update")),e.update(),this.$emit("chart:update")):(e&&(e.destroy(),this.$emit("chart:destroy")),this.renderChart(this.chartData,this.options),this.$emit("chart:render"))}else this.$data._chart&&(this.$data._chart.destroy(),this.$emit("chart:destroy")),this.renderChart(this.chartData,this.options),this.$emit("chart:render")}Object;var l=e("30ef"),d=e.n(l);function c(t,a){return{render:function(t){return t("div",{style:this.styles,class:this.cssClasses},[t("canvas",{attrs:{id:this.chartId,width:this.width,height:this.height},ref:"canvas"})])},props:{chartId:{default:t,type:String},width:{default:400,type:Number},height:{default:400,type:Number},cssClasses:{type:String,default:""},styles:{type:Object},plugins:{type:Array,default:function(){return[]}}},data:function(){return{_chart:null,_plugins:this.plugins}},methods:{addPlugin:function(t){this.$data._plugins.push(t)},generateLegend:function(){if(this.$data._chart)return this.$data._chart.generateLegend()},renderChart:function(t,e){this.$data._chart&&this.$data._chart.destroy(),this.$data._chart=new d.a(this.$refs.canvas.getContext("2d"),{type:a,data:t,options:e,plugins:this.$data._plugins})}},beforeDestroy:function(){this.$data._chart&&this.$data._chart.destroy()}}}c("bar-chart","bar"),c("horizontalbar-chart","horizontalBar"),c("doughnut-chart","doughnut"),c("line-chart","line"),c("pie-chart","pie"),c("polar-chart","polarArea"),c("radar-chart","radar"),c("bubble-chart","bubble"),c("scatter-chart","scatter");var h=e("5502"),u={components:{Select:h["default"]},data:function(){return{statsCards:{data:[{title:"Realtime users",value:"56",growth:"-9.8%",growthColor:"red",chartData:{"2017-01-01 00:00:00 -0800":3,"2017-01-01 00:01:00 -0800":5,"2017-01-01 00:02:00 -0800":4,"2017-01-01 00:03:00 -0800":3.5,"2017-01-01 00:04:00 -0800":3.8,"2017-01-01 00:05:00 -0800":1},color:["#51ac42","#ebf6ec"],icon:"mdi-arrow-down-bold-box-outline"},{title:"Total visits",value:"54,598",growth:"+11.8%",growthColor:"green",chartData:{"2017-01-01 00:00:00 -0800":4,"2017-01-01 00:01:00 -0800":6,"2017-01-01 00:02:00 -0800":5,"2017-01-01 00:03:00 -0800":5.5,"2017-01-01 00:04:00 -0800":3.5,"2017-01-01 00:05:00 -0800":6.5},color:["#6a67f3","#f0effe"],icon:"mdi-arrow-up-bold-box-outline"},{title:"Bounce Rate",value:"73.67",growth:"+18.8%",growthColor:"green",chartData:{"2017-01-01 00:00:00 -0800":4,"2017-01-01 00:01:00 -0800":6,"2017-01-01 00:02:00 -0800":5,"2017-01-01 00:03:00 -0800":5.5,"2017-01-01 00:04:00 -0800":3.5,"2017-01-01 00:05:00 -0800":6.5},color:["#f9d156","#fefaef"],icon:"mdi-arrow-up-bold-box-outline"},{title:"Visit duration",value:"1m 10s",growth:"-19.8%",growthColor:"red",chartData:{"2017-01-01 00:00:00 -0800":3,"2017-01-01 00:01:00 -0800":5,"2017-01-01 00:02:00 -0800":4,"2017-01-01 00:03:00 -0800":3.5,"2017-01-01 00:04:00 -0800":3.8,"2017-01-01 00:05:00 -0800":1},color:["#0f65db","#e8effa"],icon:"mdi-arrow-down-bold-box-outline"}]},tableData:{visitedPagesData:[{name:"/store/",visitors:"4,800",page_visits:"3980",bounce:"80.12%"},{name:"/store/symbold",visitors:"3,800",page_visits:"3180",bounce:"60.12%",chartData:{"2017-01-01 00:00:00 -0800":3,"2017-01-01 00:01:00 -0800":5,"2017-01-01 00:02:00 -0800":4,"2017-01-01 00:03:00 -0800":3.5,"2017-01-01 00:04:00 -0800":3.8,"2017-01-01 00:05:00 -0800":1}},{name:"/store/dashboard-ui-kit",visitors:"2,800",page_visits:"2180",bounce:"50.12%",chartData:{"2017-01-01 00:00:00 -0800":3,"2017-01-01 00:01:00 -0800":5,"2017-01-01 00:02:00 -0800":4,"2017-01-01 00:03:00 -0800":3.5,"2017-01-01 00:04:00 -0800":3.8,"2017-01-01 00:05:00 -0800":1}},{name:"/store/webflow",visitors:"2,200",page_visits:"1980",bounce:"38.12%",chartData:{"2017-01-01 00:00:00 -0800":3,"2017-01-01 00:01:00 -0800":5,"2017-01-01 00:02:00 -0800":4,"2017-01-01 00:03:00 -0800":3.5,"2017-01-01 00:04:00 -0800":3.8,"2017-01-01 00:05:00 -0800":1}},{name:"/store/webflow-2",visitors:"2000",page_visits:"1680",bounce:"30.12%",chartData:{"2017-01-01 00:00:00 -0800":3,"2017-01-01 00:01:00 -0800":5,"2017-01-01 00:02:00 -0800":4,"2017-01-01 00:03:00 -0800":3.5,"2017-01-01 00:04:00 -0800":3.8,"2017-01-01 00:05:00 -0800":1}}]},visitor_year:["2001","2004","2008","2010","2016"],visitor_month:["December","January","February","March","April"],headers:[{sortable:!1,text:"Page Name",value:"id"},{sortable:!1,text:"Visitors",value:"name"},{sortable:!1,text:"Unique Page ",value:"salary",align:"right"},{sortable:!1,text:"Bounce Rate",value:"Bounce Rate"}],items:[{name:"/store/",visitors:"4,800",page_visits:"3980",bounce:"80.12%",chartData:{"2017-01-01 00:00:00 -0800":3,"2017-01-01 00:01:00 -0800":5,"2017-01-01 00:02:00 -0800":4,"2017-01-01 00:03:00 -0800":3.5,"2017-01-01 00:04:00 -0800":3.8,"2017-01-01 00:05:00 -0800":1}},{name:"/store/symbold",visitors:"3,800",page_visits:"3180",bounce:"60.12%",chartData:{"2017-01-01 00:00:00 -0800":3,"2017-01-01 00:01:00 -0800":5,"2017-01-01 00:02:00 -0800":4,"2017-01-01 00:03:00 -0800":3.5,"2017-01-01 00:04:00 -0800":3.8,"2017-01-01 00:05:00 -0800":1}},{name:"/store/dashboard-ui-kit",visitors:"2,800",page_visits:"2180",bounce:"50.12%",chartData:{"2017-01-01 00:00:00 -0800":3,"2017-01-01 00:01:00 -0800":5,"2017-01-01 00:02:00 -0800":4,"2017-01-01 00:03:00 -0800":3.5,"2017-01-01 00:04:00 -0800":3.8,"2017-01-01 00:05:00 -0800":1}},{name:"/store/webflow",visitors:"2,200",page_visits:"1980",bounce:"38.12%",chartData:{"2017-01-01 00:00:00 -0800":3,"2017-01-01 00:01:00 -0800":5,"2017-01-01 00:02:00 -0800":4,"2017-01-01 00:03:00 -0800":3.5,"2017-01-01 00:04:00 -0800":3.8,"2017-01-01 00:05:00 -0800":1}},{name:"/store/webflow-2",visitors:"2000",page_visits:"1680",bounce:"30.12%",chartData:{"2017-01-01 00:00:00 -0800":3,"2017-01-01 00:01:00 -0800":5,"2017-01-01 00:02:00 -0800":4,"2017-01-01 00:03:00 -0800":3.5,"2017-01-01 00:04:00 -0800":3.8,"2017-01-01 00:05:00 -0800":1}}],traffic_table_headers:[{sortable:!1,text:"Network"},{sortable:!1,text:"Visitors"},{sortable:!1,text:""}],traffic_table_items:[{name:"Facebook",visitors:"3,800",progress_value:"70"},{name:"Instagram",visitors:"2,800",progress_value:"50"},{name:"Twitter",visitors:"2,000",progress_value:"40"},{name:"Linkedin",visitors:"1,800",progress_value:"28"},{name:"Reddit",visitors:"100",progress_value:"15"}],tabs:0,list:{0:!1,1:!1,2:!1}}},methods:{complete:function(t){this.list[t]=!this.list[t]}},created:function(){console.log("Mounted"),console.log(this.activeDashboardTab),console.log(this.getDashBoardData)},computed:Object(i["a"])({},Object(o["b"])(["selectedMonthinVisitors","selectedYearinVisitors","getDashBoardData","activeDashboardTab"]))},b=u,v=(e("2b56"),e("2877")),_=Object(v["a"])(b,s,r,!1,null,null,null);a["default"]=_.exports}}]);
//# sourceMappingURL=chunk-0ce4.52b8936a.js.map