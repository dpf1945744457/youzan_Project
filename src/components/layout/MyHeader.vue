<template lang="html">
  <div class="header">
    <!-- 当渲染首页显示 -->
    <div v-if="$route.path === '/'">
      <div class="header-left">
        <span v-text='userinfo.username' >Fei</span>
        <span class="blue">试用期</span>
        <span>SVIP</span>
        <span>有赞担保</span>
      </div>
      <div class="header-right">
        <span >Fei</span>
        <i class="fa fa-user-circle" @click="open"></i>
        <!-- <i class="fa fa-angle-right"></i> -->
      </div>
    </div>
    <div v-else>
      面包屑导航
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("user", ["userinfo"])
  },
  mounted() {
    console.log("route----", this.$route);
  },
  methods: {
    open() {
      this.$confirm("此操作将推出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({

            type: "success",
            message: "退出成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  overflow: hidden;
  line-height: 60px;
  font-size: 12px;
  box-sizing: border-box;
  padding: 0 10px;
  .header-left {
    float: left;
    cursor: pointer;
    > span:nth-child(1) {
      color: #323232;
      font-size: 16px;
      font-weight: bold;
    }
    > span:nth-child(2),
    span:nth-child(3),
    span:nth-child(4) {
      // color: #155bd4;
      display: inline-block;
      border: 1px solid #999;
      height: 20px;
      vertical-align: middle;
      line-height: 20px;
      margin-left: 10px;
      padding: 0 3px;
      border-radius: 3px;
    }
    span.blue {
      color: #155bd4;
      border: 1px solid #155bd4;
    }
  }
  .header-right {
    float: right;
    cursor: pointer;
    i {
      font-size: 20px;
      color: #999999;
    }
    span {
      padding: 0 10px;
      font-size: 14px;
      color: #999999;
      font-weight: bold;
    }
  }
}
</style>
