import React from 'react';
import classes from './Dashboard.module.css';

import nuuk from '../components/Nuuk.png';
import vegan from '../components/Vegan.png';
import redLight from '../components/red_light.jpg';
import {Link} from 'react-router-dom';

// import Thumbnail from 'react-thumbnail';

const Dashboard = () => {

   const onClicked1 = () => {
      localStorage.setItem("id","1");
   }
   const onClicked2 = () => {
      localStorage.setItem("id","2");
   }
    return(
        <div className={classes.background}>
           <h1>Select a Landing Page Template to Proceed</h1>
          <div className={classes.wrapper}>
            {/* <Thumbnail width={250}
               height={250}
               page="https://google.co.in"
               scale={4} /> */}

               {/* <Link to='/template1' className={classes.landingpagePreview}>
                  <iframe src="/template1" frameborder="0" marginheight="1" marginwidth="1" seamless="seamless" scrolling="no" allowtransparency="true"></iframe>
               </Link> */}
               <Link onClick={onClicked1} to='/template2' className={classes.landingpagePreview}>
                  {/* <iframe src="/template2" frameborder="0" marginheight="1" marginwidth="1" seamless="seamless" scrolling="no" allowtransparency="true"></iframe> */}
                  <img src={nuuk} alt="logo1" />
               </Link>
               <Link onClick={onClicked2} to='/template3' className={classes.landingpagePreview}>
                  {/* <iframe src="/template3" frameborder="0" marginheight="1" marginwidth="1" seamless="seamless" scrolling="no" allowtransparency="true"></iframe> */}
                  <img src={vegan} alt="logo2" />
               </Link>

               <Link to='/landingpage' className={classes.iconWrapper}><i class="fas fa-plus" ></i></Link>
          </div>
        </div>
    )
}
export default Dashboard;