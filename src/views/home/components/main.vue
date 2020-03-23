<template>
  <div class="main">
    <el-row>
      <el-col :span="8" class="first">
        <el-row>
          <!-- 第一行 -->
          <el-col :span="24">
            <h4>智能助手</h4>
          </el-col>
          <!-- 第二行 -->
          <el-row>
            <el-col :span="24">
              <el-progress
                type="circle"
                :percentage="68"
                stroke-width="20"
                width="144"
                color="blue"
              >dsg</el-progress>
            </el-col>
          </el-row>
          <!-- 第三行 -->
          <el-col :span="24">
            <el-button type="primary">去处理</el-button>
          </el-col>
        </el-row>
      </el-col>
      <!-- 第一行第二列 -->
      <el-col :span="16" class="second">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="全部事项" name="first">
            <MainPushOne></MainPushOne>
          </el-tab-pane>
          <el-tab-pane label="店铺基础" name="second">
            <MainPushTwo></MainPushTwo>
          </el-tab-pane>
          <el-tab-pane label="商品体验" name="third">
            <MainPushThree></MainPushThree>
          </el-tab-pane>
          <el-tab-pane label="物流体验" name="fourth">
            <MainPushFour></MainPushFour>
          </el-tab-pane>
          <el-tab-pane label="售后体验" name="five">
            <MainPushFive></MainPushFive>
          </el-tab-pane>
          <el-tab-pane label="服务体验" name="six">
            <MainPushSix></MainPushSix>
          </el-tab-pane>
          <el-tab-pane label="流量表现" name="seven">
            <MainPushSeven></MainPushSeven>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const MainPushOne = () => import("./mainpush1.vue");
const MainPushTwo = () => import("./mainpush2.vue");
const MainPushThree = () => import("./mainpush3.vue");
const MainPushFour = () => import("./mainpush4.vue");
const MainPushFive = () => import("./mainpush5.vue");
const MainPushSix = () => import("./mainpush6.vue");
const MainPushSeven = () => import("./mainpush7.vue");

export default {
  data() {
    return {
      activeName: "first"
    };
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {
    MainPushOne,
    MainPushTwo,
    MainPushThree,
    MainPushFour,
    MainPushFive,
    MainPushSix,
    MainPushSeven
  }
};
</script>

<style lang='scss' scoped>
.main {
  padding: 10px;
  box-sizing: border-box;
  .first {
    width: 233px;
    height: 296px;
    border-right: 1px solid #666;
    .el-col-24 {
      margin-left: 20px;
      .el-button {
        margin-left: 30px;
        margin-top: 20px;
        width: 92px;
        height: 32px;
        text-align: center;
      }
    }
  }
}
</style>