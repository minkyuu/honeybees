import { useState, ReactNode } from 'react';

import * as S from './Carousel.styles';

interface CarouselProps {
  size: number;
  images: Array<String>;
}

const IMG_WIDTH = 450;

const Carousel = ({size, images} : CarouselProps) => {
  const [curIdx, setCurIdx] = useState(0);
  const [curPosition, setCurPosition] = useState(0);
  const currentStatus = true;

  // console.log(`curIdx: ${curIdx} size: ${size}, position: ${curPosition}`);

  const imageList: ReactNode[] = [];
  images.forEach((imgUrl, idx) => {
    imageList.push(
      <S.ImageContainer key={idx}>
        <S.Image src={imgUrl as string} width={IMG_WIDTH}/>
      </S.ImageContainer>
    );
  });

  const dotNav: ReactNode[] = [];

  for (let i = 0; i < size; i++) {
    if(i === 0) {
      dotNav.push(
        // <S.DotIndicator key={i} className='current' />
        <S.DotIndicator key={i} current={currentStatus} />
      );
      continue;
    }
    dotNav.push(
      // <S.DotIndicator key={i}/>
      <S.DotIndicator key={i} current={!currentStatus}/>
    );
  }
  
  const moveIndicator = (direction: string) => {
    const $currentDot = document.querySelector('ul');
    // const $currentDot = document.querySelector('.current');

    console.log(curIdx, $currentDot, $currentDot?.children[curIdx]);
    if (direction === 'prev'){
      // $currentDot?.previousElementSibling?.classList.add('current');
      // $currentDot?.classList.remove('current');
      // console.log($currentDot);
    } else if (direction === 'next') {
      // $currentDot?.children[curIdx].classList
      // $currentDot?.nextElementSibling?.classList.add('current');
      // $currentDot?.classList.remove('current');
    }
  };

  const showPrevImage = () => {
    setCurIdx(curIdx - 1);
    setCurPosition(curPosition + IMG_WIDTH);
    moveIndicator('prev');
  };

  const showNextImage = () => {
    setCurIdx(curIdx + 1);
    setCurPosition(curPosition - IMG_WIDTH);
    moveIndicator('next');
  };

  return (
    <S.Container>
      <S.Window position={curPosition}>
        {imageList}
      </S.Window>

      <S.DotNav>
        {dotNav}
      </S.DotNav>

      {curIdx !== 0 && <S.PrevButton onClick={showPrevImage} />}
      {curIdx !== size - 1 && <S.NextButton onClick={showNextImage} />}
    </S.Container>
  );
};

export default Carousel;
