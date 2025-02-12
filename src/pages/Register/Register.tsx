import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { schema } from './schema';

type Inputs = z.infer<typeof schema>;

// npm install -D json-server-auth


const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <section>
      <h1>Create new Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor='email'>Email</label>
          <input {...register('email', { required: true })} type='email'  />
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
          {errors.passwordConfirmation && <p className='text-xs text-red-600'>{errors.passwordConfirmation.message}</p>}
        </fieldset>
        <button>Register</button>
      </form>
    </section>
  );
};

export default Register;
