import React, { useState } from 'react';
import { InlineField, InlineContainer } from '@components/atoms/inlineField';

// Define the props using a generic interface, where T could be any type that extends a basic structure
interface InlineEditorProps {
  value: string;
  onChange: (newValue: string) => void;  // Function to handle changes
}

const InlineEditInput: React.FC<InlineEditorProps> = ({ value: initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);  // Call the onChange prop function to update the state in the parent component
  };

  return (
    <InlineContainer>
      <InlineField
        value={value}
        onChange={handleChange}
        placeholder="Type here..."
        disableUnderline
        autoFocus
      />
    </InlineContainer>
  );
};

export default InlineEditInput;
