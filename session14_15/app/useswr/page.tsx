"use client"
import axios from 'axios'
import React from 'react'
import useSWR from 'swr'

const fectData = async (url: string) => {
    const res = await axios.get(url)
    return res.data

}
export default function page() {
    const { data, error } = useSWR(
        "https://jsonplaceholder.typicode.com/users",
        fectData,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    )
    if (error) return <div> quá trình lấy dữ liệu thất bại!</div>
    if (!data) return <div> data loading...</div>
    console.log(11111, data);

    return (
        <div>sử dụng  SWR !
            {data.map((item: any) => {
                return <li>{item.name}</li>
            })}
        </div>
    )
}
