<!-- ol - 区域图层 -->
<template>
  <div id="map" class="map__x"></div>
  <button @click="replaceTheRegion('India')">印度</button>
  <button @click="replaceTheRegion('Argentina')">阿根廷</button>
  <button @click="replaceTheRegion('Nigeria')">尼日利亚</button>
  <button @click="replaceTheRegion('Sweden')">瑞典</button>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useUserStore } from "@/stroe/index.ts";
import { Map, View } from "ol";
import Tile from "ol/layer/Tile";
import TileJSON from "ol/source/TileJSON";
import "ol/ol.css";
import TileLayer from "ol/layer/Tile";

const store = useUserStore();

const map = ref<Map | undefined>(undefined);

const overlay = ref<undefined | TileLayer<TileJSON>>(undefined);

const area = reactive({
  India: [68.17665, 7.96553, 97.40256, 35.49401],
  Argentina: [-73.41544, -55.25, -53.62835, -21.83231],
  Nigeria: [2.6917, 4.24059, 14.57718, 13.86592],
  Sweden: [11.02737, 55.36174, 23.90338, 69.10625],
});

function initMap() {
  overlay.value = new Tile({
    extent: area.India,
    source: new TileJSON({
      url: "https://api.tiles.mapbox.com/v4/mapbox.world-black.json?secure&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q",
      crossOrigin: "anonymous",
    }),
  });
  map.value = new Map({
    target: "map",
    layers: [
      new Tile({
        source: new TileJSON({
          url: "https://api.tiles.mapbox.com/v4/mapbox.world-light.json?secure&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q",
          crossOrigin: "anonymous",
        }),
      }),
      overlay.value as any,
    ],
    view: new View({
      projection: "EPSG:4326",
      center: [0, 0],
      zoom: 1,
    }),
  });
}

interface AreaData {
  [key: string]: number[]; // 定义索引签名
}
function replaceTheRegion(data: string | number) {
  overlay.value?.setExtent((area as AreaData)[data]); // 设置要显示的区域
}

onMounted(() => {
  store.setComponentPath(
    "src/views/OpenLayers/Basic/pages/SetExtent/SetExtent.vue",
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
