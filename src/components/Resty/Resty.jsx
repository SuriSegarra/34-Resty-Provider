import React from 'react';
import Request from '../components/Request/Request';
import Response from '../components/Response/Response';
import HistoryList from '../components/HIstory/HistoryList';

const Resty = () => (
    <>
      <HistoryList/>
      <Request/>
      <Response/>
    </>
  );

export default Resty;