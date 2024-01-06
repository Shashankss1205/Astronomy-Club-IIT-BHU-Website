import React from 'react';
import events_data from './data'
import EventCard from '@/app/Components/EventCard';



const containerStyle = {
  margin: '60px 150px', // Set margin-top to the height of your navbar
  display: 'flex',
  
  flexDirection: 'column',
  alignItems: 'center',
};

const headingStyle = {
  fontSize: '24px' // Set the desired font size
};

const Activities = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Events and Activities</h1>
      <div className='flex flex-wrap justify-center gap-x-10 gap-y-10'>
        {events_data.map((event) => <EventCard title={event.title} image={event.img} disc={event.desc}/>)}
      </div>
    </div>
  );
};

export default Activities;
