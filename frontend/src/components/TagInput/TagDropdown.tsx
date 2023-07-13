import React, { Dispatch, SetStateAction, useRef, useState } from 'react';

import * as S from './TagDropdown.styles';

interface TagDropdownProps {
  tag: Dispatch<SetStateAction<string>>;
}

const TagDropdown = (props: TagDropdownProps) => {
  const [isExpand, setIsExpand] = useState(false); 
  const [currentTag, setCurrentTag] = useState<string>('');
  
  const selectTag = (e: React.MouseEvent) => {
    // console.log('선택한 tag : ',e.currentTarget.textContent);
    setCurrentTag(e.currentTarget.textContent!);
    props.tag(e.currentTarget.textContent!);
    setIsExpand(!isExpand);
  };

  return (
    <S.Container>
      <S.DropdownButtonLabel htmlFor='button'>
        {currentTag === '' ? '태그 선택' : currentTag}
        <S.DropdownButton type='button' id='button' onClick={() => {setIsExpand(!isExpand)}} />
      </S.DropdownButtonLabel>
      {isExpand && 
        <S.Dropdown>
          <>
            <S.TagList onClick={selectTag}>새로운 습관</S.TagList>
            <S.TagList onClick={selectTag}>습관 만들기</S.TagList>
            <S.TagList onClick={selectTag}>끄적끄적</S.TagList>
            <S.TagList onClick={selectTag}>휴식</S.TagList>
          </>
        </S.Dropdown>
      }
    </S.Container>
  );
}
export default TagDropdown;