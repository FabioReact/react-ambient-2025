import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// npm install zod
// npm install @hookform/resolvers

const schema = z.object({
  email: z.string().email('Not a valid email').min(8, 'Email should be at least 8 characters long'),
  password: z.string().min(6, 'should be at least 6 characters long'),
  passwordConfirmation: z.string(),
});

// Comment faire pour avoir au moins une minuscule
// Comment faire pour avoir au moins une majuscule
// Comment faire pour avoir au moins un caractère spécial
// Comment faire pour avoir au moins un nombre
// Bonus: comparaison entre les deux passwords


type Inputs = z.infer<typeof schema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  console.log('Erreurs:', errors);

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
        </fieldset>
        <button>Register</button>
      </form>
    </section>
  );
};

export default Register;
