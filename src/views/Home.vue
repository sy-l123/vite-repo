<template>
  <div class="home">
    <div>oms 主页</div>
    <router-link to="/scoreCardList">scoreCardList</router-link>
    <el-input placeholder="创建人、最后操作人、类目ID" style="width:223px" clearable></el-input>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="less" scoped>
.home {
  text-align: center;
}
</style>
