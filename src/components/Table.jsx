import PropTypes from 'prop-types';


const Table = ({setShowModal}) => {
    console.log('Table Component')
    return (
        <>
            <div className="mt-8 w-full overflow-x-auto">
                <table className="table table-lg">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Alex Garden</td>
                            <td> 20</td>
                            <td>
                                <button
                                    className="btn btn-sm"
                                    onClick={() =>
                                        setShowModal((prev) => !prev)
                                    }
                                >
                                    Know More
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default Table;


Table.propTypes = {
    setShowModal :PropTypes.func.isRequired
}