(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[558],{96558:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return z}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-view",[a("a-row",{attrs:{gutter:12}},[a("a-col",{staticClass:"mb-3",attrs:{lg:6,md:6,sm:24,xl:6,xs:24}},[a("a-card",{attrs:{bodyStyle:{padding:"16px"},title:"分组"}},[a("template",{slot:"extra"},[a("ReactiveButton",{attrs:{errored:e.teams.default.errored,loading:e.teams.default.saving,erroredText:"设置失败",loadedText:"设置成功",text:"设为默认",type:"default"},on:{callback:e.handleSetDefaultTeamCallback,click:e.handleSetDefaultTeam}})],1),a("div",{staticClass:"menu-teams"},[a("a-spin",{attrs:{spinning:e.teams.loading}},[0!==e.teams.data.length||e.teams.loading?e._e():a("a-empty"),e.teams.data.length>0?a("a-menu",{staticClass:"w-full",attrs:{mode:"inline"},on:{select:e.handleSelectedTeam},model:{value:e.selectedTeam,callback:function(t){e.selectedTeam=t},expression:"selectedTeam"}},e._l(e.teams.data,(function(t){return a("a-menu-item",{key:t},[e._v(" "+e._s(""===t?"未分组":t)+e._s(e.defaultMenuTeam===t?"（默认）":"")+" ")])})),1):e._e()],1)],1),a("a-popover",{attrs:{destroyTooltipOnHide:"",placement:"bottom",title:"新增分组",trigger:"click"},on:{visibleChange:e.handleTeamFormVisibleChange},model:{value:e.teams.form.visible,callback:function(t){e.$set(e.teams.form,"visible",t)},expression:"teams.form.visible"}},[a("template",{slot:"content"},[a("a-form-model",{ref:"teamForm",attrs:{model:e.teams.form.model,rules:e.teams.form.rules},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleCreateTeam.apply(null,arguments)}}},[a("a-form-model-item",{attrs:{prop:"team"}},[a("a-input",{attrs:{autoFocus:""},model:{value:e.teams.form.model.team,callback:function(t){e.$set(e.teams.form.model,"team",t)},expression:"teams.form.model.team"}})],1),a("a-form-model-item",{staticStyle:{"margin-bottom":"0"}},[a("a-button",{attrs:{type:"primary"},on:{click:e.handleCreateTeam}},[e._v(" 新增 ")])],1)],1)],1),a("a-button",{staticClass:"mt-3",attrs:{block:"",type:"primary"}},[e._v(" 新增分组 ")])],2)],2)],1),a("a-col",{staticClass:"pb-3",attrs:{lg:18,md:18,sm:24,xl:18,xs:24}},[a("a-card",{attrs:{bodyStyle:{padding:"16px"}}},[a("template",{slot:"title"},[a("span",[e._v(" "+e._s(e.menuListTitle)+" ")]),e.list.data.length<=0&&!e.list.loading?a("a-tooltip",{attrs:{slot:"action",title:"分组下的菜单为空时，该分组也不会保存"},slot:"action"},[a("a-icon",{staticClass:"cursor-pointer",attrs:{type:"info-circle-o"}})],1):e._e()],1),a("template",{slot:"extra"},[a("a-space",[a("ReactiveButton",{attrs:{disabled:e.list.data.length<=0,errored:e.formBatch.errored,loading:e.formBatch.saving,erroredText:"保存失败",loadedText:"保存成功",text:"保存"},on:{callback:function(t){e.formBatch.errored=!1},click:e.handleUpdateBatch}}),e.form.visible?a("a-button",{attrs:{type:"default"},on:{click:function(t){return e.handleCloseCreateMenuForm()}}},[e._v(" 取消新增 ")]):a("a-button",{attrs:{ghost:"",type:"primary"},on:{click:function(t){return e.handleOpenCreateMenuForm()}}},[e._v(" 新增 ")]),a("a-dropdown",{attrs:{trigger:["click"]}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{on:{click:function(t){e.menuInternalLinkSelector.visible=!0}}},[e._v(" 从系统预设链接添加 ")]),a("a-menu-item",{on:{click:e.handleDeleteBatch}},[e._v(" 删除当前组 ")])],1),a("a-button",[e._v(" 其他 "),a("a-icon",{attrs:{type:"down"}})],1)],1)],1)],1),a("a-spin",{attrs:{spinning:e.list.loading}},[e.form.visible?a("MenuForm",{attrs:{menu:e.form.model},on:{cancel:function(t){return e.handleCloseCreateMenuForm()},succeed:function(t){return e.handleCreateMenuSucceed()}}}):e._e(),0!==e.list.data.length||e.list.loading||e.form.visible?e._e():a("a-empty"),a("MenuTreeNode",{attrs:{excludedTeams:e.excludedTeams},on:{reload:e.handleListMenus},model:{value:e.list.data,callback:function(t){e.$set(e.list,"data",t)},expression:"list.data"}})],1)],2)],1)],1),a("MenuInternalLinkSelector",{attrs:{team:e.teams.selected},on:{reload:e.handleListMenus},model:{value:e.menuInternalLinkSelector.visible,callback:function(t){e.$set(e.menuInternalLinkSelector,"visible",t)},expression:"menuInternalLinkSelector.visible"}})],1)},i=[],l=a(76381),s=(a(82395),a(90195),a(31875),a(2923),a(18329),a(50990)),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-list",{attrs:{"item-layout":"horizontal"}},[a("draggable",e._b({staticClass:"item-container",attrs:{list:e.list,value:e.value,handle:".mover",tag:"div"},on:{end:function(t){e.isDragging=!1},input:e.emitter,start:function(t){e.isDragging=!0}}},"draggable",e.dragOptions,!1),[a("transition-group",e._l(e.realValue,(function(t){return a("div",{key:t.id},[a("a-list-item",{staticClass:"menu-item"},[a("a-list-item-meta",[a("span",{staticClass:"inline-block font-bold title",attrs:{slot:"title"},slot:"title"},[a("a-icon",{staticClass:"cursor-pointer mover",attrs:{type:"bars"}}),e._v(" "+e._s(t.name)+" "),"_blank"===t.target?a("a-tooltip",{attrs:{title:"外部链接"}},[a("a-icon",{attrs:{type:"link"}})],1):e._e(),e._v(" "+e._s(t.formVisible?"（正在编辑）":"")+" ")],1),a("span",{staticClass:"inline-block",attrs:{slot:"description"},slot:"description"},[a("a",{staticClass:"ant-anchor-link-title",attrs:{href:t.url,target:"_blank"}},[e._v(" "+e._s(t.url)+" ")])])]),a("template",{slot:"actions"},[t.formVisible?a("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(a){return e.handleCloseCreateMenuForm(t)}}},[e._v("取消编辑")]):a("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(a){return e.handleOpenEditForm(t)}}},[e._v(" 编辑 ")])],1),a("template",{slot:"actions"},[a("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(a){return e.handleDelete(t.id)}}},[e._v("删除")])],1),e.excludedTeams&&e.excludedTeams.length>0?a("template",{slot:"actions"},[a("a-dropdown",{attrs:{trigger:["click"]}},[a("a",{staticClass:"ant-dropdown-link",on:{click:function(e){return e.preventDefault()}}},[e._v(" 更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-sub-menu",{attrs:{title:"移动到分组"}},e._l(e.excludedTeams,(function(n,i){return a("a-menu-item",{key:i,on:{click:function(a){return e.handleMoveMenu(t,n)}}},[e._v(e._s(""===n?"未分组":n)+" ")])})),1)],1)],1)],1):e._e()],2),t.formVisible?a("MenuForm",{attrs:{menu:t},on:{cancel:function(a){return e.handleCloseCreateMenuForm(t)},succeed:function(a){return e.handleUpdateMenuSucceed(t)}}}):e._e(),a("div",{staticClass:"a-list-nested",staticStyle:{"margin-left":"44px"}},[a("MenuTreeNode",{attrs:{excludedTeams:e.excludedTeams,list:t.children},on:{reload:e.onReloadEmit}})],1)],1)})),0)],1)],1)},o=[],u=a(3048),c=a(91057),m=(a(70315),a(41479),a(77513)),d=a.n(m),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-form-model",{ref:"menuForm",attrs:{model:e.menuModel,rules:e.form.rules,labelAlign:"left"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleCreateOrUpdateMenu.apply(null,arguments)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{lg:8,md:12,sm:12,xl:8,xs:12}},[a("a-form-model-item",{attrs:{help:"* 页面上所显示的名称",label:"名称",prop:"name"}},[a("a-input",{attrs:{autoFocus:""},model:{value:e.menuModel.name,callback:function(t){e.$set(e.menuModel,"name",t)},expression:"menuModel.name"}})],1)],1),a("a-col",{attrs:{lg:8,md:12,sm:12,xl:8,xs:12}},[a("a-form-model-item",{attrs:{help:"* 菜单的地址",label:"地址",prop:"url"}},[a("a-input",{model:{value:e.menuModel.url,callback:function(t){e.$set(e.menuModel,"url",t)},expression:"menuModel.url"}})],1)],1),a("a-col",{attrs:{lg:8,md:12,sm:12,xl:8,xs:12}},[a("a-form-model-item",{attrs:{help:"* 请根据主题的支持情况选填",label:"图标",prop:"icon"}},[a("a-input",{model:{value:e.menuModel.icon,callback:function(t){e.$set(e.menuModel,"icon",t)},expression:"menuModel.icon"}})],1)],1),a("a-col",{attrs:{lg:8,md:12,sm:12,xl:8,xs:12}},[a("a-form-model-item",{attrs:{label:"打开方式",prop:"target"}},[a("a-radio-group",{attrs:{options:e.targets},model:{value:e.menuModel.target,callback:function(t){e.$set(e.menuModel,"target",t)},expression:"menuModel.target"}})],1)],1),a("a-col",{attrs:{lg:8,md:12,sm:12,xl:8,xs:12}},[a("a-form-model-item",{attrs:{colon:!1,label:" "}},[a("a-space",[a("ReactiveButton",{attrs:{errored:e.form.errored,loading:e.form.saving,erroredText:"保存失败",loadedText:"保存成功",text:"保存",type:"primary"},on:{callback:e.handleSavedCallback,click:e.handleCreateOrUpdateMenu}}),a("a-button",{on:{click:e.handleCancel}},[e._v("取消")])],1)],1)],1)],1)],1)],1)},f=[],p=a(1540),g=[{value:"_self",label:"当前窗口"},{value:"_blank",label:"新窗口"}],v={name:"MenuForm",model:{prop:"menu",event:"input"},props:{menu:{type:Object,default:function(){return{}}}},computed:{menuModel:{get:function(){return this.menu},set:function(e){this.$emit("input",e)}},isUpdateMode:function(){return!!this.menuModel.id}},data:function(){return{targets:g,form:{rules:{name:[{required:!0,message:"* 菜单名称不能为空",trigger:["change"]},{max:50,message:"* 菜单名称的字符长度不能超过 50",trigger:["change"]}],url:[{required:!0,message:"* 菜单地址不能为空",trigger:["change"]},{max:1023,message:"* 菜单地址的字符长度不能超过 1023",trigger:["change"]}],icon:[{max:50,message:"* 菜单图标的字符长度不能超过 50",trigger:["change"]}]},saving:!1,errored:!1}}},methods:{handleCreateOrUpdateMenu:function(){var e=this;e.$refs.menuForm.validate((function(t){t&&(e.form.saving=!0,e.isUpdateMode?p.Z.menu.update(e.menuModel.id,e.menuModel).catch((function(){e.form.errored=!0})).finally((function(){setTimeout((function(){e.form.saving=!1}),400)})):p.Z.menu.create(e.menuModel).catch((function(){e.form.errored=!0})).finally((function(){setTimeout((function(){e.form.saving=!1}),400)})))}))},handleSavedCallback:function(){var e=this;e.form.errored?e.form.errored=!1:(e.menuModel={target:"_self"},e.$emit("succeed"))},handleCancel:function(){this.$emit("cancel")}}},b=v,k=a(18156),y=(0,k.Z)(b,h,f,!1,null,null,null),C=y.exports,M=a(47590),x={name:"MenuTreeNode",components:{draggable:d(),MenuForm:C},props:{value:{required:!1,type:Array,default:null},list:{required:!1,type:Array,default:null},excludedTeams:{required:!1,type:Array,default:null}},data:function(){return{isDragging:!1}},computed:{dragOptions:function(){return{animation:300,group:"description",ghostClass:"ghost",chosenClass:"chosen",dragClass:"drag",emptyInsertThreshold:20}},realValue:function(){return this.value?this.value:this.list}},methods:{emitter:function(e){this.$emit("input",e)},handleDelete:function(e){var t=this;t.$confirm({title:"提示",content:"确定要删除当前菜单？",onOk:function(){p.Z.menu["delete"](e).finally((function(){t.onReloadEmit()}))}})},handleOpenEditForm:function(e){this.$set(e,"formVisible",!0)},handleUpdateMenuSucceed:function(e){this.handleCloseCreateMenuForm(e)},handleCloseCreateMenuForm:function(e){this.$set(e,"formVisible",!1)},handleMoveMenu:function(e,t){var a=this;return(0,c.Z)(regeneratorRuntime.mark((function n(){var i,l,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=(0,M.I8)(e),i.team=t,i.parentId=0,i.priority=0,l=function e(a){return a&&0!==a.length?a.reduce((function(a,n){var i=n.children.length>0?e(n.children):[];return n.team=t,[].concat((0,u.Z)(a),[n],(0,u.Z)(i))}),[]):[]},s=[i].concat((0,u.Z)(l(i.children))),a.$log.debug("menu list as flat list:",s),n.prev=7,n.next=10,p.Z.menu.updateInBatch(s);case 10:a.$emit("reload"),n.next=16;break;case 13:n.prev=13,n.t0=n["catch"](7),a.$log.error("Fail to update menu in batch",n.t0);case 16:case"end":return n.stop()}}),n,null,[[7,13]])})))()},onReloadEmit:function(){this.$emit("reload")}}},_=x,T=(0,k.Z)(_,r,o,!1,null,"bf844320",null),S=T.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{bodyStyle:{padding:"0 24px 24px"},width:1024,title:"从系统预设链接添加菜单"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[a("template",{slot:"footer"},[a("a-button",{on:{click:e.handleCancel}},[e._v(" 取消")]),a("ReactiveButton",{attrs:{disabled:e.menus&&e.menus.length<=0,errored:e.saveErrored,loading:e.saving,erroredText:"添加失败",loadedText:"添加成功",text:"添加"},on:{callback:e.handleCreateBatchCallback,click:e.handleCreateBatch}})],1),a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-spin",{attrs:{spinning:e.loading}},[a("div",{staticClass:"custom-tab-wrapper"},[a("a-tabs",{attrs:{animated:{inkBar:!0,tabPane:!1},"default-active-key":"1"}},[a("a-tab-pane",{key:"1",attrs:{"force-render":"",tab:"分类目录"}},[a("a-list",{attrs:{"item-layout":"horizontal"}},e._l(e.categories,(function(t,n){return a("a-list-item",{key:n},[a("a-list-item-meta",{attrs:{description:t.fullPath,title:t.name}}),a("template",{slot:"actions"},[a("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(a){return e.handleInsertPre(t.name,t.fullPath)}}},[a("a-icon",{attrs:{type:"plus-circle"}})],1)],1)],2)})),1)],1),a("a-tab-pane",{key:"2",attrs:{tab:"标签"}},[a("a-list",{attrs:{"item-layout":"horizontal"}},e._l(e.tags,(function(t,n){return a("a-list-item",{key:n},[a("a-list-item-meta",{attrs:{description:t.fullPath,title:t.name}}),a("template",{slot:"actions"},[a("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(a){return e.handleInsertPre(t.name,t.fullPath)}}},[a("a-icon",{attrs:{type:"plus-circle"}})],1)],1)],2)})),1)],1),a("a-tab-pane",{key:"3",attrs:{tab:"独立页面"}},[a("a-list",{attrs:{"item-layout":"horizontal"}},e._l(e.sheet.independents,(function(t,n){return a("a-list-item",{key:n},[a("a-list-item-meta",{attrs:{description:t.fullPath,title:t.title}}),a("template",{slot:"actions"},[a("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(a){return e.handleInsertPre(t.name,t.fullPath)}}},[a("a-icon",{attrs:{type:"plus-circle"}})],1)],1)],2)})),1)],1),a("a-tab-pane",{key:"4",attrs:{tab:"自定义页面"}},[a("a-list",{attrs:{"item-layout":"horizontal"}},e._l(e.sheet.customs.data,(function(t,n){return a("a-list-item",{key:n},[a("a-list-item-meta",{attrs:{description:t.fullPath,title:t.title}}),a("template",{slot:"actions"},[a("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(a){return e.handleInsertPre(t.name,t.fullPath)}}},[a("a-icon",{attrs:{type:"plus-circle"}})],1)],1)],2)})),1),a("div",{staticClass:"page-wrapper"},[a("a-pagination",{staticClass:"pagination",attrs:{current:e.sheet.customs.pagination.page,defaultPageSize:e.sheet.customs.pagination.size,pageSizeOptions:["10","20","50","100"],total:e.sheet.customs.pagination.total,showLessItems:"",showSizeChanger:""},on:{change:e.handleSheetPaginationChange,showSizeChange:e.handleSheetPaginationChange}})],1)],1),a("a-tab-pane",{key:"5",attrs:{tab:"其他"}},[a("a-list",{attrs:{"item-layout":"horizontal"}},e._l(e.otherInternalLinks,(function(t,n){return a("a-list-item",{key:n},[a("a-list-item-meta",{attrs:{description:t.url,title:t.name}}),a("template",{slot:"actions"},[a("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(a){return e.handleInsertPre(t.name,t.url)}}},[a("a-icon",{attrs:{type:"plus-circle"}})],1)],1)],2)})),1)],1)],1)],1)])],1),a("a-col",{attrs:{span:12}},[a("div",{staticClass:"custom-tab-wrapper"},[a("a-tabs",{attrs:{"default-active-key":"1"}},[a("a-tab-pane",{key:"1",attrs:{"force-render":"",tab:"备选"}},[a("a-list",{attrs:{"item-layout":"horizontal"}},e._l(e.menus,(function(t,n){return a("a-list-item",{key:n},[a("a-list-item-meta",{attrs:{description:t.url,title:t.name}}),a("template",{slot:"actions"},[a("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(t){return e.handleRemovePre(n)}}},[a("a-icon",{attrs:{type:"close-circle"}})],1)],1)],2)})),1)],1)],1)],1)])],1)],2)},L=[],I=(a(29888),a(45107),a(19003),a(55792),{name:"MenuInternalLinkSelector",props:{value:{type:Boolean,default:!1},team:{type:String,default:""}},data:function(){return{options:{},categories:[],tags:[],menus:[],sheet:{independents:[],customs:{data:[],pagination:{page:1,size:10,sort:null,total:1},queryParam:{page:0,size:10,sort:null}}},loading:!1,saving:!1,saveErrored:!1}},computed:{visible:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},otherInternalLinks:function(){var e=this.options,t=this.options.path_suffix?this.options.path_suffix:"";return[{name:"分类目录",url:"".concat(e.blog_url,"/").concat(e.categories_prefix).concat(t)},{name:"标签",url:"".concat(e.blog_url,"/").concat(e.tags_prefix).concat(t)},{name:"文章归档",url:"".concat(e.blog_url,"/").concat(e.archives_prefix).concat(t)},{name:"RSS",url:"".concat(e.blog_url,"/atom.xml")},{name:"网站地图",url:"".concat(e.blog_url,"/sitemap.xml")},{name:"网站地图",url:"".concat(e.blog_url,"/sitemap.html")}]}},watch:{visible:function(e){e&&(this.handleFetchAll(),this.handleListSheets())}},methods:{handleFetchAll:function(){var e=this;this.loading=!0,Promise.all([p.Z.option.listAsMapView(),p.Z.category.list({sort:[],more:!1}),p.Z.tag.list({more:!1}),p.Z.sheet.listIndependents()]).then((function(t){e.options=t[0].data,e.categories=t[1].data,e.tags=t[2].data,e.sheet.independents=t[3].data})).finally((function(){e.loading=!1}))},handleListSheets:function(){var e=this;this.sheet.customs.queryParam.page=this.sheet.customs.pagination.page-1,this.sheet.customs.queryParam.size=this.sheet.customs.pagination.size,this.sheet.customs.queryParam.sort=this.sheet.customs.pagination.sort,p.Z.sheet.list(this.sheet.customs.queryParam).then((function(t){e.sheet.customs.data=t.data.content,e.sheet.customs.pagination.total=t.data.total}))},handleSheetPaginationChange:function(e,t){this.sheet.customs.pagination.page=e,this.sheet.customs.pagination.size=t,this.handleListSheets()},handleInsertPre:function(e,t){this.menus.push({name:e,url:t,team:this.team})},handleRemovePre:function(e){this.menus.splice(e,1)},handleCancel:function(){this.menus=[],this.visible=!1,this.$emit("reload")},handleCreateBatch:function(){var e=this;this.saving=!0,p.Z.menu.createInBatch(this.menus).catch((function(){e.saveErrored=!1})).finally((function(){setTimeout((function(){e.saving=!1}),400)}))},handleCreateBatchCallback:function(){this.saveErrored?this.saveErrored=!1:this.handleCancel()}}}),F=I,B=(0,k.Z)(F,w,L,!1,null,null,null),P=B.exports,$=a(98906),Z={components:{PageView:s.B4,MenuTreeNode:S,MenuForm:C,MenuInternalLinkSelector:P},data:function(){return{list:{data:[],loading:!1},form:{visible:!1,model:{}},formBatch:{saving:!1,errored:!1},teams:{data:[],loading:!1,selected:null,form:{visible:!1,model:{team:null},rules:{team:[{required:!0,message:"分组名称不能为空",trigger:["change"]}]}},default:{saving:!1,errored:!1}},menuInternalLinkSelector:{visible:!1}}},computed:(0,l.Z)((0,l.Z)({},(0,$.Se)(["options"])),{},{computedMenusMoved:function(){var e=(0,M.I8)(this.list.data);return this.handleMenuMoved(0,e)},computedMenusWithoutLevel:function(){return this.handleGetMenusWithoutLevel(this.computedMenusMoved,[])},computedMenuIds:function(){return this.computedMenusWithoutLevel.map((function(e){return e.id}))},selectedTeam:{get:function(){return[this.teams.selected]},set:function(e){this.teams.selected=e[0]}},menuListTitle:function(){return""===this.teams.selected?"未分组":this.teams.selected},excludedTeams:function(){var e=this;return this.teams.data.filter((function(t){return t!==e.teams.selected}))},defaultMenuTeam:function(){return this.options.default_menu_team?this.options.default_menu_team:""}}),created:function(){this.handleListTeams()},methods:(0,l.Z)((0,l.Z)({},(0,$.nv)(["refreshOptionsCache"])),{},{handleListTeams:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.teams.loading=!0,p.Z.menu.listTeams().then((function(a){e.teams.data=a.data,e.teams.selected&&!t||(e.teams.selected=e.teams.data[0]),e.handleListMenus()})).finally((function(){e.teams.loading=!1}))},handleListMenus:function(){var e=this;this.list.data=[],this.list.loading=!0,p.Z.menu.listTreeViewByTeam(this.teams.selected).then((function(t){e.list.data=t.data})).finally((function(){e.list.loading=!1}))},handleMenuMoved:function(e,t){for(var a=0;a<t.length;a++)t[a].priority=a,t[a].parentId=e,t[a].team=this.teams.selected,t[a].children&&t[a].children.length>0&&this.handleMenuMoved(t[a].id,t[a].children);return t},handleGetMenusWithoutLevel:function(e,t){for(var a=0;a<e.length;a++){t.push(e[a]);var n=e[a].children;n.length>0&&this.handleGetMenusWithoutLevel(n,t)}return t},handleSelectedTeam:function(e){var t=e.key;this.teams.selected=t,this.handleCloseCreateMenuForm(),this.handleListMenus()},handleUpdateBatch:function(){var e=this;this.formBatch.saving=!0,p.Z.menu.updateInBatch(this.computedMenusWithoutLevel).catch((function(){e.formBatch.errored=!0})).finally((function(){setTimeout((function(){e.formBatch.saving=!1,e.handleListMenus()}),400)}))},handleDeleteBatch:function(){var e=this;e.$confirm({title:"提示",content:"确定要删除当前分组以及所有菜单？",onOk:function(){p.Z.menu.deleteInBatch(e.computedMenuIds).finally((function(){e.handleListTeams(!0)}))}})},handleTeamFormVisibleChange:function(e){e&&(this.teams.form.model.team=null)},handleCreateTeam:function(){var e=this;e.$refs.teamForm.validate((function(t){t&&(e.teams.data.includes(e.teams.form.model.team)||e.teams.data.push(e.teams.form.model.team),e.teams.selected=e.teams.form.model.team,e.teams.form.visible=!1,e.handleListMenus())}))},handleOpenCreateMenuForm:function(){this.form.visible=!0,this.form.model={team:this.teams.selected,target:"_self"}},handleCloseCreateMenuForm:function(){this.form.visible=!1,this.form.model={}},handleCreateMenuSucceed:function(){this.handleCloseCreateMenuForm(),this.handleListMenus()},handleSetDefaultTeam:function(){var e=this;this.teams.default.saving=!0,p.Z.option.saveMapView({default_menu_team:this.teams.selected}).catch((function(){e.teams.default.errored=!0})).finally((function(){setTimeout((function(){e.teams.default.saving=!1}),400)}))},handleSetDefaultTeamCallback:function(){this.teams.default.errored?this.teams.default.errored=!1:this.refreshOptionsCache()}})},O=Z,E=(0,k.Z)(O,n,i,!1,null,null,null),z=E.exports},53303:function(e,t,a){var n=a(15820),i=Math.floor,l=function(e,t){var a=e.length,o=i(a/2);return a<8?s(e,t):r(e,l(n(e,0,o),t),l(n(e,o),t),t)},s=function(e,t){var a,n,i=e.length,l=1;while(l<i){n=l,a=e[l];while(n&&t(e[n-1],a)>0)e[n]=e[--n];n!==l++&&(e[n]=a)}return e},r=function(e,t,a,n){var i=t.length,l=a.length,s=0,r=0;while(s<i||r<l)e[s+r]=s<i&&r<l?n(t[s],a[r])<=0?t[s++]:a[r++]:s<i?t[s++]:a[r++];return e};e.exports=l},52103:function(e,t,a){var n=a(82678),i=n.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},76044:function(e,t,a){var n=a(82678);e.exports=/MSIE|Trident/.test(n)},97551:function(e,t,a){var n=a(82678),i=n.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},19003:function(e,t,a){"use strict";var n=a(79644),i=a(33691),l=a(77925),s=a(43207),r=a(71768),o=a(43150),u=a(32640),c=a(53303),m=a(29415),d=a(52103),h=a(76044),f=a(3718),p=a(97551),g=[],v=i(g.sort),b=i(g.push),k=u((function(){g.sort(void 0)})),y=u((function(){g.sort(null)})),C=m("sort"),M=!u((function(){if(f)return f<70;if(!(d&&d>3)){if(h)return!0;if(p)return p<603;var e,t,a,n,i="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(n=0;n<47;n++)g.push({k:t+n,v:a})}for(g.sort((function(e,t){return t.v-e.v})),n=0;n<g.length;n++)t=g[n].k.charAt(0),i.charAt(i.length-1)!==t&&(i+=t);return"DGBEFHACIJK"!==i}})),x=k||!y||!C||!M,_=function(e){return function(t,a){return void 0===a?-1:void 0===t?1:void 0!==e?+e(t,a)||0:o(t)>o(a)?1:-1}};n({target:"Array",proto:!0,forced:x},{sort:function(e){void 0!==e&&l(e);var t=s(this);if(M)return void 0===e?v(t):v(t,e);var a,n,i=[],o=r(t);for(n=0;n<o;n++)n in t&&b(i,t[n]);c(i,_(e)),a=i.length,n=0;while(n<a)t[n]=i[n++];while(n<o)delete t[n++];return t}})},55792:function(e,t,a){"use strict";var n=a(79644),i=a(8432),l=a(64235),s=a(69343),r=a(71768),o=a(43207),u=a(9510),c=a(51903),m=a(43297),d=m("splice"),h=i.TypeError,f=Math.max,p=Math.min,g=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var a,n,i,m,d,b,k=o(this),y=r(k),C=l(e,y),M=arguments.length;if(0===M?a=n=0:1===M?(a=0,n=y-C):(a=M-2,n=p(f(s(t),0),y-C)),y+a-n>g)throw h(v);for(i=u(k,n),m=0;m<n;m++)d=C+m,d in k&&c(i,m,k[d]);if(i.length=n,a<n){for(m=C;m<y-n;m++)d=m+n,b=m+a,d in k?k[b]=k[d]:delete k[b];for(m=y;m>y-n+a;m--)delete k[m-1]}else if(a>n)for(m=y-n;m>C;m--)d=m+n-1,b=m+a-1,d in k?k[b]=k[d]:delete k[b];for(m=0;m<a;m++)k[m+C]=arguments[m+2];return k.length=y-n+a,i}})}}]);