import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuItem(props) {
   const { nemuItem } = props;
   console.log(props);
   return (
      <div className="d-flex justify-content-between service-title pb-2 mb-2 border-bottom border-info-subtle">
         <Link to="/booking" className="link-no-decoration ">
            {nemuItem.name}
         </Link>{' '}
         <span>{nemuItem.price}</span>
      </div>
   );
}
