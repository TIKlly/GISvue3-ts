<template>
  <div>
    <div>
      <input type="file" @change="uploadFile" />
      <img v-if="processedImage" :src="processedImage" alt="Processed Image" />

      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        processedImage: null
      }
    },
    methods: {
      async uploadFile(event) {
        const file = event.target.files[0]
        const formData = new FormData()
        formData.append('image', file)

        const response = await fetch('http://localhost:5000/process_image', {
          method: 'POST',
          body: formData
        })

        const data = await response.json()
        this.processedImage = `data:image/jpeg;base64,${data.gray_image}`
      }
    }
  }
</script>

<style scoped>
  img {
    max-width: 100%;
    height: auto;
  }
</style>
