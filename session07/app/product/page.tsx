"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function page() {
    const searchParam = useSearchParams();

    const idProduct = searchParam.get("id");
    const nameProduct = searchParam.get("name");
    console.log("idProduct", idProduct);
    console.log("nameProduct", nameProduct);


    return (
        <div>trang danh sách sản phẩm
            <p>sản phẩm tìm kiếm có id là : {idProduct}</p>
        </div>
    )
}
