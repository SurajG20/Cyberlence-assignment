import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import Table from '../components/Table';
import { publicRequest } from '../utils/RequestMethod';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const getStudentData = async () => {
    try {
      const response = await publicRequest.get('/getData/Items');
      setData(response.data);
    } catch (error) {
      console.log(error);
      toast('Error Fetching Data');
    }
  };

  useEffect(() => {
    getStudentData();
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  return (
    <Layout>
      <header className='w-full flex justify-between p-4 max-w-4xl mx-auto'>
        <h1 className='text-start text-4xl font-semibold text-gray-700 sm:text-5xl'>Student Data</h1>
        <button className='btn btn-error' onClick={handleLogout}>
          Logout
        </button>
      </header>
      <section className='w-full'>
        <div className='mx-auto max-w-4xl py-8'>
          {data && <Table setShowModal={setShowModal} data={data} setSelectedItem={setSelectedItem} />}
        </div>
      </section>
      <Modal showModal={showModal} setShowModal={setShowModal} selectedItem={selectedItem} />
    </Layout>
  );
};

export default Home;
