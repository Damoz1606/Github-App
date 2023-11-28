import React from 'react'
import Image from 'next/image'
import style from '@/styles/Profile.module.css'

type ProfileProps = {
    load: boolean;
    source: string;
    username: string;
}

const Profile: React.FC<ProfileProps> = ({ load, source, username }) => {
    return (
        <div className={`${style.container} ${load ? style.load : ""}`}>
            <div className={`${style.image_container}`}>
                <Image src={source} alt={''} layout='fill' />
            </div>
            <div className={`${style.username}`}>{username}</div>
        </div>
    )
}

export { Profile }