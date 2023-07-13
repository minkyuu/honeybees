import React, { Dispatch, SetStateAction, useRef } from 'react';

import * as S from './SearchBar.styles';

import searchIcon from '../../assets/search-icon.png';

interface SearchBarProps {
  onSearch: Dispatch<SetStateAction<string>>;
}

const SearchBar = (props: SearchBarProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const searchTagHandler = (e: React.ChangeEvent) => {
    e.preventDefault();
    console.log(searchInputRef.current!.value);
    if (searchInputRef.current && searchInputRef.current.value !== '') {
      props.onSearch(searchInputRef.current.value);
    }
  };

  return (
    <>
      <S.SearchLabel htmlFor='searchInput'>
        <S.SearchIcon src={searchIcon} alt="Search Icon"/>
        <S.SearchInput id='searchInput' placeholder='태그 검색' ref={searchInputRef} onChange={searchTagHandler}/>
      </S.SearchLabel>
    </>
  );
}
export default SearchBar;