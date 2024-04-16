<template>
  <div id="map" class="map__x" ref="mapCom"></div>
  <div ref="popupCom" class="popup">
    <span class="icon-close" @click="closePopup">✖</span>
    <div class="content">{{ currentCoordinate }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stroe'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import Overlay from 'ol/Overlay'
import 'ol/ol.css'

const store = useUserStore()

const mapCom = ref<HTMLDivElement | null>(null)
const popupCom = ref<HTMLDivElement | null>(null)
const map = ref<Map>()
const currentCoordinate = ref<string>('')
const overlay = ref<Overlay>()

function initMap() {
  if (!mapCom.value || !popupCom.value) return

  overlay.value = new Overlay({
    element: popupCom.value,
    autoPan: true, // @ts-ignore
    autoPanAnimation: {
      duration: 250
    }
  })

  map.value = new Map({
    target: mapCom.value,
    layers: [
      new Tile({// @ts-ignore
        name: 'defaultLayer',
        source: new XYZ({
          url: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}'
        })
      })
    ],
    view: new View({
      projection: 'EPSG:4326',
      center: [109.51, 18.25],
      zoom: 12
    }),
    overlays: [overlay.value]
  })

  mapClick()
}

function mapClick() {
  if (!map.value) return

  map.value.on('singleclick', evt => {
    const coordinate = evt.coordinate
    currentCoordinate.value = coordinate.toString()
    overlay.value!.setPosition(coordinate)
  })
}

function closePopup() {
  overlay.value!.setPosition(undefined)
  currentCoordinate.value = ''
}

onMounted(() => {
  store.setComponentPath('src/views/OpenLayers/Basic/pages/Popup/Popup.vue')
  initMap()
})
</script>

<style lang="scss" scoped>
.map__x {
  width: 1000px;
  height: 600px;
  border: 1px solid #eee;
}

.popup {
  width: 300px;
  height: 100px;
  background: #fff;
  position: absolute;
  top: -115px;
  left: -150px;
  box-sizing: border-box;
  padding: 10px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    background: #fff;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }

  .icon-close {
    position: absolute;
    top: 0px;
    right: 8px;
    cursor: pointer;
  }

  .content {
    margin-top: 14px;
  }
}
</style>
