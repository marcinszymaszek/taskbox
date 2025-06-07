import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";

import Task from "./Task";

export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

const meta = {
  component: Task,
  title: "Task",
  tags: ["autodocs"],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
    },
  },
};

const longTitleString =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam maiores, molestiae dignissimos sapiente assumenda accusamus tempora similique temporibus quisquam, voluptatibus dolore ea officia asperiores. Assumenda rem quis ullam. Earum perferendis pariatur molestiae odio assumenda inventore suscipit aspernatu";

export const LongTitle: Story = {
  args: {
    task: {
      ...Default.args.task,
      title: longTitleString,
    },
  },
};
