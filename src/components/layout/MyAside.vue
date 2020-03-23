<template>
  <div class="aside">
    <div class="logo">
      <i class="fa fa-thumbs-up"></i>
    </div>

    <div v-for="(item,idx) in navs" :key="idx">
      <router-link tag="span" :to="item.path" active-class="nav_on" exact >
        <div class="nav">
          <i class="fa" :class="item.icon"></i>
          <span v-text="item.text"></span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      navs: [
        { path: "/", text: "概况", icon: "fa-tag", id: 1 },
        { path: "/shop", text: "店铺", icon: "fa-calendar", id: 2 },
        { path: "/good", text: "商品", icon: "fa-tag", id: 3 },
        { path: "/order", text: "订单", icon: " fa-hand-o-left", id: 4 },
        { path: "/customer", text: "客户", icon: "fa-home", id: 5 },
        { path: "/ss", text: "数据", icon: "fa-book", id: 6 },
        { path: "/ss", text: "资产", icon: " fa-hand-o-left", id: 7 },
        { path: "/ss", text: "应用", icon: " fa-hand-o-left", id: 8 },
        { path: "/ss", text: "设置", icon: " fa-hand-o-left", id: 9 },
      ]
    };
  }
};
</script>

<style lang='scss'>
.aside {
  height: 100%;
  width: 100%;
  background: rgba(68, 68, 68, 1);
  .nav {
    color: #aaa;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    > span {
      padding-left: 5px;
    }
  }
  
 
  .nav:hover {
    background: rgba(102, 102, 102, 1);
    color: white;
  }
  .nav_on .nav {
    background: white;
    color: black;
  }
  .logo {
    height: 80px;
    box-sizing: border-box;
    padding-top: 20px;
    text-align: center;
    > i {
      display: inline-block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 50%;
      background: white;
      font-size: 24px;
      color: rgba(238, 0, 0, 1);
      cursor: pointer;
    }
  }
}
</style>