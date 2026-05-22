import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@workspace/ui/components/button';

const meta: Meta<typeof Button> = {
  title: 'shadcn/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'alternative', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
    },
    disabled: { control: 'boolean' },
    asChild: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: 'Button' },
};

export const Secondary: Story = {
  args: { children: 'Secondary', variant: 'secondary' },
};

export const Destructive: Story = {
  args: { children: 'Eliminar', variant: 'destructive' },
};

export const Alternative: Story = {
  args: { children: 'Alternative', variant: 'alternative' },
};

export const Link: Story = {
  args: { children: 'Link', variant: 'link' },
};

export const Disabled: Story = {
  args: { children: 'Disabled', disabled: true },
};

export const AllVariants: Story = {
  name: 'Todas las variantes',
  render: () => (
    <div className="flex flex-wrap gap-3 p-4">
      {(['default', 'secondary', 'destructive', 'alternative', 'link'] as const).map(
        (v) => <Button key={v} variant={v}>{v}</Button>
      )}
    </div>
  ),
};

export const AllSizes: Story = {
  name: 'Todos los tamaños',
  render: () => (
    <div className="flex flex-wrap items-center gap-3 p-4">
      {(['xs', 'sm', 'default', 'lg'] as const).map(
        (s) => <Button key={s} size={s}>{s}</Button>
      )}
    </div>
  ),
};

export const HoverStates: Story = {
  name: 'QA — Estados hover',
  parameters: { layout: 'padded' },
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold">Estados hover</h3>
        <p className="text-sm text-muted-foreground">
          Pasar el cursor sobre cada variante y verificar que el color de hover corresponde 
          al definido en el sistema de diseño.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {(['default', 'secondary', 'destructive', 'alternative', 'link'] as const).map((v) => (
          <div key={v} className="flex items-center gap-4">
            <span className="w-28 text-sm font-medium">{v}</span>
            <Button variant={v}>{v}</Button>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground border-t pt-3">
        Criterio de aceptación: el color de hover debe coincidir con el token definido en Figma para cada variante.
      </p>
    </div>
  ),
};

export const DisabledStates: Story = {
  name: 'QA — Estado disabled',
  parameters: { layout: 'padded' },
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold">Estado disabled</h3>
        <p className="text-sm text-muted-foreground">
          Verificar que cada variante en estado deshabilitado muestra opacity 50% respecto 
          a su estado base, no responde a interacciones y no muestra cursor de acción.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {(['default', 'secondary', 'destructive', 'alternative', 'link'] as const).map((v) => (
          <div key={v} className="flex items-center gap-4">
            <span className="w-28 text-sm font-medium">{v}</span>
            <Button variant={v}>{v}</Button>
            <span className="text-xs text-muted-foreground">default</span>
            <Button variant={v} disabled>{v}</Button>
            <span className="text-xs text-muted-foreground">disabled</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground border-t pt-3">
        Criterio de aceptación: opacity 50%, sin respuesta a click, hover ni focus.
      </p>
    </div>
  ),
};

export const IconSizes: Story = {
  name: 'Tamaños icon',
  render: () => (
    <div className="flex flex-wrap items-center gap-3 p-4">
      {(['icon-xs', 'icon-sm', 'icon', 'icon-lg'] as const).map((s) => (
        <Button key={s} size={s} aria-label={s}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </Button>
      ))}
    </div>
  ),
};