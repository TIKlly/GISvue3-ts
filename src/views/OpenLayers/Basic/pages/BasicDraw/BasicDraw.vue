<!-- ol - 绘制点、线、面 -->
<template>
  <div id="map" class="map__x"></div>
  <select id="type" v-model="tool" @change="addInteraction">
    <option v-for="item in tools" :key="item.value" :value="item.value">
      {{ item.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useUserStore } from "@/stroe";
import { Map, View } from "ol";
import Tile from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import LayerVector from "ol/layer/Vector";
import SourceVector from "ol/source/Vector";
import Draw from "ol/interaction/Draw";
import "ol/ol.css";

const store = useUserStore();

const tool = ref("Polygon");
const tools = reactive([
  // 工具集
  {
    value: "Point",
    label: "点",
  },
  {
    value: "LineString",
    label: "线",
  },
  {
    value: "Polygon",
    label: "多边形",
  },
  {
    value: "Circle",
    label: "圆",
  },
  {
    value: "None",
    label: "无",
  },
]);

const source = new SourceVector({
  wrapX: false, // 禁止横向无限重复（底图渲染的时候会横向无限重复），设置了这个属性，可以让绘制的图形不跟随底图横向无限重复
});

// 绘图层
let vector = new LayerVector({
  source: source,
});

// 底图
const raster = new Tile({
  source: new OSM(),
});

const map = ref<Map | undefined>(undefined);

function initMap() {
  // 地图实例
  map.value = new Map({
    target: "map", // 对应页面里 id 为 map 的元素
    layers: [raster, vector],
    view: new View({
      // 地图视图
      projection: "EPSG:4326",
      center: [113.1206, 23.034996],
      zoom: 10,
    }),
  });
  addInteraction();
}

const draw = ref<Draw | undefined>(undefined);

function addInteraction() {
  if (draw.value != null) {
    map.value!.removeInteraction(draw.value as Draw);
  }
  if (tool.value != "None") {
    draw.value = new Draw({
      source: source,
      type: tool.value as any,
    });
    map.value!.addInteraction(draw.value as any);
  }
}

onMounted(() => {
  store.setComponentPath(
    "src/views/OpenLayers/Basic/pages/BasicDraw/BasicDraw.vue",
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
