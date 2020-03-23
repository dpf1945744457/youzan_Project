<template>
  <div class="mainOne">
    <!-- 两行第一列 -->
    <el-row class="first_one">
      <el-col :span="8">
        <span>代发订单</span>
        <span>0</span>
      </el-col>
      <el-col :span="8">
        <span>待回复客户数</span>
        <span>0</span>
      </el-col>
      <el-col :span="8">
        <span>近滞销商品</span>
        <span>0</span>
      </el-col>
    </el-row>
    <!-- 两行第二列 -->
    <el-row class="first_one">
      <el-col :span="8">
        <span>待退款订单</span>
        <span>0</span>
      </el-col>
      <el-col :span="8">
        <span>排队中客户数</span>
        <span>0</span>
      </el-col>
      <el-col :span="8">
        <span>库存过少商品</span>
        <span>0</span>
      </el-col>
    </el-row>

    <!-- 第三行 -->
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
body {
  margin: 0;
  padding: 0;
}
.mainOne {
  padding: 12px;
  box-sizing: border-box;
  height: 250px;
  overflow: auto;
  .first_one {
    width: 804px;
    height: 45px;
    background: rgb(247, 248, 250);
    line-height: 45px;
    .el-col-8 {
      text-align: center;
      & > span:nth-child(2) {
        color: red;
        font-weight: bold;
        font-size: 16px;
        margin-left: 6px;
      }
    }
  }
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