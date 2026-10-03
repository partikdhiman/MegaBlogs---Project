import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.rows || [])
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-20 text-center">
                <Container>
                    <h1 className="text-2xl font-bold text-slate-800">
                        Login to read posts
                    </h1>
                    <p className="mt-2 text-slate-500">
                        Sign in to see the latest stories on MegaBlogs.
                    </p>
                </Container>
            </div>
        )
    }

    return (
        <div className="w-full py-10">
            <Container>
                <h1 className="mb-6 text-2xl font-bold text-slate-900">Latest Posts</h1>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home