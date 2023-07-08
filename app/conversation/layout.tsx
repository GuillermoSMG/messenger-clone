import dynamic from 'next/dynamic';

import getConversations from '../actions/getConversations';
import getUsers from '../actions/getUsers';

const Sidebar = dynamic(() => import('../components/sidebar/Sidebar'));
const ConversationList = dynamic(() => import('./components/ConversationList'));

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();
  return (
    <Sidebar>
      <div className='h-full'>
        <ConversationList
          users={users}
          initialItems={conversations}
        />
        {children}
      </div>
    </Sidebar>
  );
}
