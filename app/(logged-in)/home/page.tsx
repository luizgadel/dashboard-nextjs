import Link from 'next/link';

type Page = {
  name: string, href: string, icon: string, cardTitle: string, cardDescription: string
}

export default function Page() {
  const pages: Page[] = [
    { 
      name: 'Users', href: '/users', icon: 'bi-people', 
      cardTitle: 'Manage Users', 
      cardDescription: 'View and manage the registered users in the system.'
    },
  ]
  return (
    <>
      {pages.map((p: Page) => (
        <div key={p.name} 
          className='
          border shadow-sm max-w-md h-48 ms-4 mt-8 rounded-lg p-6 
          flex flex-col justify-between
        '>
          <div className='flex flex-col'>
            <span className='font-bold text-2xl'>Manage {p.name}</span>
            <span className='text-gray-500'>{p.cardDescription}</span>
          </div>
          <Link className='
            rounded-lg h-10 w-40 border bg-halborn-500 shadow-sm
            flex px-3 items-center justify-center
            ' 
            href={p.href}
          >
            <i className={p.icon}></i>
            <span className="ms-2">Go to {p.name}</span>
          </Link> 
        </div>
      ))}
    </>
  )
}
