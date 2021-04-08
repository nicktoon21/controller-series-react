import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Copyright from '../components/Copyright';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LocalMovies from '@material-ui/icons/LocalMovies';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { createStyles, makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => 
createStyles({
        contents: {
            padding: "0 1rem",
            display: 'flex',
            flexDirection:'column',
            alignItems: 'center',
            backgroundColor: '#FFF', 
            height: '100vh',
        },
        form: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '2rem',
        },
    })
);

export function HomePage() {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" >
            <CssBaseline/>
            <Typography component='div' align='center' className={classes.contents}>

                <LocalMovies color="primary" fontSize="large"/>
                
                <Typography component="h1" variant="h5">
                    Bem vindo ao Controller Series
                </Typography>

                <form className={classes.form} noValidate>
                    <TextField
                    variant="outlined"
                    margin="normal" 
                    required
                    fullWidth
                    id="outlined-basic"
                    label="Username" />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="outlined-basic" 
                    label="Password"
                    type="password" 
                        />
                    <Box mt={2}>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    >Entrar</Button> 
                    </Box>                        
                </form>

                <Box mt={2}>
                    <Grid container>
                        <Grid item sm>
                            <Link variant="body2">
                                {"Esqueceu a senha?"}
                            </Link>
                        </Grid>
                        <Grid item xs>
                            <Link variant="body2">
                                {"Não tem uma conta? Cadastre-se"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>

                <Box mt={8}>
                    <Copyright />
                </Box>
                
            </Typography>
        </Container>
    )
}

export default HomePage;