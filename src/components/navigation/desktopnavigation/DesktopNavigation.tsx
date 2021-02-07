import "./DesktopNavigation.css"
import Logotype from "../../../shared/images/Logo.svg"
import { useHistory } from "react-router-dom"
import RoutingPaths from "../../../routes/RoutingPaths"
import {useContext} from "react"
import {UserContext} from "../../../shared/provider/UserProvider"
import {Profile} from "../../../components/profile/Profile"

export const DesktopNavigation = () => {
  const history = useHistory()
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

const displaySignInButtonOrUsernameDependingOnAuthentication = () =>{
  return authenticatedUser
  ? <Profile/>
  : <span onClick={() => history.push(RoutingPaths.signInView)}>Logga in</span>
}

  return (
    <div className = "desktopNavigationWrapper">
      <img className = "navigationLogotype" 
      src={Logotype} 
      alt={""}/>
      <span onClick={() => history.push(RoutingPaths.homeView)}>Hem</span>
      <span onClick={() => history.push(RoutingPaths.productsView)}>Produkter</span>
      <span onClick={() => history.push(RoutingPaths.brandsView)}>Varumärken</span>
      <span onClick={() => history.push(RoutingPaths.newsView)}>Nyheter</span>
      {displaySignInButtonOrUsernameDependingOnAuthentication()}
    </div>
  )
}
