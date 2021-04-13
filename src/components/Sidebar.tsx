import clsx from 'clsx';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import InboxIcon from '@material-ui/icons/Inbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import ListMenu from '../components/ListMenu';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';

import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';


const useStyles = makeStyles({
    list: {
      width: 350,
    },
    fullList: {
      width: 'auto',
    },
    fab: {
      position: 'absolute',
      top: "3px",
      left: "5px",
    },
  });


export default function Sidebar() {

    const classes = useStyles();
    const [state, setState] = useState({ left:false });

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
    
        setState({ ...state,'left': open});
      };

      const list= () => (<div
        className={clsx(classes.list, {
          [classes.fullList]:'left',
    })}
        role="presentation"
        onClick={toggleDrawer( false)}
        onKeyDown={toggleDrawer( false)}
        >
            <List>
                <ListMenu name="Teste">
                  <InboxIcon />
                </ListMenu>
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
        )
      
    return (
      <div>
        <Button  onClick={toggleDrawer(true)}>{
          <Fab 
          color="primary"
          aria-label="add"
          className={classes.fab}
          >
            <AddIcon />
          </Fab>
          }</Button>
        <Drawer open={state['left']} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
    </div>
    )
}