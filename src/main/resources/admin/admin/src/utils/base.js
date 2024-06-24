const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot4691l/",
            name: "springboot4691l",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot4691l/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "洗衣店订单管理系统"
        } 
    }
}
export default base
