<template>
  <div class="mainSeven">
    <el-row class="first_two">
      <el-col :span="1">
        <i class="el-icon-notebook-1"></i>
      </el-col>
      <el-col :span="18" class="two_span">
        <span>未创建客户分群</span>
        <span>通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
      </el-col>
      <el-col :span="5" class="three_span">立即创建</el-col>
    </el-row>

     <el-row class="first_two">
      <el-col :span="1">
        <i class="el-icon-notebook-1"></i>
      </el-col>
      <el-col :span="18" class="two_span">
        <span>未创建客户分群</span>
        <span>通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
      </el-col>
      <el-col :span="5" class="three_span">立即创建</el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.mainSeven {
  padding: 12px;
  box-sizing: border-box;
  height: 250px;
  overflow: auto;
  .first_two {
    margin-top: 15px;
    .el-icon-notebook-1 {
      color: red;
    }
    .two_span > span:nth-child(1) {
      font-size: 14px;
      color: #000;
    }
    .two_span > span:nth-child(2) {
      font-size: 14px;
      color: #666;
    }
    .three_span {
      color: blue;
      text-align: center;
    }
  }
}
</style>