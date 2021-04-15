import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export default function Recovery() {
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
                {'Recupere sua senha'}
            </Typography>
            <Typography
                variant='body1'
                align='center'
            >
                {'Informe seu email de cadastro.'}
            </Typography>
            <Container maxWidth={'xs'}>
                <form action="">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="outlined-basic"
                        label="Email" />
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
                            {'Enviar'}
                        </Button>
                    </Box>
                </form>
            </Container>
        </Container>
    )
}