import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import forum from '@/views/modules/forum/list'
    import news from '@/views/modules/news/list'
    import yifuleixing from '@/views/modules/yifuleixing/list'
    import dianjia from '@/views/modules/dianjia/list'
    import discussdianpuxinxi from '@/views/modules/discussdianpuxinxi/list'
    import dianpuxinxi from '@/views/modules/dianpuxinxi/list'
    import chat from '@/views/modules/chat/list'
    import xiyixinxi from '@/views/modules/xiyixinxi/list'
    import dingdanxinxi from '@/views/modules/dingdanxinxi/list'
    import guke from '@/views/modules/guke/list'
    import dingdanjindu from '@/views/modules/dingdanjindu/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/forum',
        name: '交流区',
        component: forum
      }
      ,{
	path: '/news',
        name: '系统公告',
        component: news
      }
      ,{
	path: '/yifuleixing',
        name: '衣服类型',
        component: yifuleixing
      }
      ,{
	path: '/dianjia',
        name: '店家',
        component: dianjia
      }
      ,{
	path: '/discussdianpuxinxi',
        name: '店铺信息评论',
        component: discussdianpuxinxi
      }
      ,{
	path: '/dianpuxinxi',
        name: '店铺信息',
        component: dianpuxinxi
      }
      ,{
	path: '/chat',
        name: '在线客服',
        component: chat
      }
      ,{
	path: '/xiyixinxi',
        name: '洗衣信息',
        component: xiyixinxi
      }
      ,{
	path: '/dingdanxinxi',
        name: '订单信息',
        component: dingdanxinxi
      }
      ,{
	path: '/guke',
        name: '顾客',
        component: guke
      }
      ,{
	path: '/dingdanjindu',
        name: '订单进度',
        component: dingdanjindu
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
