<template>
  <div>
    <el-upload
      ref="uploadRef"
      :auto-upload="false"
      class="upload-demo"
      drag
      :before-upload="beforeUpload"
      :on-success="handleSuccess"
      :on-error="handleError"
      :http-request="customHttpRequesthandler"
      multiple
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          <!-- 根据需要添加提示信息 -->

          <el-button class="ml-3" type="success" @click="submitUpload">
            upload to server
          </el-button>
        </div>
      </template>
    </el-upload>
    <el-progress :percentage="percentage" :format="format" />
    <div class="m-3 bg-slate-800 h-[500px]"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UploadFilled } from "@element-plus/icons-vue";
// import { customHttpRequest } from '@/util/firebaseUploader'; // 替换为你的具体路径
import type { UploadInstance } from "element-plus";

import { ElMessage } from "element-plus";
import { storage } from "../../firebase";
import {
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
  UploadTaskSnapshot,
} from "firebase/storage";

const format = (percentage: number) =>
  percentage === 100 ? "Complete" : `${percentage}%`;
const percentage = ref<number>(0);

const uploadRef = ref<UploadInstance>();
const files = ref<File[]>([]);
const beforeUpload = (file: File) => {
  // 在这里添加你的文件验证逻辑
  files.value.push(file);
  // return false; // 禁止 el-upload 组件自动上传
};

const handleSuccess = () => {
  console.log("success");
  // el-upload 组件的成功回调留空，因为我们手动处理了上传逻辑
};
const handleError = (error: any) => {
  ElMessage(`文件上传失败: ${error.message}`);
  console.error(`文件上传失败: ${error.message}`);
};

const customHttpRequesthandler = async () => {
  try {
    const urls = await customHttpRequest(files.value);
    console.log(urls);
  } catch (error) {
    console.error(error);
  }
};

// 手动上传
const submitUpload = () => {
  uploadRef.value!.submit();
};
// firebase
interface FileUploadResult {
  fileName: string;
  downloadURL: string;
}

const customHttpRequest = async (
  files: File[]
): Promise<FileUploadResult[]> => {
  if (files.length === 0) {
    return [];
  }

  const uploadPromises: Promise<FileUploadResult>[] = files.map(storeImage);

  try {
    const uploadResults = await Promise.all(uploadPromises);
    return uploadResults; // 返回图片的 URL 列表，以供后续使用
  } catch (error: any) {
    throw new Error(`文件上传失败：${error.message}`);
  }
};

const storeImage = (file: File): Promise<FileUploadResult> => {
  return new Promise((resolve, reject) => {
    const fileName = `${new Date().getTime()}_${file.name}`;
    const newStorageRef = storageRef(storage, fileName);
    const uploadTask = uploadBytesResumable(newStorageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot: UploadTaskSnapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log(`上传进度：${progress.toFixed(2)}%`);
        percentage.value = Number(progress.toFixed(2));
      },
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const result: FileUploadResult = {
            fileName,
            downloadURL,
          };
          resolve(result);
        });
      }
    );
  });
};

// firebase所有文件
</script>

<style lang="less" scoped></style>
