<!-- ol - 图层组 -->
<template>
  <!-- 地图组件 -->
  <div id="map" class="map__x"></div>

  <!-- 控制层 -->
  <ul class="list-none w-60 flex">
    <li>
      <span>OSM 层</span>
      <fieldset id="layer0">
        <label class="checkbox" for="visible0">
          <input
            id="visible0"
            class="visible"
            type="checkbox"
            v-model="visible.visible0"
            @change="changeCheckBox('visible0', 'baseMap')"
          />可见
        </label>
        <label>透明度</label>
        <input
          class="opacity"
          type="range"
          min="0"
          max="1"
          step="0.01"
          v-model="visible.visible0Opacity"
          @change="changeOpacity('visible0Opacity', 'baseMap')"
        />
      </fieldset>
    </li>
    <li>
      <span>图层组</span>
      <fieldset id="layer1">
        <label class="checkbox" for="visible1">
          <input
            id="visible1"
            class="visible"
            type="checkbox"
            v-model="visible.visible1"
            @change="changeCheckBox('visible1', 'group')"
          />可见
        </label>
        <label>透明度</label>
        <input
          class="opacity"
          type="range"
          min="0"
          max="1"
          step="0.01"
          v-model="visible.visible1Opacity"
          @change="changeOpacity('visible1Opacity', 'group')"
        />
      </fieldset>
      <ul class="list-none m-0 p-0">
        <li>
          <span>食物危机主题图层</span>
          <fieldset id="layer10">
            <label class="checkbox" for="visible10">
              <input
                id="visible10"
                class="visible"
                type="checkbox"
                v-model="visible.visible10"
                @change="changeCheckBox('visible10', 'food')"
              />可见
            </label>
            <label>透明度</label>
            <input
              class="opacity"
              type="range"
              min="0"
              max="1"
              step="0.01"
              v-model="visible.visible10Opacity"
              @change="changeOpacity('visible10Opacity', 'food')"
            />
          </fieldset>
        </li>
        <li>
          <span>世界陆地边界图</span>
          <fieldset id="layer11">
            <label class="checkbox" for="visible11">
              <input
                id="visible11"
                class="visible"
                type="checkbox"
                v-model="visible.visible11"
                @change="changeCheckBox('visible11', 'land')"
              />可见
            </label>
            <label>透明度</label>
            <input
              class="opacity"
              type="range"
              min="0"
              max="1"
              step="0.01"
              v-model="visible.visible11Opacity"
              @change="changeOpacity('visible11Opacity', 'land')"
            />
          </fieldset>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useUserStore } from "@/stroe";
import { Map, View } from "ol";
import { Tile, Group } from "ol/layer";
import { OSM, TileJSON } from "ol/source";
import "ol/ol.css";

const store = useUserStore();

const visible = reactive({
  visible0: true,
  visible0Opacity: 100,
  visible1: true,
  visible1Opacity: 100,
  visible10: true,
  visible10Opacity: 100,
  visible11: true,
  visible11Opacity: 100,
});

// 显示/隐藏图层
// setVisible可以设置图层显示或隐藏
function changeCheckBox(target: keyof typeof visible, name: any) {
  let layers = find(map.value!, name);
  layers.setVisible(visible[target]);
}

// 修改图层透明度
// setOpacity可是设置图层的透明度，接收一个数值类型的参数
function changeOpacity(target: keyof typeof visible, name: any) {
  let layers = find(map.value!, name);
  layers.setOpacity(parseFloat(visible[target] as any));
}

// 查找图层
function find(source: { getLayers: () => any } | null, name: any) {
  let s = source?.getLayers();
  for (let i = 0; i < s.getLength(); i++) {
    // 遍历所有图层
    if (s.item(i).get("name") === name) {
      // 根据图层名，查找并返回查找到的图层
      return s.item(i);
    }
    if (s.item(i) instanceof Group) {
      // 递归
      return find(s.item(i), name);
    }
  }
}

const map = ref<Map | undefined>(undefined);

function initMap() {
  // 地图实例
  map.value = new Map({
    target: "map", // 对应页面里 id 为 map 的元素
    layers: [
      // 图层
      new Tile({
        // 创建基本地图图层
        source: new OSM(), // 使用 OpenStreetMap 数据源
      }),
      new Group({
        // 创建图层组
        layers: [
          // 图层组包含的图层
          new Tile({
            // 食物危机主题图层
            source: new TileJSON({
              url: "https://api.tiles.mapbox.com/v4/mapbox.20110804-hoa-foodinsecurity-3month.json?securee&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q",
              crossOrigin: "anonymous",
            }),
          }),
          new Tile({
            // 世界陆地边界图层
            source: new TileJSON({
              url: "https://api.tiles.mapbox.com/v4/mapbox.world-borders-light.json?secure&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q",
              crossOrigin: "anonymous",
            }),
          }),
        ],
      }),
    ],
    view: new View({
      // 地图视图
      projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3 857
      center: [37.4057, 8.81566],
      zoom: 5, // 地图缩放级别（打开页面时默认级别）
    }),
  });
}

onMounted(() => {
  store.setComponentPath(
    "src/views/OpenLayers/Basic/pages/LayerGroup/LayerGroup.vue",
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

.mouse__position__txt {
  position: relative;

  :deep(.ol-mouse-position) {
    position: static;
  }
}
</style>
