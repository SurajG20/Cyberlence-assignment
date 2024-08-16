import { useState } from 'react';
import Layout from '../components/Layout';
import { signIn } from '../utils/authService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const session = await signIn(email, password);
      console.log('Sign in successful', session);
      if (session && typeof session.AccessToken !== 'undefined') {
        sessionStorage.setItem('accessToken', session.AccessToken);
        if (sessionStorage.getItem('accessToken')) {
          window.location.href = '/';
        } else {
          console.error('Session token was not set properly.');
        }
      } else {
        console.error('SignIn session or AccessToken is undefined.');
      }
    } catch (error) {
      toast(`Sign in failed: ${error}`);
    }
  };

  return (
    <Layout>
      <section className='flex min-h-screen flex-col items-center justify-center'>
        <div className='w-full max-w-md space-y-8 rounded-md border border-gray-300 bg-white p-6 shadow-md'>
          <h1 className='text-center text-3xl font-semibold'>Login</h1>
          <form onSubmit={handleSignIn} className='mt-8 space-y-6'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email address
              </label>
              <input
                id='email'
                name='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete='email'
                required
                placeholder='Type your email'
                className='input input-md input-bordered mt-1 w-full'
              />
            </div>
            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                Password
              </label>
              <div className='relative'>
                <input
                  id='password'
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? 'text' : 'password'} 
                  autoComplete='current-password'
                  required
                  placeholder='Type your password'
                  className='input input-md input-bordered mt-1 w-full pr-10'
                />
                <button
                  type='button'
                  className='absolute inset-y-0 right-0 flex items-center px-4 text-gray-600'
                  onClick={() => setShowPassword(!showPassword)} 
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            <h4>
              Do not have an account?,{' '}
              <Link to='/signup' className='font-semibold underline text-blue-500'>
                Create an Account
              </Link>
            </h4>
            <button type='submit' className='btn btn-primary w-full py-2.5 text-lg'>
              Sign in
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
