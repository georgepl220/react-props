import React from 'react';
import ProfileCard from './components/Card/ProfileCard'; // Врахуйте правильний шлях до компонента

function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <ProfileCard 
        title="Плонський Георгій"
        description="Студент"
        image="https://via.placeholder.com/300"
      />
    </div>
  );
}

export default App;
