<template>
  <div>
    <div class="mb-32">
      <h3>for example</h3>
      <div class="flex gap-6 max-md:flex-col">
        <img width="500" src="@/assets/images/nfs.jpg" alt="" srcset="" />
        <img width="500" src="@/assets/images/cnfs.jpg" alt="" srcset="" />
      </div>
    </div>
    <input type="file" @change="uploadFile" />
    <img v-if="processedImage" :src="processedImage" alt="Processed Image" />
  </div>

  <Hightcode :code="code"></Hightcode>
</template>

<script setup>
  import { ref } from 'vue'
  import Hightcode from '@/components/Hightcode.vue'
  const processedImage = ref(null)
  const uploadFile = async (event) => {
    const file = event.target.files[0]
    const formData = new FormData()
    formData.append('image', file)

    const response = await fetch('http://localhost:5000/process_image', {
      method: 'POST',
      body: formData
    })
    const data = await response.json()
    processedImage.value = `data:image/jpeg;base64,${data.gray_image}`
  }

  const code = `
# 后端代码  转换灰度图像  后端未上线部署 :(  请自行测试
# app.py
from flask import Flask, request, jsonify
import cv2
from flask_cors import CORS
import numpy as np
import base64

app = Flask(__name__)
CORS(app) 解决跨域


@app.route('/process_image', methods=['POST'])
def process_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400

    file = request.files['image']
    npimg = np.fromfile(file, np.uint8)
    img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

    # 处理图像，例如将其转换为灰度图像
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    _, buffer = cv2.imencode('.jpg', gray)
    gray_image_base64 = base64.b64encode(buffer).decode('utf-8')
    print(file)
    return jsonify({'gray_image': gray_image_base64})


if __name__ == '__main__':
    app.run(debug=True)
`
</script>

<style scoped>
  img {
    max-width: 100%;
    height: auto;
  }
</style>
