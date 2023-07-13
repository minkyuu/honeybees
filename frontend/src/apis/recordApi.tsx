import { Dispatch, ReactNode, SetStateAction } from 'react';
import { db } from '../firebase.config';
import { child, get, ref } from 'firebase/database';
import Activity from '../components/MyActivity/Activity/Activity';

export const getActivities = (
  nickname: string | undefined,
  setActivities: Dispatch<SetStateAction<ReactNode[]>>
) => {
  
  const tempList: ReactNode[] = [];
  get(child(ref(db), 'record/' + nickname)).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      for (const recordDate in data) {
        tempList.unshift(
          <Activity
            key={recordDate}
            date={recordDate}
            marker={data[recordDate][data[recordDate].length - 1].marker}
            contributions={data[recordDate].length}
            comment={data[recordDate][data[recordDate].length - 1].comment}
            nickname={nickname!}
          />
        );
      }
    }
    setActivities(tempList);
  });
};
