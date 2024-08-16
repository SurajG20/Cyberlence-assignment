import PropTypes from 'prop-types';


const Modal = ({setShowModal,showModal}) => {
    console.log('Modal')
    return (
        <>
            {showModal && (
                <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
                        <div className="relative mx-auto my-6 w-auto max-w-xl">
                            {/*content*/}
                            <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                                {/*header*/}
                                <div className="border-blueGray-200 flex items-start justify-between rounded-t border-b border-solid p-5">
                                    <h3 className="text-2xl font-semibold">
                                        Student Details
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="relative flex-auto p-6">
                                    <p className="text-blueGray-500 my-4 text-lg leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Ad facilis repudiandae
                                        autem reprehenderit fuga deserunt sit
                                        corporis culpa rem, sed voluptatem
                                        voluptatum quam suscipit praesentium
                                        minima doloremque nisi. Asperiores,
                                        repellendus!
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                                    <button
                                        className="btn btn-secondary"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                </>
            )}
        </>
    )
}
export default Modal


Modal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};