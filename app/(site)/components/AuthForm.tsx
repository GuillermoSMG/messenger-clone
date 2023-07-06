'use client';

import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { BsGoogle } from 'react-icons/bs';

import Button from '@/app/components/Button';
import Input from '@/app/components/input/Input';
import AuthSocialButton from './AuthSocialButton';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleVariant = useCallback(() => {
    variant === 'LOGIN' ? setVariant('REGISTER') : setVariant('LOGIN');
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = data => {
    setIsLoading(true);
    if (variant === 'REGISTER') {
      // axios reg
    }
    if (variant === 'LOGIN') {
      // next auth signin
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    // next auth social signin
  };

  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
        <form
          className='space-y-8'
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant === 'REGISTER' && (
            <Input
              id='name'
              label='Name'
              register={register}
              errors={errors}
            />
          )}
          <Input
            id='email'
            label='Email address'
            type='email'
            register={register}
            errors={errors}
          />
          <Input
            id='password'
            label='Password'
            type='password'
            register={register}
            errors={errors}
          />
          <div>
            <Button
              disabled={isLoading}
              fullWidth
              type='submit'
            >
              {variant === 'LOGIN' ? 'Sign in' : 'Register'}
            </Button>
          </div>
        </form>
        <div className='mt-6'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300' />
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='bg-white px-2 text-gray-500'>
                Or continue with
              </span>
            </div>
          </div>

          <div className='mt-6 flex gap-2'>
            <AuthSocialButton
              Icon={BsGoogle}
              onClick={() => socialAction('google')}
            />
          </div>
        </div>

        <div className='flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500'>
          <div>
            {variant === 'LOGIN'
              ? 'New to Messenger?'
              : 'Already have an account?'}
          </div>
          <button
            onClick={toggleVariant}
            className='underline'
          >
            {variant === 'LOGIN' ? 'Create an account' : 'Log in'}
          </button>
        </div>
      </div>
    </div>
  );
};
export default AuthForm;