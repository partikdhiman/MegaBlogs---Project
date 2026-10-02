import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/config'

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm duration-200 hover:shadow-md">
                <img
                    src={appwriteService.getFilePreview(featuredImage)}
                    alt={title}
                    className="h-48 w-full object-cover"
                />
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
                </div>
            </div>
        </Link>
    )
}

export default PostCard