import { selector } from "recoil";
import { editMode, modalState, editModalState, contributions, editDataState } from "./atom";

export const modalStateSelector = selector({
  key: 'modalState',
  get: ({get}) => {
    const currentModalState = get(modalState);

    return `현재 모달창 상태는 ${currentModalState}입니다.`;
  }
});

export const editModalStateSelector = selector({
  key: 'editModalState',
  get: ({get}) => {
    const currentEditModalState = get(editModalState);

    return `현재 수정 모달창 상태는 ${currentEditModalState}입니다.`;
  }
});

export const editDataStateSelector = selector({
  key: 'editDataState',
  get: ({get}) => {
    const currentEditDataState = get(editDataState);

    return `현재 수정 모달창 상태는 ${currentEditDataState}입니다.`;
  }
});

export const editModeSelector = selector({
  key: 'editMode',
  get: ({get}) => {
    const currentEditMode = get(editMode);
    return `현재 모달창 모드는 ${editMode}입니다.`;
  }
});

export const contributionsSelector = selector({
  key: 'contributions',
  get: ({get}) => {
    const contributionAmount = get(contributions);
    return `현재 개수는 ${contributionAmount}입니다.`;
  }
});
