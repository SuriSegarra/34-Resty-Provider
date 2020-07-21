import React from 'react';
import Request from '../Request/Request';
import Response from '../Response/Response';
import HistoryList from '../History/HistoryList';

const Resty = () => (
    <>
      <HistoryList/>
      <Request/>
      <Response/>
    </>
  );

export default Resty;