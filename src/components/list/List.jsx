import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./list.css";

const rows = [
  {
    id: 2117383933399,
    product: "Batako",
    img: "/assets/batako.png",
    customer: "Yudi Salim",
    date: "27th September",
    amount: 300,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 6617772543119,
    product: "Kayu",
    img: "/assets/kayu.png",
    customer: "Bastian Sudirman",
    date: "5th February",
    amount: 100,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 200116351133,
    product: "Semen Tonasa",
    img: "/assets/semen.jpg",
    customer: "Arhan Pramata",
    date: "1st June",
    amount: 200,
    method: "Online Payment",
    status: "Approved",
  },
  {
    id: 22567721541,
    product: "Paku",
    img: "/assets/paku.jpg",
    customer: "Watoni Agus",
    date: "21st August",
    amount: 160,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 2117383933399,
    product: "Keramik",
    img: "/assets/keramik.jpg",
    customer: "Galang Santoso",
    date: "16th February",
    amount: 570,
    method: "Online Payment",
    status: "Approved",
  },
  {
    id: 4520015619,
    product: "Pipa Paralon",
    img: "/assets/pipa.webp",
    customer: "Hadi Sunaryo",
    date: "20th March",
    amount: 1800,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 25566001527,
    product: "Tangga",
    img: "/assets/tangga.jpg",
    customer: "Ardiansyah",
    date: "3rd October",
    amount: 20,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 2117383933399,
    product: "Pasir",
    img: "/assets/pasir.jpg",
    customer: "Natasya indah",
    date: "29th December",
    amount: 25,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2117383933399,
    product: "Besi",
    img: "/assets/besi.jpeg",
    customer: "Siti Nur Azizah",
    date: "27th September",
    amount: 270,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 6117383933399,
    product: "Cat Dinding",
    img: "/assets/cat dinding.jpg",
    customer: "Lee Seto",
    date: "27th September",
    amount: 300,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 8617772543119,
    product: "Kaca",
    img: "/assets/kaca.jpg",
    customer: "Tono Santoso",
    date: "5th February",
    amount: 100,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 200116351133,
    product: "Triplek",
    img: "/assets/triplek.jpg",
    customer: "Nurdin",
    date: "1st June",
    amount: 200,
    method: "Online Payment",
    status: "Approved",
  },
  {
    id: 28567721541,
    product: "Plastik ABS",
    img: "/assets/plastik.jpg",
    customer: "Gustiranda",
    date: "21st August",
    amount: 160,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 2517383933399,
    product: "Batu Alam",
    img: "/assets/batualam.jpg",
    customer: "Herdisunatso",
    date: "16th February",
    amount: 570,
    method: "Online Payment",
    status: "Approved",
  },
  {
    id: 48820015619,
    product: "Kerikil",
    img: "/assets/kerikil.jpg",
    customer: "Asep Surasep",
    date: "20th March",
    amount: 1800,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2557766001527,
    product: "Pagar",
    img: "/assets/pagar.jpg",
    customer: "Rafael stroick",
    date: "3rd October",
    amount: 20,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 21047383933399,
    product: "Genting Atap",
    img: "/assets/gentingatap.jpg",
    customer: "Andi Sunarja",
    date: "29th December",
    amount: 25,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 21987383933399,
    product: "Pintu",
    img: "/assets/pintu.jpg",
    customer: "Adil Sunadil",
    date: "27th September",
    amount: 270,
    method: "Cash on Delivery",
    status: "Approved",
  },
];

const List = () => {
  return (
    <div className="list">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.method}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
