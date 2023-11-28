import React, { FormEvent, useEffect, useState } from 'react'
import { Card, CardBody } from '../Card'
import { Profile } from '../Profile'
import { getUser } from '@/api/github.service';
import style from '@/styles/Github.module.css'

const GithubCard: React.FC = () => {

  const [profile, setProfile] = useState<{ username: string, image: string }>({ image: "", username: "" })
  const [nickname, setNickname] = useState<string>("");
  const [repo, setRepo] = useState<{ followers: number, repositories: number, followed: number }>({ followed: 0, followers: 0, repositories: 0 });
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    lookForUser("Damoz1606");
    return () => { }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    lookForUser(nickname);
  }

  const lookForUser = async (name: string) => {
    setLoad(true);
    try {
      const user = await getUser(name);
      console.log(user);
      if (user) {
        setProfile({
          username: user.login,
          image: user.avatar_url
        });
        setRepo({
          followed: user.following,
          followers: user.followers,
          repositories: user.public_repos
        })
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  }

  return (
    <div className={`${style.github}`}>
      <div className={`${style.profile}`}>
        <form onSubmit={handleSubmit}>
          <input
            onInput={(e) => setNickname(e.currentTarget.value)}
            value={nickname}
            className={`${style.search_bar}`}
            type="text"
            placeholder='Type Username + Enter' />
        </form>
        <Profile load={true} source={profile.image} username={profile.username} />
      </div>
      <div className={`${style.github_status}`}>
        <div className={`${style.stats_content}`}>
          <div className={`${style.stat}`}>
            <span>{repo.followers}</span>
            <p>Followers</p>
          </div>
          <div className={`${style.stat}`}>
            <span>{repo.repositories}</span>
            <p>Repositories</p>
          </div>
          <div className={`${style.stat}`}>
            <span>{repo.followed}</span>
            <p>Following</p>
          </div>
        </div>
        <div className={`${style.footer}`}>
          <p>Github Card with NextJS - Created By <a href='#'>Damoz1606</a></p>
        </div>
      </div>
    </div>
  )
}

export { GithubCard }