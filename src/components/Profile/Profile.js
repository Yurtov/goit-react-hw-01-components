import { ProfileDescription } from "components/ProfileDescription/ProfileDescription"
import { ProfileStats } from "components/ProfileStats/ProfileStats"
import { ProfileCard } from "./Profile.styled"

export const Profile = ({username, tag, location, avatar, stats: {followers, views, likes}}) => {
    return (
        <ProfileCard>
        <ProfileDescription username={username} tag={tag} location={location} avatar={avatar}/>
      
        <ProfileStats followers={followers} views={views} likes={likes}/>
      </ProfileCard>
    )
}