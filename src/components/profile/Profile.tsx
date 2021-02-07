import "./Profile.css"
import {useContext} from "react"
import {UserContext} from "../../shared/provider/UserProvider"



export const Profile = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
  return (
    <div>
      <img src={"https://thispersondoesnotexist.com/image"} alt="Profile Image" className="profileImage"/>
      {authenticatedUser.username}
    </div>
  )
}
