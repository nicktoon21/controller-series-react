import { ReactNode } from 'react';

import clsx from 'clsx';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Box from '@material-ui/core/Box';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';

import { ReactComponent as Login } from '../assets/login.svg';
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
  fab: {
    position: 'absolute',
    top: "3px",
    left: "5px",
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between',
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

  const list = () => (<div
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

    <div>
      <Button onClick={toggleDrawer(true)}>{
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fab}
        >
          <AddIcon />
        </Fab>}
      </Button>

      <Drawer open={state['left']} onClose={toggleDrawer(false)}>
        <Box>
          {list()}
        </Box>
        <Box className={classes.box}>
          <Button>
            <Login />
            {"Login"}
          </Button>
          <Button>
            <Logout />
            {"Logout"}
          </Button>
        </Box>
      </Drawer>
    </div>
  )
}