import dynamic from 'next/dynamic';

import getUsers from '../actions/getUsers';

const Sidebar = dynamic(() => import('../components/sidebar/Sidebar'));
const UserList = dynamic(() => import('./components/UserList'));

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();
  return (
    <Sidebar>
      <div className='h-full'>
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
}
