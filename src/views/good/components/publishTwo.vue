<template>
  <div class="two">
    <el-row class="two_num">
      <el-col :span="24" class="num_one">商品类型</el-col>
    </el-row>

    <!-- 第二行 -->
    <el-row class="three">
      <el-col :span="3" class="num_three">
        <span>实物商品</span>
        <span>（物流发货）</span>
      </el-col>
      <el-col :span="3" class="num_three">
        <span>实物商品</span>
        <span>（物流发货）</span>
      </el-col>
      <el-col :span="3" class="num_three">
        <span>实物商品</span>
        <span>（物流发货）</span>
      </el-col>
      <el-col :span="3" class="num_three">
        <span>实物商品</span>
        <span>（物流发货）</span>
      </el-col>
      <el-col :span="3" class="num_three">
        <span>实物商品</span>
        <span>（物流发货）</span>
      </el-col>
      <el-col :span="3"></el-col>
      <el-col :span="3"></el-col>
      <el-col :span="3"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
body {
  margin: 0;
  padding: 0;
}
.two {
  margin-top: 20px;
  .num_one {
    text-align: left;
    height: 38px;
    line-height: 38px;
    background: rgb(248, 248, 248);
    font-weight: bold;
  }
  .three {
    margin-top: 20px;
    .num_three {
      width: 117px;
      height: 52px;
      border-radius: 2px;
      background: white;
      text-align: center;
      line-height: 52px;
      border: 1px solid #666;
      margin-right: 6px;
      & > span:nth-child(1) {
        display: block;
        font-size: 12px;
        width: 115px;
        height: 16px;
        margin-top: -8px;
      }
      & > span:nth-child(2) {
        display: block;
        font-size: 12px;
        color: #666;
        width: 115px;
        height: 16px;
      }
    }
  }
}
</style>