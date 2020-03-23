<template>
  <!-- 建议 -->
  <div class="advice">
    <el-row>
      <el-col :span="24" class="letter_one">
        <span>经营建议</span>
      </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row class="letter_two" >
      <el-col :span="6" class="two_num num_first" >
       <span>微信小程序</span>
       <span>抢占微信社交流量红利</span>
      </el-col>
      <el-col :span="6" class="two_num num_two" >
         <span>百度小程序</span>
       <span>打造商家新官网</span>
      </el-col>
      <el-col :span="6" class="two_num num_three">
          <span>分销市场</span>
       <span>一键上架，快速补充货源</span>
      </el-col>
      <el-col :span="6" class="two_num num_four">
       <span>多人拼团</span>
       <span>裂变式营销玩法</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.advice {
  width: 1128px;
  height: 198px;
  background: white;
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
  .letter_one {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .letter_two{
      text-align: center;
      .num_first{
          background: rgb(247,248,250)
      }
       .num_two{
          background: rgb(247,248,250)
      }
       .num_three{
          background: rgb(247,248,250)
      }
       .num_four{
          background: rgb(247,248,250)
      }
      .two_num{
          width: 260px;
          height: 116px;
          line-height: 116px;
          border-radius: 4px;
          margin: 4px;
          &>span{
              display: block;
              height: 20px;
              width: 260px;
          } 
          &>span:nth-child(1){
              font-size: 20px;
              color: black;
              display: block;
              margin-top:-20px;
              margin-bottom: 10px;
          }
           &>span:nth-child(2){
              font-size: 16px;
              color: #666;
          }
      }
  }
}
</style>