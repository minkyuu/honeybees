import styled from "styled-components";

import removeImg from '../../assets/remove.png';

export const Container = styled.div`
  height: 190px;
`;

export const ImageUploadLabel = styled.label`
  display: block;
  margin-top: 2px;
  width: 550px;
  height: 50px;
  line-height: 60px;
  text-align: center;
  background-color: #f2bb13;
  border-radius: 8px;
  font-size: 28px;
`;

export const ImageUploadInput = styled.input`
  display:none;
`;

export const ImagePreview = styled.ul`
  display: flex;
  width: 550px;
  heigth: 80px;
  padding: 0;
  gap: 12px;
`;

export const ImageContainer = styled.li`
  list-style: none;
  position: relative;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 12px;
`;

export const RemoveImageButton = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 18px;
  height: 18px;
  border: none;
  border-radius: 50%;
  background: url(${removeImg}) no-repeat;
  background-size: contain;
  filter: invert(90%);
`;