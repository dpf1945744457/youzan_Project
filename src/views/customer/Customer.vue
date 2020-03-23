<template>
  <div class="customer">
    <!-- 第一次 -->
    <el-row class="customer_num">
      <el-col :span="24" class="num_one">
        <span>实时概况</span>
        <span>更新时间：2020-01-12 23：21：59</span>
        <span>
          <i class="el-icon-warning-outline"></i>
        </span>
      </el-col>
    </el-row>

    <!-- 第二行 -->
    <el-row>
      <el-col :span="12">
          <!-- 三列 -->
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.customer {
  padding: 20px 0 0 10px;
  box-sizing: border-box;
  .num_one {
    & > span:nth-of-type(1) {
      font-size: 20px;
      margin-right: 6px;
    }
    & > span:nth-of-type(2) {
      color: #666;
      font-size: 14px;
      margin-right: 4px;
    }
  }
}
</style>