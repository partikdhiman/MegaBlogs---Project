import React, { useState, useEffect } from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'

function AllPost() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.rows || [])
            }
        })
    }, [])

    return (
        <div className="w-full py-10">
            <Container>
                <h1 className="mb-6 text-2xl font-bold text-slate-900">All Posts</h1>
                {posts.length === 0 ? (
                    <p className="text-slate-500">No posts yet.</p>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {posts.map((post) => (
                            <PostCard key={post.$id} {...post} />
                        ))}
                    </div>
                )}
            </Container>
        </div>
    )
}

export default AllPost