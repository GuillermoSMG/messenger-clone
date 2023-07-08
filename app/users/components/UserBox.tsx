'use client';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

import { User } from '@prisma/client';

const Avatar = dynamic(() => import('@/app/components/Avatar'));
const Box = dynamic(() => import('@/app/components/Box'));

interface UserBoxProps {
  data: User;
}

const UserBox: React.FC<UserBoxProps> = ({ data }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);
    axios
      .post('/api/conversations', {
        userId: data.id,
      })
      .then(data => {
        router.push(`/conversation/${data.data.id}`);
      })
      .finally(() => setIsLoading(false));
  }, [data.id, router]);
  return (
    <div
      onClick={handleClick}
      className='w-full relative flex items-center space-x-3 bg-white p-3 hover:bg-neutral-100 rounded-lg transition cursor-pointer'
    >
      <Avatar user={data} />
      <Box data={data.name as string} />
    </div>
  );
};
export default UserBox;
