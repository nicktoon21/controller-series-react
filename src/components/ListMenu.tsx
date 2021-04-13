import { ReactNode } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

interface ListMenuProps {
    name: string;
    children: ReactNode;
}

export default function ListMenu(props: ListMenuProps){
    return(
        <>
            <List>
                <ListItem button key={props.name}>
                    
                    <ListItemIcon>
                        {props.children}
                    </ListItemIcon>

                    <ListItemText primary={props.name}/>
                </ListItem>

            </List>
        </>
    );
}


/*
 <ListMenu name=""
*/