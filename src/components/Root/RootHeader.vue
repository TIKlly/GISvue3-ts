<template>
  <header class="root__header bg-white">
    <i :class="[
      'root__header__collapseBtn',
      isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
    ]" @click="changeMenu"></i>
    <div class="root__header__main">
      <div>
        <slot class=""></slot>
        <h2 class=" max-md:hidden " @click="toHome">前端可视化及桌面应用</h2>

      </div>
      <h2 class=" md:hidden  text-sm font-mono" @click="toHome">前端可视化及桌面应用</h2>
      <div class="repository__x">
        <el-tooltip class="repository__item" content="changeMenu" placement="bottom" effect="light">
          <el-button class=" font-black text-lg  font-mono" :round="true" @click="changeMenu">
            T
          </el-button>
        </el-tooltip>
      </div>
    </div>
  </header>
</template>


<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import RootBus from "@/hooks/routeTool/RootBus"

const router = useRouter()

const isCollapse = ref(RootBus.isCollapse)
function changeMenu() {
  RootBus.isCollapse.value = !RootBus.isCollapse.value
}

onBeforeUnmount(() => {
  // RootBus.$off("change-menu-isCollapse")
})

function toHome() {
  router.push('/')
}

</script>

<style lang="scss" scoped>
.root__header {
  height: 60px;
  display: flex;
  align-items: center;

  &__collapseBtn {
    margin-right: 10px;
    margin-top: 4px;
    font-size: 26px;
    color: #409eff;
  }

  &__main {
    flex: 1;
    display: flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    cursor: pointer;
    background-image: linear-gradient(180deg, #3ff9ff 0%, #409eff 72%, #78BEFF 100%);
    -moz-background-clip: text;
    -webkit-background-clip: text;
    -o-background-clip: test;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    user-select: none;
    margin: 0 auto;

  }

  .repository__x {
    .repository__item {
      margin-left: 10px;
    }

    a {
      color: #999;
      text-decoration: none;
    }
  }
}
</style>