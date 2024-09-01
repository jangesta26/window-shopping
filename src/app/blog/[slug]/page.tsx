import React from 'react'

const SinglePostPage = ({ params }:{ params: { slug: string }}) => {

    const { slug } = params;

    return (
        <div>
            This is Single post page: {slug}.
        </div>
    )
}

export default SinglePostPage
