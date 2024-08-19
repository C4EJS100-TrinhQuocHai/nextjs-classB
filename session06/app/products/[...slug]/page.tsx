import React from 'react'
interface Product {
    idProduct: "string"
}
interface Props {
    params: any
}
export default function ProductDetail(props: Props) {
    console.log("giá trị props", props);
    const { params } = props;
    return (
        <div>trang chi tiết sản phẩm có id là: {params.slug}</div>
    )
}
