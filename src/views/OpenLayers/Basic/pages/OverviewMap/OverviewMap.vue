<!-- ol - 总览控件 -->
<template>
  <div id="map" class="map__x"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useUserStore } from "@/stroe";
import { Map, View } from "ol";
import Tile from "ol/layer/Tile";
import { OSM } from "ol/source";
import * as control from "ol/control";
// import * as olInteraction from 'ol/interaction';
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
        source: new OSM(),
      }),
    ],
    view: new View({
      // 地图视图
      projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3 857
      center: [110.32, 20.02], // 坐标
      zoom: 12, // 地图缩放级别（打开页面时默认级别）
    }),
    controls: control.defaults().extend([
      // 控件
      new control.OverviewMap({
        className: "ol-overviewmap ol-custom-overviewmap",
        layers: [
          new Tile({
            source: new OSM({
              // 使用不同样式的底图
              url:
                "https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png" +
                "?apikey=0e6fc415256d4fbb9b5166a718591d71",
            }),
          }),
        ],
        collapseLabel: "\u00BB",
        label: "\u00AB",
        collapsed: false,
      }),
    ]),
  });
}

onMounted(() => {
  store.setComponentPath(
    "src/views/OpenLayers/Basic/pages/OverviewMap/OverviewMap.vue",
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

// 控制插件的样式和位置
:deep(.ol-custom-overviewmap),
:deep(.ol-custom-overviewmap.ol-uncollapsible) {
  bottom: auto;
  left: auto;
  right: 0;
  top: 0;
}

:deep(.ol-custom-overviewmap:not(.ol-collapsed)) {
  border: 1px solid black;
}

:deep(.ol-custom-overviewmap .ol-overviewmap-map) {
  border: none;
  width: 300px;
}

:deep(.ol-custom-overviewmap .ol-overviewmap-box) {
  border: 2px solid red;
}

:deep(.ol-custom-overviewmap:not(.ol-collapsed) button) {
  bottom: auto;
  left: auto;
  right: 1px;
  top: 1px;
}

:deep(.ol-rotate) {
  top: 170px;
  right: 0;
}
</style>
