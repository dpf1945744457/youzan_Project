<template>
  <div class="centre_one">
    <!-- 第一行 -->
    <el-row>
      <el-col :span="24" class="use">交流学习</el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row class="use_first">
      <el-col :span="6" class="use_num">
        <span>
          <i class="fa fa-file-text fa-5x"></i>
        </span>
        <span>发布商品</span>
     
      </el-col>
      <el-col :span="6" class="use_num">
        <span>
          <i class="fa fa-user fa-5x"></i>
        </span>
        <span>销售员</span>
      </el-col>
      <el-col :span="6" class="use_num">
        <span>
          <i class="fa fa-comments fa-5x"></i>
        </span>
        <span>多网点</span>
      </el-col>
      <el-col :span="6" class="use_num">
        <span>
          <i class="fa fa-comments fa-5x"></i>
        </span>
        <span>小程序</span>
      </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row class="use_first">
      <el-col :span="6" class="use_num">
        <span>
          <i class="fa fa-comments fa-5x"></i>
        </span>
        <span>微信公众号</span>
      </el-col>
      <el-col :span="6" class="use_num">
        <span>
          <i class="fa fa-database fa-5x"></i>
        </span>
        <span>收入/体现</span>
      </el-col>
      <el-col :span="6" class="use_num">
        <span>
          <i class="fa fa-comments fa-5x"></i>
        </span>
        <span>智能客服</span>
      </el-col>
      <el-col :span="6" class="use_num">
        <span>
          <i class="fa fa-comments fa-5x"></i>
        </span>
        <span>订单查询</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
html,
body {
  margin: 0;
  padding: 0;
}
.centre_one {
  background: white;
  height: 180px;
  width: 1036px;
  padding: 15px;
  margin-top: 20px;
  .use {
    font-size: 16px;
    font-weight: bold;
  }
  .use_num {
    text-align: center;
   
    & > span:nth-child(1) {
      background: rgb(0, 191, 86);
      display: inline-block;
      height: 30px;
      width: 30px;
      text-align: center;
      line-height: 30px;
      margin-right: 4px;
      & > i {
        font-size: 22px;
        color: white;
      }
    }
  }
  .use_first {
    margin-top: 30px;
  }
}
</style>