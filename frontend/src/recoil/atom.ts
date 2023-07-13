import { atom } from "recoil";

export const modalState = atom({
  key: 'modalState',
  default: false,
});

export const editModalState = atom({
  key: 'editModalState',
  default: false,
});


export const editDataState = atom({
  key: 'editDataState',
  // default: {date: '', comment: '', contribution: 0},
  default: {},
});

export const editMode = atom({
  key: 'editMode',
  default: false,
});

export const contributions = atom({
  key: 'contributions',
  default: 0,
});