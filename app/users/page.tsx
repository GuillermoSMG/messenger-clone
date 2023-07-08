import dynamic from 'next/dynamic';

const EmptyState = dynamic(() => import('../components/EmptyState'));

const Users = () => {
  return (
    <div className='hidden lg:block lg:pl-80 h-full'>
      <EmptyState />
    </div>
  );
};
export default Users;
