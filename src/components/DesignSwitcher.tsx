"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DesignSwitcher = () => {
    const pathname = usePathname();

    const designs = [
        { label: 'D1', path: '/' },
        { label: 'D2', path: '/design-v2' },
        { label: 'D3', path: '/design-v3' },
        { label: 'D4', path: '/design-v4' },
        { label: 'D5', path: '/design-v5' },
    ];

    return (
        <div style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 1000,
            display: 'flex',
            gap: '8px',
            background: 'rgba(0,0,0,0.8)',
            padding: '8px',
            borderRadius: '40px',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)'
        }}>
            {designs.map((d) => (
                <Link 
                    key={d.path}
                    href={d.path} 
                    style={{
                        padding: '12px 18px',
                        borderRadius: '30px',
                        background: pathname === d.path 
                            ? (d.label === 'D5' ? 'var(--v5-primary)' : 'var(--v2-primary, #ff6b35)') 
                            : 'transparent',
                        color: pathname === d.path ? (d.label === 'D5' ? '#fff' : '#000') : '#fff',
                        fontSize: '11px',
                        fontWeight: 700,
                        textDecoration: 'none',
                        transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
                        border: pathname === d.path ? 'none' : '1px solid rgba(255,255,255,0.05)'
                    }}
                >
                    {d.label}
                </Link>
            ))}
        </div>
    );
};

export default DesignSwitcher;
