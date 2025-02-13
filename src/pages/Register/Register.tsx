import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { schema } from './schema';
import { registerUser } from '../../api/auth';
import Loader from '../../components/Loader/Loader';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import useAuthContext from '../../hooks/useAuthContext';
import Waiting from '@/components/Waiting/Waiting';

type Inputs = z.infer<typeof schema>;

const Register = () => {
  const navigate = useNavigate();
  const { onAuthenticate } = useAuthContext();
  const { data, isSuccess, isPending, mutateAsync } = useMutation({
    mutationFn: (params: { email: string; password: string }) =>
      registerUser(params.email, params.password),
    onSuccess: (data) => {
      onAuthenticate(data.accessToken, data.user.email);
      navigate('/profile');
    },
    onError: () => {
      console.log('Houston, we have a problem !');
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    mutateAsync({ email: data.email, password: data.password });
  };

  return (
    <section>
      <h1>Create new Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor='email'>Email</label>
          <input {...register('email', { required: true })} type='email' />
          {errors.email && <p className='text-xs text-red-600'>{errors.email.message}</p>}
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password</label>
          <input {...register('password', { required: true })} type='text' />
          {errors.password && <p className='text-xs text-red-600'>{errors.password.message}</p>}
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Confirm Password</label>
          <input {...register('passwordConfirmation', { required: true })} type='text' />
          {errors.passwordConfirmation && (
            <p className='text-xs text-red-600'>{errors.passwordConfirmation.message}</p>
          )}
        </fieldset>
        <button className='button'>Register</button>
        <Waiting loading={isPending}>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Waiting>
      </form>
    </section>
  );
};

export default Register;
