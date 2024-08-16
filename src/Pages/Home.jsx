import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Modal from '../components/Modal'

import Table from '../components/Table'
import { publicRequest } from '../RequestMethod';

const Home = () => {
    const [showModal, setShowModal] = useState(false)

    const getStudentData = async()=>{
        const response = await publicRequest.get("/getData/items",{
            
        })
        console.log(response)
    }

    useEffect(()=>{getStudentData()},[])

    return (
        <Layout>
            <section className="w-full">
                <div className="mx-auto max-w-4xl py-8">
                    <h1 className="text-center text-4xl font-semibold text-gray-700 sm:text-5xl">
                        List Data
                    </h1>
                    <Table  setShowModal={setShowModal} />
                    <Modal showModal={showModal}  setShowModal={setShowModal} / >
                </div>
            </section>
        </Layout>
    )
}

export default Home;
