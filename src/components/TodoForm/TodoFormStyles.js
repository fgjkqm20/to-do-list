import { styled, Box, Card, TextField } from '@mui/material';

/**
 * Todo Form Wrapper
 * @param {object} props - Component props
 * @returns {JSX.Element} Styled Card Component
 */
const TodoFormWrapper = styled(Card)`
  margin-top: 30px;
`;

/**
 * Form Control Wrapper
 * @param {object} props - Component props
 * @returns {JSX.Element} Styled Box Component
 */
const FormControlWrapper = styled(Box)`
  padding: 20px;
  display: flex;
  place-content: center;
`;

/**
 * Styled TextField Component
 * @param {object} props - Component props
 * @returns {JSX.Element} Styled TextField Component
 */
const StyledTextField = styled(TextField)`
  width: 80%;
`;

export { FormControlWrapper, TodoFormWrapper, StyledTextField };
