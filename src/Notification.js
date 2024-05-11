

import React from 'react';

const Notification = ({ message }) => {
  return (
    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
      <p className="font-bold">Notification</p>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
