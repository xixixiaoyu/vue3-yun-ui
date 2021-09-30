<demo>
表单组件
</demo>
<template>
  <div>
    <lg-form class="form" ref="form" :model="user" :rules="rules">
      <lg-form-item label="用户名" prop="username">
        <!-- <lg-input v-model="user.username"></lg-input> -->
        <lg-input
          :value="user.username"
          @input="user.username = $event"
          placeholder="请输入用户名"
        ></lg-input>
      </lg-form-item>
      <lg-form-item label="密码" prop="password">
        <lg-input type="password" v-model="user.password"></lg-input>
      </lg-form-item>
      <lg-form-item>
        <lg-button type="primary" @click="login">登 录</lg-button>
      </lg-form-item>
    </lg-form>
  </div>
</template>

<script>
import LgForm from "../../lib/Form/Form.vue";
import LgFormItem from "../../lib/Form/FormItem.vue";
import LgInput from "../../lib/Form/Input.vue";
import LgButton from "../../lib/Button.vue";
export default {
  components: {
    LgForm,
    LgFormItem,
    LgInput,
    LgButton,
  },
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
          },
          {
            min: 6,
            max: 12,
            message: "请输入6-12位密码",
          },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert("验证成功");
        } else {
          alert("验证失败");
          return false;
        }
      });
    },
  },
};
</script>
