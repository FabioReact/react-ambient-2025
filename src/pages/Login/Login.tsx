import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { loginUser } from '../../api/auth';
import Loader from '../../components/Loader/Loader';
import { useNavigate } from 'react-router';
import useAuthContext from '../../hooks/useAuthContext';
// 1. Créér la route, et le lien dans la barre de navigation
// 2. Valider le formulaire avec zod
// 3. Utiliser react-hook-form
// 4. Utiliser react-query pour l'authentification
// 5. Rediriger vers la page de profil
// 6. Avoir les infos de l'utilisateur connecté sur la page de profil

const schema = z.object({
  email: z.string().email('Not a valid email'),
  password: z.string(),
});

type Inputs = z.infer<typeof schema>;

const Login = () => {
  const { register, handleSubmit } = useForm<Inputs>({ resolver: zodResolver(schema) });
  const navigate = useNavigate();
  const { onAuthenticate } = useAuthContext();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: Inputs) => loginUser(data.email, data.password),
    onSuccess: (data) => {
      onAuthenticate(data.accessToken, data.user.email);
      navigate('/profile');
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
