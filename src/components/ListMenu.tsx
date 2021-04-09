import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

interface ListMenuProps {
    name: [];
    children: JSX.Element;
}

export default function ListMenu(props: ListMenuProps){
    const itens = props.name;
    return(
        <>
            <List>
                {itens.map((text, index) => (
                    <ListItem button key={text}>

                        <ListItemIcon>
                            {props.children}
                        </ListItemIcon>
                        
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </>
    );
}


/*
 <ListMenu name=""
*/