ol - 矢量图高亮模块
<template>
  <div id="map" class="map__x"></div>
  <div>{{ info }}</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useUserStore } from "@/stroe";
import { Map, View } from "ol";
import { Style, Fill, Stroke, Text } from "ol/style";
import SourceVector from "ol/source/Vector";
import LayerVector from "ol/layer/Vector";
import GeoJSON from "ol/format/GeoJSON";
import CN from "@/assets/map/MapOfChina.json"; // 矢量图（中国版）
import "ol/ol.css";

import { debounce } from "@/util/throttle";

// 矢量图数据生成网站：https://datav.aliyun.com/tools/atlas/index.html

const store = useUserStore();

const map = ref<Map>();

function initMap() {
  let style = new Style({
    fill: new Fill({
      color: "rgba(255, 255, 255, 0.6)",
    }),
    stroke: new Stroke({
      color: "#319FD3",
      width: 1,
    }),
    text: new Text({
      font: "12px Calibri,sans-serif",
      fill: new Fill({
        color: "#000",
      }),
      stroke: new Stroke({
        color: "#fff",
        width: 3,
      }),
    }),
  });

  // 地图实例
  map.value = new Map({
    target: "map", // 对应页面里 id 为 map 的元素
    layers: [
      // 图层
      new LayerVector({
        source: new SourceVector({
          features: new GeoJSON().readFeatures(CN, {
            dataProjection: "EPSG:4326",
            featureProjection: "EPSG:4326",
          }),
        }),
        style: (feature) => {
          style.getText()!.setText(feature.get("name"));
          return style;
        },
      }),
    ],
    view: new View({
      // 地图视图
      projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3857
      center: [104.064839, 30.548857],
      zoom: 4, // 地图缩放级别（打开页面时默认级别）
    }),
  });
  // @ts-ignore
  map.value.on(
    "pointermove",
    debounce((evt) => {
      if (evt.dragging) {
        // 拖拽
        return;
      }
      // @ts-ignore
      let pixel = map.value.getEventPixel(evt.originalEvent); // 鼠标在容器的坐标(左上角是[0,0])
      displayFeatureInfo(pixel);
    }, 100),
  );
}

const featureOverlay = ref(null);
const highlightStyle = new Style({
  stroke: new Stroke({
    color: "#f00",
    width: 1,
  }),
  fill: new Fill({
    color: "rgba(255, 0, 0, 0.1)",
  }),
  text: new Text({
    font: "12px Calibri, sans-serif",
    fill: new Fill({
      color: "#000",
    }),
    stroke: new Stroke({
      color: "#f00",
      width: 3,
    }),
  }),
});

const highlight = ref(null);
const info = ref("");

// 高亮
function displayFeatureInfo(pixel: any) {
  if (!featureOverlay.value) {
    // @ts-ignore
    featureOverlay.value = new LayerVector({
      source: new SourceVector(), // @ts-ignore
      map: map.value,
      style: (feature) => {
        // @ts-ignore
        highlightStyle.getText().setText(feature.get("name"));
        return highlightStyle;
      },
    });
  }
  // @ts-ignore
  let feature = map.value.forEachFeatureAtPixel(pixel, (feature) => feature);

  if (feature) {
    console.log(feature.get("name"));
    info.value = feature.get("name");
  } else {
    info.value = "";
  }

  if (feature !== highlight.value) {
    if (highlight.value) {
      // @ts-ignore
      featureOverlay.value.getSource().removeFeature(highlight.value);
    }
    if (feature) {
      // @ts-ignore
      featureOverlay.value.getSource().addFeature(feature);
    }
    // @ts-ignore
    highlight.value = feature;
  }
}

onMounted(() => {
  store.setComponentPath(
    "src/views/OpenLayers/Basic/pages/VectorHigh/VectorHigh.vue",
  );
  initMap();
});
</script>

<style lang="scss" scoped>
.map__x {
  width: 800px;
  height: 600px;
  border: 1px solid #eee;
}
</style>
(: { dragging: any; originalEvent: any }): any(: any)
