<template>
  <div class="order">
    <el-row class="order_one">
      <el-form ref="form" :model="form" label-width="90px">
        <el-form-item label="订单搜索：" class="order_item">
          <el-select v-model="form.region" placeholder="订单号">
            <el-option label="订单号" value="shanghai"></el-option>
            <el-option label="外部单号" value="beijing"></el-option>
            <el-option label="收货人姓名" value="beijing"></el-option>
            <el-option label="收货人手机号" value="beijing"></el-option>
            <el-option label="收货人手机号后四位" value="beijing"></el-option>
          </el-select>
          <el-input v-model="input" placeholder="请输入内容" class="order_input"></el-input>
        </el-form-item>
      </el-form>
    </el-row>

    <!-- 时间 -->
    <el-row>
      <div class="block">
        <span class="demonstration">下单时间：</span>
        <el-date-picker
          v-model="value2"
          type="datetimerange"
          :picker-options="pickerOptions"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right"
        ></el-date-picker>
      </div>
    </el-row>

    <!-- 商品名称 -->
    <el-row class="order_name">
      <el-col :span="2" class="name_span">
        <span>商品名称:</span>
      </el-col>
      <el-col :span="4" class="name_content">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="6" class="name_two">
        <el-form ref="form" :model="form" label-width="90px">
          <el-form-item label="订单类型：" class="order_item">
            <el-select v-model="form.region" placeholder="订单号">
              <el-option label="订单号" value="shanghai"></el-option>
              <el-option label="外部单号" value="beijing"></el-option>
              <el-option label="收货人姓名" value="beijing"></el-option>
              <el-option label="收货人手机号" value="beijing"></el-option>
              <el-option label="收货人手机号后四位" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6" class="name_three">
        <el-form ref="form" :model="form" label-width="90px">
          <el-form-item label="维权状态：" class="order_item">
            <el-select v-model="form.region" placeholder="订单号">
              <el-option label="订单号" value="shanghai"></el-option>
              <el-option label="外部单号" value="beijing"></el-option>
              <el-option label="收货人姓名" value="beijing"></el-option>
              <el-option label="收货人手机号" value="beijing"></el-option>
              <el-option label="收货人手机号后四位" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>

    <el-row class="order_name">
      <el-col :span="2" class="name_span">
        <span>订单状态:</span>
      </el-col>
      <el-col :span="4" class="name_content">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="6" class="name_two">
        <el-form ref="form" :model="form" label-width="90px">
          <el-form-item label="配送方式：" class="order_item">
            <el-select v-model="form.region" placeholder="订单号">
              <el-option label="订单号" value="shanghai"></el-option>
              <el-option label="外部单号" value="beijing"></el-option>
              <el-option label="收货人姓名" value="beijing"></el-option>
              <el-option label="收货人手机号" value="beijing"></el-option>
              <el-option label="收货人手机号后四位" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6" class="name_three">
        <el-form ref="form" :model="form" label-width="90px">
          <el-form-item label="付款方式：" class="order_item">
            <el-select v-model="form.region" placeholder="全部">
              <el-option label="订单号" value="shanghai"></el-option>
              <el-option label="外部单号" value="beijing"></el-option>
              <el-option label="收货人姓名" value="beijing"></el-option>
              <el-option label="收货人手机号" value="beijing"></el-option>
              <el-option label="收货人手机号后四位" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>

    <!-- 第三 -->
    <el-row class="order_name">
      <el-col :span="2" class="name_span">
        <span>推广方式:</span>
      </el-col>
      <el-col :span="4" class="name_content">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="6" class="name_two">
        <el-form ref="form" :model="form" label-width="90px">
          <el-form-item label="订单来源：" class="order_item">
            <el-select v-model="form.region" placeholder="订单号">
              <el-option label="订单号" value="shanghai"></el-option>
              <el-option label="外部单号" value="beijing"></el-option>
              <el-option label="收货人姓名" value="beijing"></el-option>
              <el-option label="收货人手机号" value="beijing"></el-option>
              <el-option label="收货人手机号后四位" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6" class="name_three">
        <el-form ref="form" :model="form" label-width="90px">
          <el-form-item label="是否加星：" class="order_item">
            <el-select v-model="form.region" placeholder="订单号">
              <el-option label="订单号" value="shanghai"></el-option>
              <el-option label="外部单号" value="beijing"></el-option>
              <el-option label="收货人姓名" value="beijing"></el-option>
              <el-option label="收货人手机号" value="beijing"></el-option>
              <el-option label="收货人手机号后四位" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>

    <el-row class="order_button">
      <el-button class="button_one">主要按钮</el-button>
      <el-button class="button_two">默认按钮</el-button>
      <span>查看已导出列表</span>
      <span>重置筛选条件</span>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        input: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang='scss' scoped>
body {
  background: rgb(247, 248, 250);
  margin: 0;
  padding: 0;
}
.order {
  background: rgb(247, 248, 250);
  padding-top: 15px;
  box-sizing: border-box;
  height: 100%;
  .order_one {
    margin-top: 10px;
    .order_input {
      width: 228px;
      margin-left: 10px;
    }
  }
  .block {
    margin-left: 10px;
    margin-bottom: 10px;
  }
  // 商品名称
  .order_name {
    line-height: 48px;

    .name_span {
      text-align: left;
      margin-right: 12px;
      margin-left: 14px;
      width: 80px;
      height: 32px;
    }
    .name_content {
      margin-left: -15px;
    }
    .name_two {
      margin-top: 4px;
    }
    .name_three {
      margin-top: 4px;
    }
  }

  // 按钮
  .order_button {
    &>span{
      display: inline-block;
      width: 98px;
      height: 16px;
      color: blue;
      font-size: 14px;
      margin: 0 10px;
    }
    .button_one {
      margin-left: 90px;
      background: rgb(21,91,212);
      color:white;
    }
  }
}
</style>