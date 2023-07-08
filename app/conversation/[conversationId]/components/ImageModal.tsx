'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

const Modal = dynamic(() => import('@/app/components/Modal'));

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ onClose, isOpen, src }) => {
  if (!src) return null;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className='w-80 h-80'>
        <Image
          alt='Image'
          fill
          src={src}
          className='object-cover'
        />
      </div>
    </Modal>
  );
};
export default ImageModal;
