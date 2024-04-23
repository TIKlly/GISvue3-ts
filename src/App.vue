<template>
  <div>
    <el-container>
      <el-aside>
        <RootNav></RootNav>
      </el-aside>
      <el-container>
        <el-header>
          <RootHeader></RootHeader>
        </el-header>
        <el-main>
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup lang="ts">
import RootNav from './components/Root/RootNav.vue';
import RootHeader from "@/components/Root/RootHeader.vue"



</script>

<style></style>