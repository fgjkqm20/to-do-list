import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function TodoCreate() {
  return (
    <Paper elevation={3} variant='elevation' sx={{ marginTop: 3 }}>
      <Box
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TextField
          id='standard-basic'
          label='할 일'
          variant='standard'
          sx={{ width: '70%' }}
        />
        <Button variant='outlined' size='small'>
          추가
        </Button>
      </Box>
    </Paper>
  );
}

export default TodoCreate;
