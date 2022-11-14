import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Progress } from '@chakra-ui/react';
import './statusboxlarge.css';

const StatusBoxLarge = ({ type, status, progress }) => {
  if (type === 'bag') {
    let title = 'STATUS BAGAGEM';
    let icon =
      'https://uploaddeimagens.com.br/images/004/161/697/full/Bag.png?1668332213';
    return (
      <>
        <Box
          className="statusboxlarge-component"
          p="10px"
          color="white"
          borderRadius="15px"
          bg="white"
        >
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem colSpan={1}>
              <img height="80" width="80" src={icon} alt="icon"></img>
            </GridItem>
            <GridItem colSpan={2}>
              <div className="statusboxlarge-align">
                <div className="statusboxlarge-content">
                  <p className="statusboxlarge-title">{title}</p>
                  <p className="statusboxlarge-status">{status}</p>
                </div>
              </div>
            </GridItem>
            <GridItem colSpan={3}>
              <Progress className="statusboxlarge-progressbar" value={progress} />
            </GridItem>
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
          className="statusboxlarge-component"
          p="10px"
          color="white"
          borderRadius="15px"
          bg="white"
        >
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem colSpan={2}>
              <div className="statusboxlarge-align">
                <div className="statusboxlarge-content">
                  <p className="statusboxlarge-title">{title}</p>
                  <p className="statusboxlarge-status">{status}</p>
                </div>
              </div>
            </GridItem>
            <GridItem colSpan={1}>
              <img height="80" width="80" src={icon} alt="icon"></img>
            </GridItem>
            <GridItem colSpan={3}>
              <Progress className="statusboxlarge-progressbar" value={progress} />
            </GridItem>
          </Grid>
        </Box>
      </>
    );
  }
};

export default StatusBoxLarge;
