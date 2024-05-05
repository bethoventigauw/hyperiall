import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./productable.css";

export const rows = [
  {
    partNumber: "DRBDM063",
    img: "/assets/besibeton.jpg",
    product: "Besi Beton 10mm",
    brands: "KPS Steel",
    price: "Rp.500.000",
    stock: "in stock",
    addtoCart: "Add to cart",
  },
  {
    partNumber: "51Wy1UhvbZL",
    img: "/assets/pakubeton.jpg",
    product: "Paku Beton 5mm (50pcs)",
    brands: "Kenmaster",
    price: "Rp.50.000",
    stock: "in stock",
    addtoCart: "Add to cart",
  },
  {
    partNumber: "HJKDM063",
    img: "/assets/batubata.jpg",
    product: "Batu Bata (80x80x210mm)",
    brands: "BATA",
    price: "Rp.75.000",
    stock: "in stock",
    addtoCart: "Add to cart",
  },
  {
    partNumber: "31CTWTB2",
    img: "/assets/keramik.jpg",
    product: "Keramik Lantai 30x30cm",
    brands: "KIA",
    price: "Rp.80.000",
    stock: "in stock",
    addtoCart: "Add to cart",
  },
  {
    partNumber: "HRDDR3055",
    img: "/assets/pipa.jpg",
    product: "Pipa PVC 8 inci",
    brands: "Lifelon",
    price: "Rp.65.000",
    stock: "in stock",
    addtoCart: "Add to cart",
  },
  {
    partNumber: "FGH543",
    img: "/assets/semen.jpg",
    product: "Semen 50kg",
    brands: "Semen Gresik",
    price: "Rp.100.000",
    stock: "in stock",
    addtoCart: "Add to cart",
  },
  {
    partNumber: "YABYBX3055",
    img: "/assets/kayumahoni.jpg",
    product: "Kayu Mahoni 34x2cm 4pcs",
    brands: "Barrington",
    price: "Rp.120.000",
    stock: "in stock",
    addtoCart: "Add to cart",
  },
];
const Productable = () => {
  return (
    <div className="productable">
      <TableContainer component={Paper} className="tablecontainer">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Part Number</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Brands</TableCell>
              <TableCell className="tableCell">Price</TableCell>
              <TableCell className="tableCell">Stock</TableCell>
              <TableCell className="tableCell">Add to cart</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.partNumber}>
                <TableCell className="tableCell">{row.partNumber}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.brands}</TableCell>
                <TableCell className="tableCell">{row.price}</TableCell>
                <TableCell className="tableCell">{row.stock}</TableCell>
                <TableCell className="tableCell">
                  <span> {row.addtoCart}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Productable;