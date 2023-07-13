import React, { Dispatch, ReactNode, SetStateAction, useRef, useState } from 'react';

import * as S from './ImageUploader.styles';

interface ImageUploaderProps {
  imgList: Dispatch<SetStateAction<ImageList[]>>;
  imgNameList: Dispatch<SetStateAction<string[]>>;
}

export interface ImageList {
  [name: string]: File;
}

const ImageUploader = (props: ImageUploaderProps) => {
  const [imageList, setImageList] = useState<ReactNode[]>([]);
  const [imageURL, setImageURL] = useState<string>('');
  const [progressPercent, setProgressPercent] = useState<number>(0);

  const uploadInputRef = useRef<HTMLInputElement>(null);

  let previewImages: string[] = [];
  const imageNameList: string[] = [];
  const uploadList: ImageList[] = [];

  const isImageFile = (fileName: string) => {
    const regex = /(jpeg)|(jpg)|(png)|(gif)|(webp)|(svg)/;

    return fileName.match(regex);
  };

  const convertImageName = (fileName: string) => {
    return [crypto.randomUUID(), fileName.split('.')[0]].join('-');
  };

  const uploadHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.currentTarget.files!;

    if (files.length > 6) {
      alert('이미지는 최대 6장까지 업로드 가능합니다.');
      return;
    }

    for (let i = 0; i < files.length; i++) {
      console.log('file:', files[i], ', file type: ', typeof files[i]);
      console.log('바꾼 file:', URL.createObjectURL(files[i]), ', 바꾼 file type: ', typeof URL.createObjectURL(files[i]));
      if (!isImageFile(files[i].name))
        continue;
      previewImages.push(URL.createObjectURL(files[i]));
      const convertFileName = convertImageName(files[i].name);
      imageNameList.push(convertFileName);
      uploadList.push({[convertFileName]: files[i]});
    }

    props.imgList(uploadList);
    props.imgNameList(imageNameList);

    setImageList(
      previewImages.map((url, idx) => {
        return (
          <S.ImageContainer key={idx}>
            <S.Image src={url} />
            <S.RemoveImageButton onClick={() => removeImage(idx)}/>
          </S.ImageContainer>
        );
      })
    );
  };

  const removeImage = (eventIdx: number) => {
    previewImages = previewImages.filter((image, idx) => idx !== eventIdx);
    setImageList(
      previewImages.map((url, idx) => {
        return (
          <S.ImageContainer key={idx}>
            <S.Image src={url} />
            <S.RemoveImageButton type='button' onClick={() => removeImage(idx)}/>
          </S.ImageContainer>
        );
      })
    );
  }

  return (
    <S.Container>
      사진 공유하기
      <S.ImageUploadLabel htmlFor="imageUploader">
        <S.ImageUploadInput
          type="file"
          id="imageUploader"
          onChange={uploadHandler}
          multiple={true}
          ref={uploadInputRef}
        />
        +
      </S.ImageUploadLabel>
      <S.ImagePreview>{imageList}</S.ImagePreview>
    </S.Container>
  );
};

export default ImageUploader;
