<template>
  <el-card :bdoy-style="{ width: '100%', height: '100%' }">
    <template #header>
      <div class="card__header min-w-[600px]">
        <div class="card__header__title">{{ title }}</div>
        <div class="card__header__componentPath">
          组件位置：{{ componentPath }}
        </div>
      </div>
    </template>
    <template #default>
      <el-scrollbar class="overflow-hidden h-auto">
        <router-view />
      </el-scrollbar>
    </template>
  </el-card>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  import { useUserStore } from '@/stroe'
  const route = useRoute()
  const store = useUserStore()
  const title = computed(() => route.meta.navName)
  const componentPath = computed(() => store.getComponentPath)
</script>

<style lang="scss" scoped>
  .card__header {
    display: flex;
    justify-content: space-between;

    &__componentPath {
      box-sizing: border-box;
      height: 26px;
      padding: 0px 8px;
      border-radius: 4px;
      line-height: 26px;
      color: #fff;
      background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%);

      &::selection {
        background: #d299c2;
      }
    }
  }
</style>
