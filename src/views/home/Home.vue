<template lang="html">
<div class='home'>
  <!-- 第一行 -->
<el-row class='header'>
  <Header></header>
</el-row>
<el-row class='main'>
  <Main></Main>
</el-row>
<el-row class='centre'>
  <Centre></Centre>
</el-row>
<el-row class='letter'>
  <Letter></Letter>
</el-row>
<el-row class='advice'>
 <Advice></Advice>
</el-row>

<el-row class='study'>
 <Study></Study>
</el-row>
<el-row class='added'>
 <Added></Added>
</el-row>
</div>
</template>

<script>
const Header = ()=>import('./components/header.vue')
const Main = ()=>import('./components/main.vue')
const Centre = ()=>import('./components/centre.vue')
const Letter = ()=>import('./components/letter.vue')
const Advice = ()=>import('./components/advice.vue')
const Study = ()=>import('./components/study.vue')
const Added = ()=>import('./components/added.vue')
export default {
   components: {
   Header,
   Main,
   Centre,
   Letter,
   Advice,
   Study,
   Added,
  },
  
};
</script>

<style lang="scss" scoped>
html,body{
  background: red;
  
  .centre{
    margin-top: 30px;
  }
}
</style>
