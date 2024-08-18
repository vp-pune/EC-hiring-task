import React from 'react';
import { useLocation } from 'react-router-dom';


function User() {
    const location = useLocation();
    const { userEmail } = location.state || {};

  return (
    <div>
          {userEmail && (
                <div className='text-center font-bold text-lg pt-10'>Logged in as:  {userEmail}</div>
            )}
    </div>
  )
}

export default User