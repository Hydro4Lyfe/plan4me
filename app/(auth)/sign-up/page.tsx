import SignUpForm from '@/components/SignUpForm';
import React from 'react'

export default function Page()
{
    return (
      <div className='flex items-center justify-center h-screen w-screen'>
        <div className=''>
            <SignUpForm />
        </div> 
      </div>
    );
}