<!-- ol - 鼠标拖拽旋转/缩放 -->
<template>
  <div id="map" class="map__x"></div>
  <div>按住Shift并使用鼠标拖拽可以旋转、缩放地图</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useUserStore } from "@/stroe";
import { Map, View } from "ol";
import Tile from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import DragRotateAndZoom from "ol/interaction/DragRotateAndZoom";
import * as olInteraction from "ol/interaction";
import "ol/ol.css";

const store = useUserStore();
const map = ref<undefined | Map>(undefined);

function initMap() {
  // 地图实例
  map.value = new Map({
    target: "map", // 对应页面里 id 为 map 的元素
    interactions: olInteraction.defaults().extend([new DragRotateAndZoom()]),
    layers: [
      // 图层
      new Tile({
        source: new OSM(), // 图层数据源
      }),
    ],
    view: new View({
      // 地图视图
      projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3857
      center: [110.34, 20.02], // 坐标
      minZoom: 10, // 地图缩放最小级别
      zoom: 12, // 地图缩放级别（打开页面时默认级别）
    }),
  });
}

onMounted(() => {
  store.setComponentPath(
    "src/views/OpenLayers/Basic/pages/MouseRotationMap/MouseRotationMap.vue",
  );
  initMap();
});
</script>

<style lang="scss" scoped>
.map__x {
  width: 600px;
  height: 600px;
  border: 1px solid #eee;
}
</style>
