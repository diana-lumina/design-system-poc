import type { Meta, StoryObj } from '@storybook/react';
import { RatingBadge } from '@workspace/ui/components/rating-badge';

const meta: Meta<typeof RatingBadge> = {
  title: 'shadcn/RatingBadge',
  component: RatingBadge,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    rating: { control: { type: 'number', min: 0, max: 5, step: 0.1 } },
  },
  decorators: [
    (Story) => (
      <div className="relative w-64 h-12 bg-muted rounded-xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RatingBadge>;

export const Default: Story = {
  args: { rating: 4.5 },
};

export const High: Story = {
  args: { rating: 5.0 },
};

export const Low: Story = {
  args: { rating: 2.3 },
};

