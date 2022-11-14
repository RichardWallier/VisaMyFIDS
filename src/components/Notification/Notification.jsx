import {
  Box,
  Heading,
  Image,
} from '@chakra-ui/react';

import { Grid, GridItem } from '@chakra-ui/react'

import Style from './Notification.module.css'

const Notification = (props) => {
  return (
    <Box className={Style.container} fontSize="10px" borderRadius="5px">
      <Grid templateColumns='repeat(5, 1fr)' gap={4} padding="0px 5px">
        <GridItem className={Style.imageGrid} colSpan={1}>
          <Image bg={props.bgimg} borderRadius="4px" padding="5px" width="60%" src={props.image} />
        </GridItem>
        <GridItem colSpan={3} h='10'>
          <Heading size="5%">
            {props.title}
          </Heading>
          <span>{props.content}</span>
        </GridItem>
        <GridItem className={Style.timeGrid} colSpan={1}>
          <span className={Style.time}>{props.time}</span>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Notification;