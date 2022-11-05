export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headName: "Product",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avater" />
          {params.row.product}
        </div>
      );
    },
  },
  {
    field: "customer",
    headerName: "Customer",
    width: 230,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 260,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
//temporary data
export const userRows = [
  {
    id: 1,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    status: "Approved",
    customer: "John Smith",
    amount: 35,
  },
  {
    id: 2,
    product: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Michael Doe",
    status: "Pending",
    amount: 42,
  },
  {
    id: 3,
    product: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Jane Smith",
    status: "Pending",
    amount: 45,
  },
  {
    id: 4,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Jane Smith",
    status: "Approved",
    amount: 16,
  },
  {
    id: 5,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    status: "Pending",
    amount: 22,
  },
];
