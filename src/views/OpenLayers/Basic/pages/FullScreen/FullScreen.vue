<!-- ol - 全屏控件 -->
<template>
  <div id="map" class="map__x"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useUserStore } from "@/stroe";
import { Map, View } from "ol";
import Tile from "ol/layer/Tile";
import BingMaps from "ol/source/BingMaps";
import * as control from "ol/control";
import "ol/ol.css";

const store = useUserStore();

const map = ref<Map | undefined>(undefined);

function initMap() {
  // 地图实例
  map.value = new Map({
    target: "map", // 对应页面里 id 为 map 的元素
    layers: [
      // 图层
      new Tile({
        source: new BingMaps({
          key: "AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-",
          imagerySet: "Aerial",
        }),
      }),
    ],
    view: new View({
      // 地图视图
      projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3 857
      center: [114.064839, 22.548857], // 深圳坐标
      zoom: 12, // 地图缩放级别（打开页面时默认级别）
    }),
    controls: control.defaults().extend([
      // 控件
      new control.FullScreen(), // 全屏控件
    ]),
  });
}

onMounted(() => {
  store.setComponentPath(
    "src/views/OpenLayers/Basic/pages/FullScreen/FullScreen.vue",
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
