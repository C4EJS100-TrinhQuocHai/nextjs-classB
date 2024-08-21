"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Posts = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    // Lấy giá trị từ URL


    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Cập nhật URL với query parameter
        router.push(`/posts?search=${searchTerm}`);
    };

    return (
        <div>
            <h1>Posts Page</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Enter search term"
                />
                <button type="submit">Tìm kiếm</button>
            </form>
            {searchTerm && (
                <div>
                    <h2>Kết quả tìm kiếm:</h2>
                    <p>{searchTerm}</p>
                </div>
            )}
        </div>
    );
};

export default Posts;
