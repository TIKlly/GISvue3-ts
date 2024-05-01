// firebaseUploader.ts
import { storage } from "./firebase"; // 替换为你的 firebase.ts 文件路径
import { ref as storageRef, uploadBytesResumable, getDownloadURL, UploadTaskSnapshot } from 'firebase/storage';

interface FileUploadResult {
  fileName: string;
  downloadURL: string;
}

export const customHttpRequest = async (files: File[]): Promise<FileUploadResult[]> => {
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
      'state_changed',
      (snapshot: UploadTaskSnapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`上传进度：${progress.toFixed(2)}%`);
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

