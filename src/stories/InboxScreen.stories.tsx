
import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { PureInboxScreen, ScreenProps } from '../components/InboxScreen';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import * as TaskListStories from './TaskList.stories'

// A super-simple mock of a redux store
const store:any = {
    getState: () => {
      return {
        tasks: TaskListStories.Default.args?.tasks,
      };
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
  };

export default {
  component: PureInboxScreen,
  decorators: [(story: () => React.ReactNode) => <Provider store={store}>{story()}</Provider>],
  title: 'InboxScreen',
};


const Template: Story<ScreenProps> = args => <PureInboxScreen {...args} />;

//export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: 'Something',
};