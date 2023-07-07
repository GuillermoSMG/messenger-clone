'use client';

import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import clsx from 'clsx';

import { Conversation, Message, User } from '@prisma/client';
import { FullConversationType } from '@/app/types';
import useOtherUser from '@/app/hooks/useOtherUser';
import Avatar from '@/app/components/Avatar';
import Box from '@/app/components/Box';

interface ConversationBoxProps {
  data: FullConversationType;
  selected?: boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
  data,
  selected,
}) => {
  const otherUser = useOtherUser(data);
  const session = useSession();
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/conversation/${data.id}`);
  }, [router, data.id]);

  const lastMessage = useMemo(() => {
    const messages = data.messages || [];
    return messages[messages.length - 1];
  }, [data.messages]);

  const userEmail = useMemo(() => {
    return session.data?.user?.email;
  }, [session.data?.user?.email]);

  const hasSeen = useMemo(() => {
    if (!lastMessage) return false;
    const seenArray = lastMessage.seen || [];
    if (!userEmail) return false;
    return seenArray.filter(user => user.email === userEmail).length !== 0;
  }, [lastMessage, userEmail]);

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) return 'Sent an image';

    if (lastMessage?.body) return lastMessage.body;

    return 'Start a conv';
  }, [lastMessage]);

  return (
    <div
      className={clsx(
        'w-full relative flex items-center space-x-3 hover:bg-neutral-100 rounded-lg transition cursor-pointer p-3',
        selected ? 'bg-neutral-100' : 'bg-white'
      )}
      onClick={handleClick}
    >
      <Avatar user={otherUser} />
      <div className='flex flex-col'>
        <Box
          data={data.name || (otherUser.name as string)}
          lastMessage={lastMessage}
          lastMessageText={lastMessageText}
          hasSeen={hasSeen}
        />
      </div>
    </div>
  );
};
export default ConversationBox;
