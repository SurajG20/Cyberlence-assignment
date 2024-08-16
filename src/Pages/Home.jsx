import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import Table from '../components/Table';
import { publicRequest } from '../RequestMethod';
import { toast } from 'react-toastify';

const Home = () => {
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

  return (
    <Layout>
      <section className='w-full'>
        <div className='mx-auto max-w-2xl py-8'>
          <h1 className='text-start text-4xl font-semibold text-gray-700 sm:text-5xl'>Student Data</h1>
          <Table setShowModal={setShowModal} data={data} setSelectedItem={setSelectedItem} />
        </div>
      </section>
      <Modal showModal={showModal} setShowModal={setShowModal} selectedItem={selectedItem} />
    </Layout>
  );
};

export default Home;
