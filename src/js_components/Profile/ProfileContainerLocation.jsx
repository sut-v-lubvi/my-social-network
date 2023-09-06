import { useParams } from "react-router-dom";
import ProfileContainer from "./ProfileContainer";

function ProfileContainerLocation() {
  const params = useParams();
  return <ProfileContainer params={params} />;
}

export default ProfileContainerLocation;
