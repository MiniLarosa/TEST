import React from 'react';
import { useSelector } from 'react-redux';

const Developers = () => {
  const {
    dashboard
  } = useSelector((state) => state.dashboardSlice);
  
  return (
    <div style={{ marginRight: '20px' }}>
      <h2>Desarrolladores</h2>
      {dashboard?.users?.map((developer, index) => (
        <p key={developer.id ?? index}>{developer.nombre}</p>
      ))}
    </div>
  );
};

export default Developers;