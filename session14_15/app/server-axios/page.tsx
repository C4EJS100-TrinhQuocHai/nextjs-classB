import axios from 'axios'


async function getData() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    return res.data
}
export default async function page() {
    const users = await getData();
    console.log("giá trị users", users);

    return (
        <div>data fetching with axios
            {users.map((item: any) => {
                return <li key={item.id}>{item.name}</li>
            })}
        </div>
    )
}
