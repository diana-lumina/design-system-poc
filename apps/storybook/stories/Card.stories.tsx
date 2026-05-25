import type { Meta, StoryObj } from '@storybook/react';
import { CardCourse } from '@workspace/ui/components/card-course';

const meta: Meta<typeof CardCourse> = {
  title: 'Components/CardCourse',
  component: CardCourse,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    type: {
      control: 'select',
      options: ['evaluative', 'transactional'],
      description: 'Define la variante del componente',
    },
    badge: {
      control: 'text',
      description: 'Solo aplica en type="transactional"',
    },
    isFavorite: {
      control: 'boolean',
      description: 'Solo aplica en type="transactional"',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardCourse>;

const baseProps = {
  title: 'Introducción al Machine Learning',
  category: 'Inteligencia artificial',
  price: 22000,
  rating: 4.5,
  hours: 100,
  modality: 'Presencial',
  level: 'Avanzado',
  image: 'https://media.istockphoto.com/id/966248982/photo/robot-with-education-hud.jpg?s=612x612&w=0&k=20&c=9eoZYRXNZsuU3edU87PksxN4Us-c9rB6IR7U_IGZ-U8=',
  institution: 'https://placehold.co/40x40',
};

export const Evaluative: Story = {
  name: 'CardCourse — Evaluativa',
  args: {
    ...baseProps,
    type: 'evaluative',
  },
  render: (args) => (
    <div className="w-[325px]">
      <CardCourse {...args} />
    </div>
  ),
};

export const Transactional: Story = {
  name: 'CardCourse — Transaccional',
  args: {
    ...baseProps,
    type: 'transactional',
    badge: '15% OFF',
    description: 'Lorem ipsum dolor sit amet consectetur. Nisl nibh phasellus condimentum mi faucibus.',
    isFavorite: false,
  },
  render: (args) => (
    <div className="w-[325px]">
      <CardCourse {...args} />
    </div>
  ),
};

export const Playground: Story = {
  name: 'CardCourse — Playground',
  args: {
    ...baseProps,
    type: 'transactional',
    badge: '15% OFF',
    description: 'Lorem ipsum dolor sit amet consectetur. Nisl nibh phasellus condimentum mi faucibus.',
    isFavorite: false,
  },
  render: (args) => (
    <div className="w-[325px]">
      <CardCourse {...args} />
    </div>
  ),
};