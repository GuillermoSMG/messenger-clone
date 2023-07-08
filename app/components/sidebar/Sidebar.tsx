import dynamic from 'next/dynamic';

import getCurrentUser from '@/app/actions/getUser';

const MobileFooter = dynamic(() => import('./MobileFooter'));
const DesktopSidebar = dynamic(() => import('./DesktopSidebar'));

async function Sidebar({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();
  return (
    <div className='h-full'>
      <MobileFooter />
      <DesktopSidebar currentUser={currentUser!} />
      <main className='lg:pl-20 h-full'>{children}</main>
    </div>
  );
}

export default Sidebar;
