import style from './Footer.module.css';
import { Button } from '@chakra-ui/react';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className={style.container}>
      <Link to='/BagHistory' className={style.link} >
        <Button className={style.button} borderRadius='0px' size='xl' >Luggage</Button>
      </Link>
      <Link to='/Status' className={style.link} >
        <Button className={style.button} borderRadius='0px' size='xl' >Status</Button>
      </Link>
      <Link to='/FlightHistory' className={style.link} >
        <Button className={style.button} borderRadius='0px' size='xl' >Flight</Button>
      </Link>
      
    </div>
  );
}

export default Footer;
