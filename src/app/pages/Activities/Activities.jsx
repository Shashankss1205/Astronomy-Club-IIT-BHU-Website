import React from 'react';

const containerStyle = {
  marginTop: '60px', // Set margin-top to the height of your navbar
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'calc(100vh - 60px)' // Adjust the height to exclude the navbar height
};

const headingStyle = {
  fontSize: '24px' // Set the desired font size
};

const Activities = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Events and Activities</h1>
    </div>
  );
};

export default Activities;
