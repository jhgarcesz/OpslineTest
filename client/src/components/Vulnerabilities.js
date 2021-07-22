import React from 'react';
import { Table } from 'react-bootstrap';
import { PlusSquare, PlusSquareFill } from 'react-bootstrap-icons';
import { VulnerabilityDetails } from './VulnerabilityDetails';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Vulnerabilities = ({vulnerabilities}) => {
    const [modalDetails, setDetails] = React.useState({ showModal: false, currentRow: null});
    
    const handleCloseModal = () => setDetails({...modalDetails, showModal: false});
    const handleShowModal = (currentRow) => setDetails({...modalDetails, showModal: true, currentRow});

    // we have defined this local method to reuse it when iterating our vulnerability list. 
    const vulnerabilityRow = (vulnerability) => {
        return(
              <tr key = {vulnerability.id}>
                <td>
                    <PlusSquare  onClick={() => handleShowModal(vulnerability)}></PlusSquare>
                </td>
                <td>
                    <p>{vulnerability.id}</p>
                </td>
                <td> 
                    <p className="d-inline-block text-truncate column-text">
                        {vulnerability.name}
                    </p>
                </td>
                <td>
                    <p className="d-inline-block text-truncate column-text">
                        {vulnerability.description}
                    </p>
                </td>
              </tr>
          )
    }
    
    // Mapping each vulnerability as a child of the table.
    const vulnerabilityTable = vulnerabilities.map((vulnerability) => vulnerabilityRow(vulnerability))

    // Here, we are rendering the entire table, and the modal is only displayed when we click on details button.
    return(
        <div className="container">
            <h2 className="text-center">IT-Vulnerabilities</h2>
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th><PlusSquareFill/></th>
                    <th># Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {vulnerabilityTable}
                </tbody>
            </Table>
            { modalDetails.showModal &&
                <VulnerabilityDetails 
                    show={modalDetails.showModal} 
                    currentRow={modalDetails.currentRow} 
                    handleClose={handleCloseModal} >
                </VulnerabilityDetails>
            }
        </div>
    );
}