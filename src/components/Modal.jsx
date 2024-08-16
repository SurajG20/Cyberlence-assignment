import PropTypes from 'prop-types';

const Modal = ({ setShowModal, showModal, selectedItem }) => {
  return (
    <>
      {showModal && selectedItem && (
        <>
          <div className='fixed inset-0 z-50 flex items-center justify-center'>
            <div className='relative mx-auto w-auto max-w-xl'>
              <div className='grid w-full grid-cols-1 rounded-md bg-white shadow-md px-16 py-10'>
                {/*header*/}
                <h3 className='text-2xl font-bold'>{selectedItem.name}&apos;s Details</h3>
                {/*body*/}
                <ul className='my-8 text-lg'>
                  {Object.entries(selectedItem).map((item) => (
                    <li key={item[0]} className='flex justify-between items-center'>
                      <span className='font-semibold capitalize'>{item[0]}:</span> {item[1]}
                    </li>
                  ))}
                </ul>
                {/*footer*/}
                <div className=' flex items-center justify-end '>
                  <button className='btn btn-secondary btn-sm w-full' type='button' onClick={() => setShowModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='fixed inset-0 z-40 bg-black opacity-35'></div>
        </>
      )}
    </>
  );
};

export default Modal;

Modal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  selectedItem: PropTypes.object // Add PropTypes for selectedItem
};
