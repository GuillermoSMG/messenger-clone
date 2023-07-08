import dynamic from 'next/dynamic';

import getConversations from '../actions/getConversations';

const Sidebar = dynamic(() => import('../components/sidebar/Sidebar'));
const ConversationList = dynamic(() => import('./components/ConversationList'));

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  return (
    <Sidebar>
      <div className='h-full'>
        {children}
        <ConversationList initialItems={conversations} />
      </div>
    </Sidebar>
  );
}
