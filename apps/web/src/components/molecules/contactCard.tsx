import { Box, Typography, Avatar } from '@mui/material';
import { SystemStyleObject, Theme } from '@mui/system';

import { Card } from '@components/atoms';
import { IContact } from 'react-coding-interview-shared/models';
import InlineEditInput from '@components/organisms/inlineField';

export interface IContactCardProps {
  person: IContact;
  sx?: SystemStyleObject<Theme>;
}

export const ContactCard: React.FC<IContactCardProps> = ({
  person: { name, email },
  sx,
}) => {

  const onChange = () => {
    console.log('component clicked')
  }

  return (
    <Card sx={sx}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar />
        <Box textAlign="center" mt={2}>
          <Typography variant="subtitle1" lineHeight="1rem">
            {name}
          </Typography>
          <InlineEditInput value={email} onChange={onChange} />
          {/* <Typography variant="caption" color="text.secondary">
            {email}
          </Typography> */}
        </Box>
      </Box>
    </Card>
  );
};
