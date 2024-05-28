<template>
  <div v-highlight>
    <pre>
    <code ref="code" class="javascript">
        {{ code }}
    </code>
</pre>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    code: string
  }>()
</script>

<style lang="less" scoped></style>
