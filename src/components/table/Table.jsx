import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tables = () => {
      
    const rows = [
        {
            id: 1143155,
            product: "Dog food",
            img: "https://images.pexels.com/photos/7310213/pexels-photo-7310213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            customer: "Yuichi",
            date: "15102023",
            price: 35,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 2254266,
            product: "Plant",
            img: "https://images.pexels.com/photos/1777813/pexels-photo-1777813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            customer: "Mommy Red",
            date: "15102023",
            price: 10,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 3365377,
            product: "Donuts",
            img: "https://images.pexels.com/photos/867452/pexels-photo-867452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            customer: "Godwyn",
            date: "15102023",
            price: 2,
            method: "Credit Card",
            status: "Approved",
        },
        {
            id: 4476488,
            product: "Goldfish",
            img: "https://images.pexels.com/photos/8434694/pexels-photo-8434694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            customer: "Godwyn",
            date: "15102023",
            price: 5,
            method: "Cash on Delivery",
            status: "Denied",
        },
        {
            id: 5587599,
            product: "Tiles",
            img: "https://images.pexels.com/photos/1525937/pexels-photo-1525937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            customer: "Lance",
            date: "15102023",
            price: 3,
            method: "Credit Card",
            status: "Pending",
        },
        {
            id: 6698600,
            product: "Album",
            img: "https://images.squarespace-cdn.com/content/v1/5c3398ebaa49a1b1f53eabdf/1681727671077-HJSHZZA6DJJW4H92WXV5/product.36612.168169314394658.jpg?format=1500w",
            customer: "Baron",
            date: "15102023",
            price: 50,
            method: "Cash on Delivery",
            status: "Delivered",
        },
    ];
    
    return (
        <div>
        <TableContainer component={Paper} className="table">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
                <TableCell className="tableCell">Tracking ID</TableCell>
                <TableCell className="tableCell">Product</TableCell>
                <TableCell className="tableCell">Customer</TableCell>
                <TableCell className="tableCell">Date</TableCell>
                <TableCell className="tableCell">Price</TableCell>
                <TableCell className="tableCell">Payment Method</TableCell>
                <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell component="th" scope="row" className="tableCell">
                  {row.id}
                </TableCell>
                <TableCell className="tableCell">
                    <div className="cellWrapper">
                        <img src={row.img} alt="" className="image"/>
                        {row.product}
                    </div>
                </TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.price}</TableCell>
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
}

export default Tables