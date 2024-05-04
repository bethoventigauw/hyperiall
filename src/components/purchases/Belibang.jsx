import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, product, contactNum, email, type, otw) {
    return { name, product, contactNum, email, type, otw };
}

const rows = [
    createData('Richard Martin', 'Sika', 7687764556, 'richard@gmail.com', 'Taking return', 13),
    createData('Tom Homan', 'Sika', 9867545368, 'tomhoman@gmail.com', 'Taking Return', 0),
    createData('Veandir', 'Velux', 9867545566, 'veandier@gmail.com', 'Not Taking Return', 0),
    createData('Charin', 'Knauf', 9267545457, 'charin@gmail.com', 'Taking Return', 12),
    createData('Hoffman', 'Bosch', 9367546531, 'hoffman@gmail.com', 'Taking Return', 0),
];

export default function BasicTable() {
    return (
      <div className='vendorstable'>
        <TableContainer className = 'tablecontainer' component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Supplier Name</TableCell>
                <TableCell className='tablecell' align="right">Product</TableCell>
                <TableCell className='tablecell' align="right">Contact Number&nbsp;</TableCell>
                <TableCell className='tablecell' align="right">Email&nbsp;</TableCell>
                <TableCell className='tablecell' align="right">Type&nbsp;</TableCell>
                <TableCell className='tablecell' align="right">On The Way&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell className='tablecell' align="right">{row.product}</TableCell>
                  <TableCell className='tablecell' align="right">{row.contactNum}</TableCell>
                  <TableCell className='tablecell' align="right">{row.email}</TableCell>
                  <TableCell className='tablecell' align="right">{row.type}</TableCell>
                  <TableCell className='tablecell' align="right">{row.otw}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }