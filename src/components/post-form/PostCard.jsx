import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function PostCard({ $id, title, featuredImage }) {

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-violet-500 rounded-xl p-4'>
                <div className='w-full justify-center mb-4 '>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
                </div>
                <h2
                    className='text-xl font-bold text-white'
                >{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard