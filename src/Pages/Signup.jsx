import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../utils/authService';
import Layout from '../components/Layout';
import { toast } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast('Passwords do not match');
      return;
    }
    try {
      await signUp(email, password, name);
      navigate('/confirm', { state: { email } });
    } catch (error) {
      toast(`Sign up failed: ${error}`);
    }
  };

  return (
    <Layout>
      <section className='flex min-h-screen flex-col items-center justify-center'>
        <div className='w-full max-w-md space-y-8 rounded-md border border-gray-300 bg-white p-6 shadow-md'>
          <h1 className='text-center text-3xl font-semibold'>Sign Up</h1>
          <form onSubmit={handleSignUp} className='mt-8 space-y-6'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete='name'
                placeholder='Name'
                className='input input-md input-bordered mt-1 w-full'
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email Address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete='email'
                placeholder='email'
                className='input input-md input-bordered mt-1 w-full'
              />
            </div>
            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                Password
              </label>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id='password'
                  required
                  autoComplete='password'
                  placeholder='password'
                  className='input input-md input-bordered mt-1 w-full'
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
            <div>
              <label htmlFor='conf-password' className='block text-sm font-medium text-gray-700'>
                Confirm Password
              </label>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  id='conf-password'
                  required
                  autoComplete='password'
                  placeholder='Confirm Password'
                  className='input input-md input-bordered mt-1 w-full'
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
              Already have an account?,{' '}
              <Link to='/login' className='font-semibold underline text-blue-500'>
                Log In
              </Link>
            </h4>
            <div>
              <button type='submit' className='btn btn-primary w-full py-2.5 text-lg'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
