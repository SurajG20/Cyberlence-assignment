import PropTypes from 'prop-types';
import { publicRequest } from '../utils/RequestMethod';
import { toast } from 'react-toastify';

const Table = ({ setShowModal, data, setSelectedItem }) => {
  const getSingleItemData = async (id) => {
    try {
      const response = await publicRequest.get(`/getData/getSingleItem?id=${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      toast('Error Fetching Item Data');
    }
  };

  const handleDetails = async (id) => {
    const itemData = await getSingleItemData(id);
    setSelectedItem(itemData);
    setShowModal(true);
  };

  return (
    <div className='mt-8 w-full overflow-x-auto'>
      <table className='table '>
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <button className='btn btn-sm' onClick={() => handleDetails(item.id)}>
                  Show Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

Table.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  setSelectedItem: PropTypes.func.isRequired // Add PropTypes for setSelectedItem
};
