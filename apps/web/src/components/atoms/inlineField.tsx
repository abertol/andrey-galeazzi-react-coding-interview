import { Input, Box, styled } from '@mui/material';

export const InlineField = styled(Input)(({ theme }) => ({
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
      '&.Mui-focused': {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
      },
}));

export const InlineContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    maxWidth: '100%',
    background: '#FFF',
    boxShadow: theme.shadows[2],
    padding: theme.spacing(3),
    borderRadius: 8,
  }));