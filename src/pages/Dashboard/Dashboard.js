import React from 'react';
import MetaTags from '../../components/MetaTags';
import Sidebar from '../../components/Sidebar';
import Todo from '../../components/Todo';

const Dashboard = () => {
  return (
    <div>
      <MetaTags type={'Dashboard'} />
      <Sidebar />
      <Todo />
    </div>
  );
};

export default Dashboard;
