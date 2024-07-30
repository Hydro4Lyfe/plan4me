'use client'

import { SignInForm } from '@/components/SignInForm';
import { SessionProvider } from 'next-auth/react';
import React from 'react'

export default function Page()
{
    return (
      <div className='flex items-center justify-center h-screen w-screen'>
        <div className=''>
            <SessionProvider >
              <SignInForm />
            </SessionProvider> 
        </div> 
      </div>
    );
}