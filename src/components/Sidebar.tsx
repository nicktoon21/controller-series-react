import { ReactNode } from 'react';

import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Box from '@material-ui/core/Box';


import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';

import { ReactComponent as Logout } from '../assets/logout.svg';

import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';


const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: '15rem',
  },
  box: {
    position: 'absolute',
    bottom: '100px',
  },
});

interface ListMenuProps {
  name: string;
  children: ReactNode;
}

function ListMenu(props: ListMenuProps) {
  return (
    <>
      <List>
        <ListItem button key={props.name}>

          <ListItemIcon>
            {props.children}
          </ListItemIcon>

          <ListItemText primary={props.name} />
        </ListItem>

      </List>
    </>
  );
}

export default function Sidebar() {

  const classes = useStyles();
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, 'left': open });
  };

  const list = () => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: 'left',
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>

        <ListMenu name="Home">
          <HomeOutlinedIcon />
        </ListMenu>

        <ListMenu name="Profile">
          <AccountCircleOutlinedIcon />
        </ListMenu>

        <ListMenu name="Favorite">
          <PlayCircleFilledWhiteOutlinedIcon />
        </ListMenu>

      </List>
      <Divider />
      <List>

        <ListMenu name="Settings">
          <SettingsOutlinedIcon />
        </ListMenu>

        <ListMenu name="Search">
          <FindInPageOutlinedIcon />
        </ListMenu>

      </List>
    </div>
  )

  return (

    <Container >

      <Drawer
      open={state['left']}
      onClose={toggleDrawer(false)}> 
        {list()}
        <Box className={classes.box}>
          <Button>
            <Logout />
            {"Logout"}
          </Button>
        </Box>
      </Drawer>

      <Button
        style={{
          margin: 12,
        }}
        type='submit'
        variant='contained'
        color='primary'
        onClick={
        toggleDrawer(true)
        }
      >
        <MenuOutlinedIcon />
      </Button>
    </Container>
  )
}