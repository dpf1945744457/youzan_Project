<template>
  <div class="more">
    <el-row>
      <el-col :span="24" class="more_one">更多服务</el-col>
    </el-row>

    <!-- 第二行 -->

    <el-row class="more_two">
      <el-col :span="3" class="two_num">
        <i class="fa fa-camera-retro fa-2x"></i>
        <span>零售</span>
      </el-col>
      <el-col :span="3" class="two_num">
        <i class="fa fa-camera-retro fa-2x"></i>
        <span>教育</span>
      </el-col>
      <el-col :span="3" class="two_num">
        <i class="fa fa-camera-retro fa-2x"></i>
        <span>美业</span>
      </el-col>
      <el-col :span="3" class="two_num">
        <i class="fa fa-camera-retro fa-2x"></i>
        <span>有赞精选</span>
      </el-col>
      <el-col :span="3" class="two_num">
        <i class="fa fa-camera-retro fa-2x"></i>
        <span>有赞担保</span>
      </el-col>
      <el-col :span="3" class="two_num">
        <i class="fa fa-camera-retro fa-2x"></i>
        <span>跨境服务</span>
      </el-col>
      <el-col :span="3" class="two_num">
        <i class="fa fa-camera-retro fa-2x"></i>
        <span>有赞分销</span>
      </el-col>
      <el-col :span="3" class="two_num">
        <i class="fa fa-camera-retro fa-2x"></i>
        <span>我要推广</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
// body{
//     // margin: 0;
// }
.more {
  background: white;
  height: 180px;
  width: 1036px;
  padding: 15px;
  margin-top: 20px;
  .more_one {
    font-size: 16px;
    font-weight: bold;
  }
  .more_two {
    background: white;
    padding-top: 20px;
    box-sizing: border-box;
    .two_num {
     
      height: 80px;
      text-align: center;
      line-height: 80px;
      & > i {
        text-align: center;
        display: block;
      }
    }
  }
}
</style>