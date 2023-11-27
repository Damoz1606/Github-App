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
        <div className={style.container}>
            <Image src={source} width={150} height={150} alt={''} />
            <div className={`${style.username}`}>{username}</div>
        </div>
    )
}

export { Profile }