import { Grid } from '@mui/material';
import React from 'react';
import { useCheckValidation } from '../../hooks/useCheckValidation';
import Navbar from '../../components/layout/Navbar';
import Table from '../../components/layout/Table';
const DashboardPage = () => {
  useCheckValidation("ADMIN");
  return (
    <>
      <Navbar/>  
      <h1>Hello Admin</h1>
      <Table>
      <thead>
        <tr className="bg-light">
          <th scope="col" width="5%"><input className="form-check-input" type="checkbox"/></th>
          <th scope="col" width="5%">#</th>
          <th scope="col" width="20%">Date</th>
          <th scope="col" width="10%">Status</th>
          <th scope="col" width="20%">Customer</th>
          <th scope="col" width="20%">Purchased</th>
          <th scope="col" className="text-end" width="20%"><span>Revenue</span></th>
        </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row"><input className="form-check-input" type="checkbox"/></th>
            <td>12</td>
            <td>1 Oct, 21</td>
            <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">Paid</span></td>
            <td><img src="https://i.imgur.com/VKOeFyS.png" width="25"/> Althan Travis</td>
            <td>Wirecard for figma</td>
            <td className="text-end"><span className="fw-bolder">$0.99</span> <i className="fa fa-ellipsis-h  ms-2"></i></td>
            </tr>
            
            <tr>
            <th scope="row"><input className="form-check-input" type="checkbox"/></th>
            <td>14</td>
            <td>12 Oct, 21</td>
            <td><i className="fa fa-dot-circle-o text-danger"></i><span className="ms-1">Failed</span></td>
            <td><img src="https://i.imgur.com/nmnmfGv.png" width="25"/> Tomo arvis</td>
            <td>Altroz furry</td>
            <td className="text-end"><span className="fw-bolder">$0.19</span> <i className="fa fa-ellipsis-h  ms-2"></i></td>
            </tr>
            
            
            <tr>
            <th scope="row"><input className="form-check-input" type="checkbox"/></th>
            <td>17</td>
            <td>1 Nov, 21</td>
            <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">Paid</span></td>
            <td><img src="https://i.imgur.com/VKOeFyS.png" width="25"/> Althan Travis</td>
            <td>Apple Macbook air</td>
            <td className="text-end"><span className="fw-bolder">$1.99</span> <i className="fa fa-ellipsis-h  ms-2"></i></td>
            </tr>
            
            
            <tr>
            <th scope="row"><input className="form-check-input" type="checkbox"/></th>
            <td>90</td>
            <td>19 Oct, 21</td>
            <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">Paid</span></td>
            <td><img src="https://i.imgur.com/VKOeFyS.png" width="25"/> Travis head</td>
            <td>Apple Macbook Pro</td>
            <td className="text-end"><span className="fw-bolder">$9.99</span> <i className="fa fa-ellipsis-h  ms-2"></i></td>
            </tr>
            
            
            <tr>
            <th scope="row"><input className="form-check-input" type="checkbox"/></th>
            <td>12</td>
            <td>1 Oct, 21</td>
            <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">Paid</span></td>
            <td><img src="https://i.imgur.com/nmnmfGv.png" width="25"/> Althan Travis</td>
            <td>Wirecard for figma</td>
            <td className="text-end"><span className="fw-bolder">$0.99</span> <i className="fa fa-ellipsis-h  ms-2"></i></td>
            </tr>
            <tr>
            <th scope="row"><input className="form-check-input" type="checkbox"/></th>
            <td>12</td>
            <td>1 Oct, 21</td>
            <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">Paid</span></td>
            <td><img src="https://i.imgur.com/nmnmfGv.png" width="25"/> Althan Travis</td>
            <td>Wirecard for figma</td>
            <td className="text-end"><span className="fw-bolder">$0.99</span> <i className="fa fa-ellipsis-h  ms-2"></i></td>
            </tr>
            <tr>
            <th scope="row"><input className="form-check-input" type="checkbox"/></th>
            <td>12</td>
            <td>1 Oct, 21</td>
            <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">Paid</span></td>
            <td><img src="https://i.imgur.com/nmnmfGv.png" width="25"/> Althan Travis</td>
            <td>Wirecard for figma</td>
            <td className="text-end"><span className="fw-bolder">$0.99</span> <i className="fa fa-ellipsis-h  ms-2"></i></td>
            </tr>
            <tr>
            <th scope="row"><input className="form-check-input" type="checkbox"/></th>
            <td>12</td>
            <td>1 Oct, 21</td>
            <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">Paid</span></td>
            <td><img src="https://i.imgur.com/nmnmfGv.png" width="25"/> Althan Travis</td>
            <td>Wirecard for figma</td>
            <td className="text-end"><span className="fw-bolder">$0.99</span> <i className="fa fa-ellipsis-h  ms-2"></i></td>
            </tr>
            <tr>
            <th scope="row"><input className="form-check-input" type="checkbox"/></th>
            <td>12</td>
            <td>1 Oct, 21</td>
            <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">Paid</span></td>
            <td><img src="https://i.imgur.com/nmnmfGv.png" width="25"/> Althan Travis</td>
            <td>Wirecard for figma</td>
            <td className="text-end"><span className="fw-bolder">$0.99</span> <i className="fa fa-ellipsis-h  ms-2"></i></td>
            </tr>
            <tr>
            <th scope="row"><input className="form-check-input" type="checkbox"/></th>
            <td>12</td>
            <td>1 Oct, 21</td>
            <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">Paid</span></td>
            <td><img src="https://i.imgur.com/nmnmfGv.png" width="25"/> Althan Travis</td>
            <td>Wirecard for figma</td>
            <td className="text-end"><span className="fw-bolder">$0.99</span> <i className="fa fa-ellipsis-h  ms-2"></i></td>
            </tr>
            <tr>
            <th scope="row"><input className="form-check-input" type="checkbox"/></th>
            <td>12</td>
            <td>1 Oct, 21</td>
            <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">Paid</span></td>
            <td><img src="https://i.imgur.com/nmnmfGv.png" width="25"/> Althan Travis</td>
            <td>Wirecard for figma</td>
            <td className="text-end"><span className="fw-bolder">$0.99</span> <i className="fa fa-ellipsis-h  ms-2"></i></td>
            </tr>
        </tbody>
      </Table>
    </>
  
  );
};

export default DashboardPage;