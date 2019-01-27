// Button.tsx
import React from 'react';

export interface Props {
    label: string;
    link: string;
}

export default function Button({ label, link }: Props) {
    return <a href={link}>
        <button>{label}</button>
    </a>
}