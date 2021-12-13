import React from 'react';
import './AppFooter.css';

const AppFooter = () => (
    <footer>
      <div width="370" align="right" className="center-column">
            <img src={process.env.PUBLIC_URL + '/images/copyright.gif'} width="370" height="32" alt=""/>
        </div>
    </footer>
  );
  
  export default AppFooter;