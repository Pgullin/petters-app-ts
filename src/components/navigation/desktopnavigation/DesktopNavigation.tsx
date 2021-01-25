import "./DesktopNavigation.css"
import Logotype from "../../../shared/images/Logo.svg"
import { useHistory } from "react-router-dom"
import RoutingPaths from "../../../routes/RoutingPaths"

export const DesktopNavigation = () => {
  const history = useHistory()
  return (
    <div className = "desktopNavigationWrapper">
      <img className = "navigationLogotype" 
      src={Logotype} 
      alt={""}/>
      <span onClick={() => history.push(RoutingPaths.homeView)}>Products</span>
      <span onClick={() => history.push(RoutingPaths.homeView)}>Brands</span>
      <span onClick={() => history.push(RoutingPaths.homeView)}>News</span>
      <span onClick={() => history.push(RoutingPaths.homeView)}>Guideline</span>
      <span onClick={() => history.push(RoutingPaths.signInView)}>Sign In</span>
      <span onClick={() => history.push("/about")}>About</span>
      
    </div>
  )
}
