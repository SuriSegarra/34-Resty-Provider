import React from 'react';
import HistoryItem from './HistoryItem';
import { useResty } from '../../Hooks/RestyProvider';

const HistoryList = () => {
 const { history } = useResty();

  const historyElements = history.map((item, i) => (
    <li key={i}>
      <HistoryItem {...item} />
    </li>
  ));

  return (
    <>
      <h2>History</h2>
      <aside  className={styles.container}>
        <ul className={styles.History}>
          {historyElements}
        </ul>
      </aside>
    </>
  );
};

export default HistoryList;