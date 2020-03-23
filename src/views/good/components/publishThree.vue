<template>
  <div class="three">
    <el-row class="three_num">
      <el-col :span="24" class="num_one">基本信息</el-col>
    </el-row>
    <!-- 表单验证   商品 -->
    <el-row class="num_two">
      <el-col :span="24">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="商品名:" prop="name">
            <el-input v-model="ruleForm.name" class="shop"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <!-- 商品描述 -->
    <el-row>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="分享描述:" class="shape">
          <el-input v-model="form.name" class="shape_input"></el-input>
        </el-form-item>
      </el-form>
    </el-row>
    <!-- 提示 -->
    <el-row class="shape_word">
      <span>微信分享给好友时会显示，建议36个字以内</span>
      <span>查看示例</span>
    </el-row>

    <!-- 商家买点 -->
    <el-row class="shopping">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="商家卖点:" class="shape">
          <el-input v-model="form.name" class="shape_input"></el-input>
        </el-form-item>
      </el-form>
    </el-row>
    <!-- 提示 -->
    <el-row class="shape_word">
      <span>在商品详情页标题下面展示卖点信息，建议60字以内</span>
      <span>查看示例</span>
    </el-row>

    <!-- 商品图 -->
    <el-row class="shopPicture">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="商品图" prop="name">
          <el-upload
            class="avatar-uploader photo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
    </el-row>
    <!-- 商品图下面注释 -->
    <el-row>
      <el-col :span="12" class="shopTip">
        <span>建议尺寸：800*800像素，你可以拖拽图片调整顺序，最多上传15张</span>
        <span>
          注：试用期最大支持上传30M文件，
          <span>立即获取</span> 更多储存空间
        </span>
      </el-col>
    </el-row>

    <!-- 主图视频 -->
    <el-row class="Video">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="主图视频" prop="name">
          <el-upload
            class="avatar-uploader photo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
    </el-row>
    <!-- 商品图下面注释 -->
    <el-row>
      <el-col :span="12" class="shopTip">
        <span>目前仅支持在手机端播放，建议时长9-30秒，建议视频宽高比16:9</span>
        <span>
          注：试用期最大支持上传30M文件，
          <span>立即获取</span> 更多储存空间
        </span>
      </el-col>
    </el-row>

    <!-- 商品分组 -->
    <el-row class="group">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="商品分组" class="group_form">
          <el-input v-model="form.name" class="group_input"></el-input>
          <span class="span_one">刷新</span>
          <span class="span_two">|</span>
          <span class="span_one">新建分组</span>
          <span class="span_two">|</span>
          <span class="span_one">如何创建商品分组？</span>
        </el-form-item>
      </el-form>
    </el-row>

    <!-- 商品类目 -->
    <el-row>
      <el-form ref="form" :model="form" label-width="80px" class="categroy">
        <el-form-item label="商品类目">
          <el-select v-model="form.region" placeholder="选择所属行业类目" class="categroy_num">
            <el-option label="女人" value="shanghai"></el-option>
            <el-option label="男人" value="beijing"></el-option>
            <el-option label="美妆" value="beijing"></el-option>
            <el-option label="食品" value="beijing"></el-option>
            <el-option label="衣服" value="beijing"></el-option>
            <el-option label="男人" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-row>
    <!-- 提示 -->
    <el-row class="shape_word">
      <span>微信分享给好友时会显示，建议36个字以内</span>
      <span>查看示例</span>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "商品名称必须填写，最多100个字",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 照片
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>


<style lang='scss' scoped>
.three {
  margin-top: 30px;
  height: 100%;
  background: white;
  .num_one {
    text-align: left;
    height: 38px;
    line-height: 38px;
    background: rgb(248, 248, 248);
    font-weight: bold;
  }
  .num_two {
    margin-top: 20px;
    .shop {
      width: 460px;
    }
  }
  .shape {
    margin-left: 20px;
    .shape_input {
      width: 460px;
    }
  }
  .shopping {
    margin-top: 20px;
  }
  .shape_word {
    margin-left: 110px;
    margin-top: -20px;

    & > span:nth-child(1) {
      color: #666;
      font-size: 12px;
    }
    & > span:nth-child(2) {
      color: blue;
      font-size: 12px;
      margin-left: 6px;
      cursor: pointer;
    }
  }
  // ========================照片
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .shopPicture {
    margin-top: 30px;
    .avatar-uploader-icon {
      height: 80px;
      width: 80px;
      border: 1px solid #666;
      text-align: center;
      line-height: 80px;
      background: rgb(255, 255, 255);
      margin-top: -10px;
    }
  }
  // 商品图注释
  .shopTip {
    & > span:nth-child(1) {
      display: block;
      font-size: 12px;
      color: #666;
      margin-top: -20px;
      margin-left: 110px;
    }
    & > span:nth-child(2) {
      display: block;
      font-size: 12px;
      color: #666;
      margin-left: 110px;
      & > span {
        color: blue;
      }
    }
  }
  // 视频主图
  .Video {
    margin-top: 30px;
    width: 100%;
    .avatar-uploader-icon {
      height: 80px;
      width: 80px;
      border: 1px solid #666;
      text-align: center;
      line-height: 80px;
      background: rgb(255, 255, 255);
      margin-top: -10px;
    }
  }
  // 商品分组
  .group {
    margin-left: 20px;
    .group_form {
      .el-form-item__content {
        & > span {
          margin-right: 3px;
        }
        & > span:nth-of-type(1) {
          color: blue;
          font-size: 12px;
        }
        & > span:nth-of-type(2) {
          color: #666;
        }
        & > span:nth-of-type(3) {
          color: blue;
          font-size: 12px;
        }
        & > span:nth-of-type(4) {
          color: #666;
        }

        & > span:nth-of-type(5) {
          color: blue;
          font-size: 12px;
        }
      }
      .group_input {
        width: 460px;
      }
    }
  }
  // 商品类目
  .categroy{
    margin-left: 20px;
    .categroy_num{
      width: 460px;
    }
  }
}
</style>