<template>
  <div class="one">
    <el-row>
      <el-col :span="12" class="one_num">
        <el-button class="button_one">默认按钮</el-button>
      </el-col>
      <el-col :span="12">
        <el-button class="button_two">默认按钮</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.one{
    .button_one{
        width: 99%;
        height: 44px;
        background: rgb(51,136,255)
    }
     .button_two{
        width: 99%;
        height: 44px;
        background: rgb(248,248,248)
    }
}

</style>