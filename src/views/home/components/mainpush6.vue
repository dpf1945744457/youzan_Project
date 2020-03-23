<template>
  <div class="mainSix">
    <el-row>
      <el-col :span="24" class="mainFour_one">
        <i class="el-icon-circle-check"></i>
        <span>你已完成物流体验的所有任务</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="mainFour_two" >
        <span>看推荐资讯，助力店铺经营</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.mainSix{
    text-align: center;
    padding-top: 50px;
    box-sizing: border-box;
    .mainFour_one{
        &>i{
            color:green;
            font-size: 30px;
            margin-right: 5px;
            text-align: center
        }
    }
    .mainFour_two{
        &>span{
            color: #666;
            font-size: 14px;
        }
    }

}
</style>