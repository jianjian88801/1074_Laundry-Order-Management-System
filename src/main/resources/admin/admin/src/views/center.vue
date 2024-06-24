<template>
  <div>
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      label-width="80px"
    >  
     <el-row>
      <el-col :span="12">
        <el-form-item   v-if="flag=='guke'"  label="顾客账号" prop="gukezhanghao">
          <el-input v-model="ruleForm.gukezhanghao" readonly              placeholder="顾客账号" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='guke'"  label="顾客姓名" prop="gukexingming">
          <el-input v-model="ruleForm.gukexingming"               placeholder="顾客姓名" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='guke'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie" placeholder="请选择性别">
            <el-option
                v-for="(item,index) in gukexingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='guke'"  label="手机号码" prop="shoujihaoma">
          <el-input v-model="ruleForm.shoujihaoma"               placeholder="手机号码" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='guke'"  label="家庭地址" prop="jiatingdizhi">
          <el-input v-model="ruleForm.jiatingdizhi"               placeholder="家庭地址" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">  
        <el-form-item v-if="flag=='guke'" label="个人照片" prop="gerenzhaopian">
          <file-upload
          tip="点击上传个人照片"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.gerenzhaopian?ruleForm.gerenzhaopian:''"
          @change="gukegerenzhaopianUploadChange"
          ></file-upload>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='dianjia'"  label="店家账号" prop="dianjiazhanghao">
          <el-input v-model="ruleForm.dianjiazhanghao" readonly              placeholder="店家账号" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='dianjia'"  label="店家姓名" prop="dianjiaxingming">
          <el-input v-model="ruleForm.dianjiaxingming"               placeholder="店家姓名" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='dianjia'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie" placeholder="请选择性别">
            <el-option
                v-for="(item,index) in dianjiaxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='dianjia'"  label="手机号码" prop="shoujihaoma">
          <el-input v-model="ruleForm.shoujihaoma"               placeholder="手机号码" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">  
        <el-form-item v-if="flag=='dianjia'" label="个人照片" prop="gerenzhaopian">
          <file-upload
          tip="点击上传个人照片"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.gerenzhaopian?ruleForm.gerenzhaopian:''"
          @change="dianjiagerenzhaopianUploadChange"
          ></file-upload>
        </el-form-item>
      </el-col>
      <el-form-item v-if="flag=='users'" label="用户名" prop="username">
        <el-input v-model="ruleForm.username" 
        placeholder="用户名"></el-input>
      </el-form-item>
      <el-col :span="24">
      <el-form-item>
        <el-button type="primary" @click="onUpdateHandler">修 改</el-button>
      </el-form-item>
      </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
      ruleForm: {},
      flag: '',
      usersFlag: false,
      gukexingbieOptions: [],
      dianjiaxingbieOptions: [],
    };
  },
  mounted() {
    var table = this.$storage.get("sessionTable");
    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.gukexingbieOptions = "男,女".split(',')
    this.dianjiaxingbieOptions = "男,女".split(',')
  },
  methods: {
    gukegerenzhaopianUploadChange(fileUrls) {
        this.ruleForm.gerenzhaopian = fileUrls;
    },
    dianjiagerenzhaopianUploadChange(fileUrls) {
        this.ruleForm.gerenzhaopian = fileUrls;
    },
    onUpdateHandler() {
      if((!this.ruleForm.gukezhanghao)&& 'guke'==this.flag){
        this.$message.error('顾客账号不能为空');
        return
      }
      if((!this.ruleForm.mima)&& 'guke'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
      if( 'guke' ==this.flag && this.ruleForm.shoujihaoma&&(!isMobile(this.ruleForm.shoujihaoma))){
        this.$message.error(`手机号码应输入手机格式`);
        return
      }
      if((!this.ruleForm.dianjiazhanghao)&& 'dianjia'==this.flag){
        this.$message.error('店家账号不能为空');
        return
      }
      if((!this.ruleForm.mima)&& 'dianjia'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
      if( 'dianjia' ==this.flag && this.ruleForm.shoujihaoma&&(!isMobile(this.ruleForm.shoujihaoma))){
        this.$message.error(`手机号码应输入手机格式`);
        return
      }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
	this.$message.error(`用户名不能为空`);
        return	
      }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
