<template>
<el-row :gutter="20">
  <el-col :span="6" :offset="9">
        <img alt="Vue logo" src="../assets/logo.png">
  <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
  <el-form-item
    label="账号"
    prop="username"
    :rules="[
      { required: true, message: '账号不能为空'}
    ]"
  >
    <el-input type="username" v-model.number="numberValidateForm.username" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item
    label="密码"
    prop="password"
    :rules="[
      { required: true, message: '年龄不能为空'}
    ]"
  >
    <el-input type="password" v-model.number="numberValidateForm.password" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
  </el-form-item>
</el-form>
</el-col>
</el-row>
</template>

<script>
  export default {
    data() {
      return {
        numberValidateForm: {
          username: '',
          password: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push('/home')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
