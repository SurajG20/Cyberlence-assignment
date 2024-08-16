import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { confirmSignUp } from '../utils/authService';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';

const ConfirmUserPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || '');
  const [confirmationCode, setConfirmationCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await confirmSignUp(email, confirmationCode);
      toast('Account confirmed successfully!\nSign in on next page.');
      navigate('/login');
    } catch (error) {
      toast(`Failed to confirm account: ${error}`);
    }
  };

  return (
    <Layout>
      <section className='flex min-h-screen flex-col items-center justify-center'>
        <div className='w-full max-w-md space-y-8 rounded-md border border-gray-300 bg-white p-6 shadow-md'>
          <h1 className='text-center text-3xl font-semibold'>Confirm Account</h1>
          <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
            <div>
              <input
                className='input input-md input-bordered mt-1 w-full'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                required
              />
            </div>
            <div>
              <input
                className='input input-md input-bordered mt-1 w-full'
                type='text'
                value={confirmationCode}
                onChange={(e) => setConfirmationCode(e.target.value)}
                placeholder='Confirmation Code'
                required
              />
            </div>
            <button type='submit' className='btn btn-primary w-full py-2.5 text-lg'>
              Confirm Account
            </button>
          </form>
        </div>
      </section>{' '}
    </Layout>
  );
};

export default ConfirmUserPage;
