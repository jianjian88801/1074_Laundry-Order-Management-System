
var projectName = '洗衣店订单管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '店铺信息',
	url: './pages/dianpuxinxi/list.html'
}, 

{
	name: '交流区',
	url: './pages/forum/list.html'
}, 
{
	name: '系统公告',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springboot4691l/admin/dist/index.html";

var cartFlag = false

var chatFlag = false


chatFlag = true


var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"顾客","menuJump":"列表","tableName":"guke"}],"menu":"顾客管理"},{"child":[{"buttons":["新增","查看","修改","删除","审核"],"menu":"店家","menuJump":"列表","tableName":"dianjia"}],"menu":"店家管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"店铺信息","menuJump":"列表","tableName":"dianpuxinxi"}],"menu":"店铺信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"衣服类型","menuJump":"列表","tableName":"yifuleixing"}],"menu":"衣服类型管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"洗衣信息","menuJump":"列表","tableName":"xiyixinxi"}],"menu":"洗衣信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"订单信息","menuJump":"列表","tableName":"dingdanxinxi"}],"menu":"订单信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"订单进度","menuJump":"列表","tableName":"dingdanjindu"}],"menu":"订单进度管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"交流区","tableName":"forum"}],"menu":"交流区"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"在线客服","tableName":"chat"},{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"系统公告","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","预约"],"menu":"店铺信息列表","menuJump":"列表","tableName":"dianpuxinxi"}],"menu":"店铺信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","预约"],"menu":"店铺信息","menuJump":"列表","tableName":"dianpuxinxi"}],"menu":"店铺信息管理"},{"child":[{"buttons":["查看","支付"],"menu":"洗衣信息","menuJump":"列表","tableName":"xiyixinxi"}],"menu":"洗衣信息管理"},{"child":[{"buttons":["查看"],"menu":"订单信息","menuJump":"列表","tableName":"dingdanxinxi"}],"menu":"订单信息管理"},{"child":[{"buttons":["查看"],"menu":"订单进度","menuJump":"列表","tableName":"dingdanjindu"}],"menu":"订单进度管理"}],"frontMenu":[{"child":[{"buttons":["查看","预约"],"menu":"店铺信息列表","menuJump":"列表","tableName":"dianpuxinxi"}],"menu":"店铺信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"顾客","tableName":"guke"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"店铺信息","menuJump":"列表","tableName":"dianpuxinxi"}],"menu":"店铺信息管理"},{"child":[{"buttons":["新增","查看"],"menu":"衣服类型","menuJump":"列表","tableName":"yifuleixing"}],"menu":"衣服类型管理"},{"child":[{"buttons":["查看","审核","进度","删除"],"menu":"洗衣信息","menuJump":"列表","tableName":"xiyixinxi"}],"menu":"洗衣信息管理"},{"child":[{"buttons":["查看","审核","删除","上传进度"],"menu":"订单信息","menuJump":"列表","tableName":"dingdanxinxi"}],"menu":"订单信息管理"},{"child":[{"buttons":["查看","删除","修改"],"menu":"订单进度","menuJump":"列表","tableName":"dingdanjindu"}],"menu":"订单进度管理"}],"frontMenu":[{"child":[{"buttons":["查看","预约"],"menu":"店铺信息列表","menuJump":"列表","tableName":"dianpuxinxi"}],"menu":"店铺信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"否","roleName":"店家","tableName":"dianjia"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
