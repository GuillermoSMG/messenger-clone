import clsx from 'clsx';
import { format } from 'date-fns';

import { FullMessageType } from '../types';

interface BoxProps {
  data: string;
  lastMessage?: FullMessageType;
  lastMessageText?: string;
  hasSeen?: boolean;
}

const Box: React.FC<BoxProps> = ({
  data,
  lastMessage,
  lastMessageText,
  hasSeen,
}) => {
  return (
    <div className='min-w-0 flex-1'>
      <div className='focus:outline-none'>
        <div className='flex justify-between items-center mb-1'>
          <p className='text-sm font-medium text-gray-900'>{data}</p>
          {lastMessage?.createdAt && (
            <p className='text-xs text-gray-400 font-light ml-4'>
              {format(new Date(lastMessage.createdAt), 'p')}
            </p>
          )}
        </div>
        {lastMessageText && (
          <p
            className={clsx(
              'truncate text-sm',
              hasSeen ? 'text-gray-500' : 'text-black font-medium'
            )}
          >
            {lastMessageText}
          </p>
        )}
      </div>
    </div>
  );
};
export default Box;
