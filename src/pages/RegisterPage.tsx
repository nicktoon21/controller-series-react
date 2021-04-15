import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export default function RegisterPage() {
    return (
        <Container
            style={{
                marginTop: '10rem'
            }}
            maxWidth='sm'>
            <Typography
                variant='h5'
                align='center'
            >
                {'Cadastre-se '}
            </Typography>
            <Typography
                variant='body1'
                align='center'
            >
                {'Efetue o cadastro para poder ter um controle das suas séries com maior facilidade.'}
            </Typography>
            <Container maxWidth={'xs'}>
                <form action="">
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
                        label="Email" />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="outlined-basic"
                        label="Password"
                        type="password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="outlined-basic"
                        label="Confirm Password"
                        type="password"
                    />
                    <Box
                        mt={2}
                        style={{
                            display: 'flex',
                        }}
                    >
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            href="/"
                        >
                            {'Salvar'}
                        </Button>
                        <Button
                            style={{
                                marginLeft: '10px'
                            }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            href="/"
                        >
                            {'Cancelar'}
                        </Button>
                    </Box>
                </form>
            </Container>
        </Container>
    )
}