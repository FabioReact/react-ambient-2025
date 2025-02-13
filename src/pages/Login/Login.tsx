import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { loginUser } from '../../api/auth';
import Loader from '../../components/Loader/Loader';
import { useLocation, useNavigate } from 'react-router';
import { useAppDispatch } from '@/redux/hooks';
import { onAuthenticate } from '@/redux/reducers/authSlice';

const schema = z.object({
  email: z.string().email('Not a valid email'),
  password: z.string(),
});

type Inputs = z.infer<typeof schema>;

const Login = () => {
  const { register, handleSubmit } = useForm<Inputs>({ resolver: zodResolver(schema) });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location =useLocation();
  const from = location.state?.from?.pathname || '/profile';

  const { mutate, isPending } = useMutation({
    mutationFn: (data: Inputs) => loginUser(data.email, data.password),
    onSuccess: (data) => {
      dispatch(onAuthenticate({
        accessToken: data.accessToken,
        email: data.user.email,
      }));
      navigate(from, { replace: true });
    },
  });

  const onSubmit = (formData: Inputs) => {
    mutate(formData);
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' {...register('email')} />
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' {...register('password')} />
        </fieldset>
        <button disabled={isPending}>Login</button>
        {isPending && <Loader />}
      </form>
    </section>
  );
};

export default Login;
