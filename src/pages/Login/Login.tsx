// 1. Créér la route, et le lien dans la barre de navigation
// 2. Valider le formulaire avec zod
// 3. Utiliser react-hook-form
// 4. Utiliser react-query pour l'authentification
// 5. Rediriger vers la page de profil
// 6. Avoir les infos de l'utilisateur connecté sur la page de profil

const Login = () => {
  return (
    <section>
      <h1>Login</h1>
      <form>
        <fieldset>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' />
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />
        </fieldset>
        <button>Login</button>
      </form>
    </section>
  );
};

export default Login
