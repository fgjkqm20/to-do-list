import Typography from '@mui/material/Typography';

function TodoHead() {
  return (
    <>
      <Typography variant='h4' component='h1' sx={{ color: '#212121' }}>
        2024년 03월 20일
      </Typography>
      <Typography variant='h5' component='h2' sx={{ color: '#757575' }}>
        수요일
      </Typography>
      <hr />
    </>
  );
}

export default TodoHead;
