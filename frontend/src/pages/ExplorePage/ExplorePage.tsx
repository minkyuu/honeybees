import SearchBar from '../../components/SearchBar/SearchBar';
import PostList from '../../components/PostList/PostList';
import { useState } from 'react';

const ExplorePage = () => {
  const [searchTag, setSearchTag] = useState<string>('');

  return (
    <div>
      <SearchBar onSearch={setSearchTag} />

      <PostList searchTag={searchTag} />
    </div>
  );
}
export default ExplorePage;