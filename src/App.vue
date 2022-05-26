<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" :key="route.fullPath" v-if="route.meta.isKeepAlive" />
    </keep-alive>
    <component :is="Component" :key="route.fullPath" v-if="!route.meta.isKeepAlive" />
  </router-view>
</template>

<script>
export default {};
</script>
