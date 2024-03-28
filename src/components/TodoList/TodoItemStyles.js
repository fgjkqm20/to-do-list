import { styled, Box, Card, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

/**
 * Todo Item Wrapper Component
 * @param {object} props - Component props
 * @return {JSX.Element} Styled Box Component
 */
const TodoItemWrapper = styled(Box)`
  display: flex;
`;

/**
 * Todo Item Text Component
 * @param {object} props - Component props
 * @return {JSX.Element} Styled Typography Component
 */
const TodoItemText = styled(Typography)`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-left: 30px;
`;

/**
 * Todo Item Delete Component
 * @param {object} props - Component props
 * @return {JSX.Element} Styled Box Component
 */
const DeleteButtonWrapper = styled(Box)`
  display: flex;
  align-items: center;
  width: ${(props) => props.theme.typography.fontSize};
  height: ${(props) => props.theme.typography.fontSize};
  margin: 15px 0;
  margin-right: 30px;
`;

/**
 * Styled IconButton Component
 * @param {object} props - Component props
 * @return {JSX.Element} Styled IconButton Component
 */
const StyledIconButton = styled(IconButton)`
  width: ${(props) => props.theme.typography.fontSize};
  height: ${(props) => props.theme.typography.fontSize};
  padding: 0;
`;

/**
 * Todo Item DeleteIcon Component
 * @param {object} props - Component props
 * @return {JSX.Element} Styled DeleteIcon Component
 */
const TodoItemDeleteIcon = styled(DeleteIcon)`
  font-size: ${(props) => props.theme.typography.fontSize};
`;

/**
 * Styled Card Component
 * @param {Object} props - Component props
 * @param {Object} props.theme - Theme 객체
 * @return {JSX.Element} Styled Card Component
 */
const StyledCard = styled(Card)(({ theme }) => ({
  color: theme.palette.grey[900],
  marginTop: 30,
}));

export {
  TodoItemWrapper,
  TodoItemText,
  DeleteButtonWrapper,
  StyledIconButton,
  TodoItemDeleteIcon,
  StyledCard,
};
