import { Dispatch, SetStateAction, useState } from 'react';
import * as S from './TodayMarker.styles';

interface TodayMarkerProps {
  marker: Dispatch<SetStateAction<string>>;
  state: string;
}

const TodayMarker = (props: TodayMarkerProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const checkMarker = (e: React.ChangeEvent) => {
    props.marker(e.target.id);
    setIsEditing(true);
  };

  return (
    <>
      <span>Today Marker</span>
      <S.Container>
        {/* Marker 종류들 - radio 타입 */}
        <S.Marker type="radio" name="marker" id="good1" value="good1" onChange={checkMarker}/>
        <S.MarkerLabel htmlFor="good1" marker={'good1'} curState={!isEditing && props.state === 'good1'}/>
        <S.Marker type="radio" name="marker" id="good2" value="good2" onChange={checkMarker}/>
        <S.MarkerLabel htmlFor="good2" marker={'good2'} curState={!isEditing && props.state === 'good2'}/>
        <S.Marker type="radio" name="marker" id="good3" value="good3" onChange={checkMarker}/>
        <S.MarkerLabel htmlFor="good3" marker={'good3'} curState={!isEditing && props.state === 'good3'}/>
        <S.Marker type="radio" name="marker" id="good4" value="good4" onChange={checkMarker}/>
        <S.MarkerLabel htmlFor="good4" marker={'good4'} curState={!isEditing && props.state === 'good4'}/>
        <S.Marker type="radio" name="marker" id="good5" value="good5" onChange={checkMarker}/>
        <S.MarkerLabel htmlFor="good5" marker={'good5'} curState={!isEditing && props.state === 'good5'}/>
      </S.Container>
    </>
  );
};
export default TodayMarker;
