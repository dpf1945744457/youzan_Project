<template>
  <div class="header">
    <!-- 第一行 -->
    <el-row class="first">
      <el-col :span="2" class="first_one">
        <p>实施概况</p>
      </el-col>
      <el-col :span="5" class="first_two">
        <p>
          更新时间：2020-01-10 20:49:56
          <i class="el-icon-question"></i>
          <i class="el-icon-lollipop"></i>
        </p>
      </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row class="second">
      <!-- 第二行第一列 -->
      <el-col :span="12">
        <!-- 两行第一列 -->
        <el-row class="second_num">
          <el-col :span="6" class="second_one">
            <span>支付订单数</span>
            <span>0</span>
            <span>昨日：0</span>
          </el-col>
          <el-col :span="6" class="second_one">
            <span>支付金额(元)</span>
            <span>0.00</span>
            <span>昨日：0</span>
          </el-col>
        </el-row>
        <!-- 两行第二列 -->
        <el-row class="second_num">
          <el-col :span="6" class="second_one">
            <span>浏览量</span>
            <span>1</span>
            <span>昨日：0</span>
          </el-col>
          <el-col :span="6" class="second_one">
            <span>累计客户</span>
            <span>0</span>
          </el-col>
        </el-row>
      </el-col>


      <!-- 第二行第二列 -->
      <el-col :span="12" class="second_one">
          <!-- 两列第一列 -->
        <el-row class="second_num">
          <el-col :span="6" class="second_one">
            <span>本月目标（元）</span>
            <span>--</span>
           
          </el-col>
          <el-col :span="6" class="second_one">
            <span>完成进度（%）</span>
            <span>--</span>
            <span>昨日：0</span>
          </el-col>
        </el-row>
        <!-- 两行第二列 -->
        <el-row class="second_num">
          <el-col :span="6" class="second_one">
            <span>可用店铺余额（元）</span>
            <span>0.00</span>
           
          </el-col>
          <el-col :span="6" class="second_one">
            <span>待结算（元）</span>
            <span>0.00</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
html,
p {
  margin: 0;
  padding: 0;
}
body{
   background: #666;
}
.header {
  padding: 10px;
  box-sizing: border-box;
 
  margin-bottom: 20px;
  .el-col-12:nth-child(1){
    border-right: 1px solid #666;
  }
  .first {
    margin-right: 10px;
    height: 26px;
    line-height: 26px;
    margin-top: 10px;
    .first_one {
      font-size: 20px;
      height: 24px;
      text-align: right;
      margin-left: -30px;
      
    
    }
    .first_two {
      height: 26px;
      width: 280px;
      & > p {
        color: #666;
        font-size: 16px;
        text-align: left;
      }
    }
  }
  .second {
    padding: 10px;
    box-sizing: border-box;
    .second_num {
      margin: 10px 0;
      .second_one {
        height: 86px;
        width: 202px;
        margin-left: 40px;
        & > span {
          display: block;
          margin: 8px 0;
        }
        & > span:nth-child(1) {
          font-size: 14px;
          color: #666;
        }
        & > span:nth-child(2) {
          font-weight: bold;
          font-size: 20px;
          color: #000;
        }
      }
    }
  }
}
</style>