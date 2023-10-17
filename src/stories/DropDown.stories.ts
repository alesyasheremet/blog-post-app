import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MaterialCard from './Card';
import InputText from './InputText';
import TextArea from './TextArea';
import Dropdown from './DropDown';



const meta = {
  title: 'Example/Page',
  component: Dropdown,
  parameters: {
    
  },
  } satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedIn3: Story = {
  args:{
    label: 'Field Name:',
    value: '',
    options: ['d'],
    id: '',
    name: ''
  }};

