import {
  Card,
  Frame,
  Photo,
  Name,
  CardInfo,
  Location,
  Tag,
} from './ProfileDescription.styled';

export const ProfileDescription = ({ username, tag, location, avatar }) => {
  return (
    <Card>
      <Frame>
        <Photo src={avatar} alt="User avatar" />
      </Frame>

      <CardInfo>
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </CardInfo>
    </Card>
  );
};
