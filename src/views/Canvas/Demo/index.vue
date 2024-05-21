<template>
  <el-card>
    <template #header>
      <div class="card__header">
        <div class="card__header__title">{{ title }}</div>
        <div class="card__header__componentPath">
          组件位置：{{ componentPath }}
        </div>
      </div>
    </template>
    <template #default>
      <router-view />
    </template>
  </el-card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import { useUserStore } from "@/stroe/index.ts";

const route = useRoute();
const store = useUserStore();

const title = computed(() => route.meta.navName);

const componentPath = computed(() => store.getComponentPath);
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
    background-image: linear-gradient(
      -225deg,
      #473b7b 0%,
      #3584a7 51%,
      #30d2be 100%
    );

    &::selection {
      background: #d299c2;
    }
  }
}
</style>
