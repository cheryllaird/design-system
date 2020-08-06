import './button.css';

export default {
  title: 'Blueprints | Button',
};

export const Primary = () => `
    <button>Primary</button>
    <button class="accent">Primary Accent</button>
`;

export const Secondary = () => `
    <button class="secondary">Secondary</button>
    <button class="secondary accent">Secondary Accent</button>
`;

export const Tertiary = () => `
    <button class="tertiary">Tertiary</button>
    <button class="tertiary accent">Tertiary Accent</button>
`;
