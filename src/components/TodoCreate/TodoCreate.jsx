import { Box, Paper, Button, TextField } from '@mui/material';
import {
  PaperProps,
  BoxProps,
  TextFieldProps,
  ButtonProps,
} from './TodoCreateProps.js';

/**
 * 할 일을 생성하는 컴포넌트
 * @returns {JSX.Element} 할 일 생성 컴포넌트
 */
function TodoCreate() {
  return (
    <Paper {...PaperProps}>
      <Box sx={BoxProps}>
        <TextField {...TextFieldProps} />
        <Button {...ButtonProps}>추가</Button>
      </Box>
    </Paper>
  );
}

export default TodoCreate;
