import dynamic from 'next/dynamic';

const LoadingModal = dynamic(() => import('../components/LoadingModal'));

const Loading = () => {
  return <LoadingModal />;
};
export default Loading;
