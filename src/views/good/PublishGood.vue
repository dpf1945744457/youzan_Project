<template>
  <div class="publish">
      <publishOne></publishOne>
      <publishTwo></publishTwo>
      <publishThree></publishThree>
      <publishFour></publishFour>
      <publishFive></publishFive>

  </div>
</template>

<script>
const publishOne = ()=>import('./components/publishOne')
const publishTwo = ()=>import('./components/publishTwo')
const publishThree = ()=>import('./components/publishThree')
const publishFour = ()=>import('./components/publishFour')
const publishFive = ()=>import('./components/publishFive')


export default {
    components:{
        publishOne,
        publishTwo,
        publishThree,
        publishFour,
        publishFive
    }

}
</script>

<style lang='scss' scoped>
.publish{
    padding: 15px;
    box-sizing: border-box;
}

</style>