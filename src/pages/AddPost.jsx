import React from 'react'
import { PostForm, Container } from '../components'

function AddPost() {
    return (
        <div className="py-10">
            <Container>
                <h1 className="mb-6 px-2 text-2xl font-bold text-slate-900">Add New Post</h1>
                <PostForm />
            </Container>
        </div>
    )
}

export default AddPost