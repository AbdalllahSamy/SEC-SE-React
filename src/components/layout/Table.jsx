 import React from 'react'
 
 function Table() {
   return (
     <div className='container'>
        <div className='input-group'>
        <div>
            <label htmlFor="">id: </label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="">status: </label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="">name: </label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="">manga: </label>
            <input type="text" />
        </div>
        </div>
        <button className='btn'>Add</button>
        <table className='table'>
            <thead className='table-header'>
                <tr>
                    <th>Id</th>
                    <th>name</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody className='table-body'>
                <tr>
                <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td> <button className='btn'>edit</button> <button className='btn'>delete</button></td>
                </tr>
                <tr>
                <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td> <button className='btn'>edit</button> <button className='btn'>delete</button></td>
                </tr>
                <tr>
                <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td> <button className='btn'>edit</button> <button className='btn'>delete</button></td>
                </tr>
            </tbody>
        </table>
     </div>
   )
 }
 
 export default Table