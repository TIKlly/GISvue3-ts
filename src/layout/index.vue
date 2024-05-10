<template>
  <el-container class=" relative">
    <!-- 侧边栏按钮（仅在移动端显示） -->
    <el-button class=" absolute top-4 left-2" type="info" @click="toggle">
      <el-icon>
        <Operation />
      </el-icon>
    </el-button>
    <!-- 侧边栏（大屏幕布局） -->
    <el-aside width="180" v-if="!isMobile">
      <RootNav :currentPath="currentPath" :routesList="routesList" :isCollapse="isMobile" />
    </el-aside>
    <!-- 移动端显示 -->
    <!-- <el-drawer v-else direction="ltr" v-model="drawer" title="I am the title" :with-header="false">
      <RootNav :currentPath="currentPath" :routesList="routesList"></RootNav>
    </el-drawer> -->
    <!-- 内容区域 -->
    <el-container>
      <el-header>
        <RootHeader></RootHeader>
      </el-header>
      <el-main :style="{ padding: contentPadding }">
        <RouterView></RouterView>
        <!-- <router-view v-slot="{ Component, route }">
                    <span>path</span>
                    <h2 v-if="route.fullPath != '/'">{{ route.fullPath }}</h2>
                    <transition appear name="fade-transform" mode="out-in">
                        <keep-alive>
                            <component :is="Component" v-if="isRouterShow" :key="route.fullPath" />
                        </keep-alive>
                    </transition>
                </router-view> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import RootNav from "@/components/Root/RootNav.vue";
import RootHeader from "@/components/Root/RootHeader.vue";
import { Operation } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { Route, filterRoutes } from "@/hooks/routeTool/filtterRoutes";
const route = useRoute();
const isMobile = ref<boolean | any>(false);
const router = useRouter();
const routesList: any = computed(() => {
  return filterRoutes(router.options.routes as Route[]);
});

// const isRouterShow = ref(true);
// const refreshCurrentPage = (val: boolean) => (isRouterShow.value = val);
// provide("refresh", refreshCurrentPage);


onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

function handleResize() {
  isMobile.value = window.innerWidth < 767;
}

// 当前路由
const currentPath = computed(() => {
  return route.path;
});

// 切换是否显示 aside
function toggle() {
  isMobile.value = !isMobile.value

}
// 使用计算属性动态计算内容区域的内边距
const contentPadding = computed(() => (isMobile.value ? "20px" : "40px"));
</script>

<style scoped lang="scss">
.sidebar-btn {
  top: 30px;
  left: 20px;
  font-size: 20px;
  cursor: pointer;
}
</style>
