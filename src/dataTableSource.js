export const userColumns = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 }, {
        field: "user", headerName: "User", width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email", headerName: "Email", width: 230
    },
    {
        field: "age", headerName: "Age", width: 100
    },
    {
        field: "status", headerName: "Status", width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },
];

//temporary data
export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "Active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "https://images.pexels.com/photos/5668887/pexels-photo-5668887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "2snow@gmail.com",
        status: "Passive",
        age: 42,
    },
    {
        id: 3,
        username: "Lannister",
        img: "https://images.pexels.com/photos/5717632/pexels-photo-5717632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "3snow@gmail.com",
        status: "Pending",
        age: 45,
    },
    {
        id: 4,
        username: "Stark",
        img: "https://images.pexels.com/photos/10375901/pexels-photo-10375901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "4snow@gmail.com",
        status: "Active",
        age: 16,
    },
    {
        id: 5,
        username: "Targaryen",
        img: "https://images.pexels.com/photos/5999817/pexels-photo-5999817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "5snow@gmail.com",
        status: "Passive",
        age: 22,
    },
    {
        id: 6,
        username: "Melisandre",
        img: "https://images.pexels.com/photos/6203795/pexels-photo-6203795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "6snow@gmail.com",
        status: "Active",
        age: 15,
    },
    {
        id: 7,
        username: "Clifford",
        img: "https://images.pexels.com/photos/8067767/pexels-photo-8067767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "7snow@gmail.com",
        status: "Passive",
        age: 44,
    },
    {
        id: 8,
        username: "Frances",
        img: "https://images.pexels.com/photos/3394347/pexels-photo-3394347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "8snow@gmail.com",
        status: "Active",
        age: 36,
    },
    {
        id: 9,
        username: "Roxie",
        img: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "snow@gmail.com",
        status: "Pending",
        age: 65,
    },
    {
        id: 10,
        username: "Roxanne",
        img: "https://images.pexels.com/photos/4063616/pexels-photo-4063616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "snow@gmail.com",
        status: "Active",
        age: 25,
    },
];