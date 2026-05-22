import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@workspace/ui/components/card';
import { RatingBadge } from '@workspace/ui/components/rating-badge';
import { BrandButton } from '@workspace/ui/components/brand-button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  name: 'Card — Default',
  render: (args) => (
    <Card {...args} className="w-[325px]">
      <CardHeader>
        <CardTitle>Título de la card</CardTitle>
        <CardDescription>Descripción de apoyo con información adicional.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Contenido principal de la card.</p>
      </CardContent>
    </Card>
  ),
};

export const CourseCard: Story = {
  name: 'Card — Curso (Evaluativos)',
  render: () => (
    <Card className="w-[325px] p-0">

      {/* Imagen con badges */}
      <div className="relative">
        <img
          src="https://placehold.co/325x180/0a1628/ffffff?text=Img"
          alt="Curso"
          className="w-full object-cover"
        />
        <RatingBadge rating={4.5} />
        <BrandButton
          src="https://placehold.co/40x40"
          alt="Logo institución"
        />
      </div>

      {/* Contenido */}
      <CardContent className="flex flex-col gap-3 px-4 py-3">

        {/* Título */}
        <div className="flex gap-2 items-center">
          <h3 className="text-base font-medium leading-6 text-[#18181B]" >
            Introducción al Machine Learning
          </h3>
        </div>

        {/* Categoría */}
        <span className="text-xs font-normal leading-[18px] text-[#18181B]" >
          Inteligencia artificial
        </span>

        {/* Meta info */}
        <div className="grid grid-cols-2 gap-y-2 text-xs text-[14px]">
          <span className="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            100 horas
          </span>
          <span className="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Presencial
          </span>
        
        </div>

        {/* Precio */}
        <div className="flex items-center justify-between pt-1">
            <span className="flex items-center gap-1 text-sm ">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
            Avanzado
          </span>
          <span className="text-[18px] font-semibold leading-[27px] text-[#18181B]" >
            $22,000 MXN
          </span>
        </div>

      </CardContent>
    </Card>
  ),
};