import dynamic from 'next/dynamic';
import Image from 'next/image';

const AuthForm = dynamic(() => import('./components/AuthForm'));

export default function Home() {
  return (
    <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100'>
      <div className='sm:mx-auto ms:w-full ms:max-w-md'>
        <Image
          src='/imgs/logo.png'
          alt='Logo'
          height={48}
          width={48}
          className='mx-auto w-auto'
        />
        <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
