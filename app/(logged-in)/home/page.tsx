import { PageForCard } from '@/app/lib/definitions';
import Link from 'next/link';
import Button from '../ui/button';

export default function HomePage() {
  const pages: PageForCard[] = [
    { 
      name: 'Users', href: '/users', icon: 'bi-people', 
      cardTitle: 'Manage Users', 
      cardDescription: 'View and manage the registered users in the system.'
    },
  ]
  return (
    <>
      {pages.map((p: PageForCard) => (
        <div key={p.name} 
          className='
          border shadow-sm max-w-md h-48 ms-4 mt-8 rounded-lg p-6 
          flex flex-col justify-between
        '>
          <div className='flex flex-col'>
            <span className='font-bold text-2xl'>Manage {p.name}</span>
            <span className='text-gray-500'>{p.cardDescription}</span>
          </div>
          <div className='flex'>
            <Button {...p} />
          </div>
        </div>
      ))}
    </>
  )
}
