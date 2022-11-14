import React from 'react';
import {
  Box,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { Progress } from '@chakra-ui/react';
import './statusboxsmall.css';

const StatusBoxSmall = ({ type, status, progress }) => {
  if (type === 'bag') {
    let title = 'STATUS BAGAGEM';
    let icon =
      'https://uploaddeimagens.com.br/images/004/161/697/full/Bag.png?1668332213';
    return (
      <>
        <Box
          className="statusboxsmall-component"
          p="10px"
          color="white"
          borderRadius="15px"
          bg="white"
        >
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem colSpan={1}>
              <img className='statusboxsmall-icon-bag' height="50" width="50" src={icon} alt="icon"></img>
            </GridItem>
            <GridItem colSpan={2}>
              <div className="statusboxsmall-align">
                <div className="statusboxsmall-content">
                  <p className="statusboxsmall-title">{title}</p>
                  <p className="statusboxsmall-status">{status}</p>
                </div>
                <Progress className="statusboxsmall-progressbar" value={progress} />
              </div>
            </GridItem>
            <GridItem colSpan={3}></GridItem>
          </Grid>
        </Box>
      </>
    );
  } else {
    let icon =
      'https://uploaddeimagens.com.br/images/004/161/699/full/Group_2.png?1668336270';
    let title = 'STATUS VOO';
    return (
      <>
        <Box
          className="statusboxsmall-component"
          p="10px"
          color="white"
          borderRadius="15px"
          bg="white"
        >
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem colSpan={2}>
              <div className="statusboxsmall-align">
                <div className="statusboxsmall-content">
                  <p className="statusboxsmall-title">{title}</p>
                  <p className="statusboxsmall-status">{status}</p>
                </div>
                <Progress className="statusboxsmall-progressbar" value={progress} />
              </div>
            </GridItem>
            <GridItem colSpan={1}>
              <img className="statusboxsmall-icon-air" height="50" width="50" src={icon} alt="icon"></img>
            </GridItem>
            <GridItem colSpan={3}></GridItem>
          </Grid>
        </Box>
      </>
    );
  }
};

export default StatusBoxSmall;
