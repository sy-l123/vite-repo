<template>
  <div class="score-card-list">
    <el-card class="last-el-card">
      <el-row class="table-top-buttons" justify="end">
        <el-button type="primary">创建订单</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import {
  reactive, onMounted, toRefs,
} from 'vue';

const data = reactive({
  searchTypes: 1,
  tableLoading: false,
});

const {
  searchTypes,
} = toRefs(data);

onMounted(() => {
  let a;
  //
});
</script>

<style lang="less" scoped>
.score-card-list {
  padding: 20px;
  background-color: #efefef;
}
</style>
