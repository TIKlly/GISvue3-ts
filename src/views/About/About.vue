<template>
  <div class="font-mono font-medium text-sm">
    <!-- <div class="card mb10">
            <h4 class="title">简介</h4>
            <span class="text">
                <span>关于运用到的所用环境依赖</span>
            </span>
        </div> -->
    <div class="card mb10">
      <h4 class="title">项目信息</h4>
      <el-descriptions :column="2" border>
        <el-descriptions-item label="版本号" label-align="left">
          <el-tag>{{ version }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="发布时间" label-align="left">
          <el-tag>{{ lastBuildTime }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Gitee" label-align="left">
          <el-link type="primary"> Gitee </el-link>
        </el-descriptions-item>
        <el-descriptions-item label="Github" label-align="left">
          <el-link type="primary"> Github </el-link>
        </el-descriptions-item>
        <el-descriptions-item label="文档地址" label-align="left">
          <el-link type="primary"> 文档地址 </el-link>
        </el-descriptions-item>
        <el-descriptions-item label="预览地址" label-align="left">
          <el-link type="primary"> 预览地址 </el-link>
        </el-descriptions-item>
      </el-descriptions>
    </div>
    <div class="card mb10">
      <h4 class="title">生产环境依赖</h4>
      <el-descriptions :column="3" border>
        <el-descriptions-item
          v-for="(value, key) in dependencies"
          :key="key"
          width="400px"
          :label="key"
        >
          <el-tag type="info">
            {{ value }}
          </el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </div>
    <div class="card">
      <h4 class="title">开发环境依赖</h4>
      <el-descriptions :column="3" border>
        <el-descriptions-item
          v-for="(value, key) in devDependencies"
          :key="key"
          width="400px"
          :label="key"
        >
          <el-tag type="info">
            {{ value }}
          </el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script setup lang="ts">
const { pkg, lastBuildTime } = __APP_INFO__;
const { dependencies, devDependencies, version } = pkg;
</script>

<style lang="scss" scoped>
.card {
  .title {
    margin: 0 0 15px;
    font-size: 17px;
    font-weight: bold;
    color: var(--el-text-color-primary);
  }

  .text {
    font-size: 15px;
    line-height: 25px;
    color: var(--el-text-color-regular);

    .el-link {
      font-size: 15px;
    }
  }
}
</style>
