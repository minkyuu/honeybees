import { Link } from 'react-router-dom';

import bee from '../../assets/bee.png';

export default function MainPage() {
  return (
    <div>
      Welcome to Honeybees! 🐝
      <br />
      <img src={bee} alt="test"></img>
      <Link to="/login">시작하기</Link>
    </div>
  );
}
