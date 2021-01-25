import {BrowserRouter, Switch, Route} from "react-router-dom"
import RoutingPaths from "./RoutingPaths"
import {HomeView} from "../views/HomeView"
import {AboutView} from "../views/AboutView"
import { SignInView } from "../views/SignInView"

export const Routes = (props: {children: React.ReactChild}) =>{
  const {children} =props
  return(

    <BrowserRouter>
    {children}
    <Switch>
    <Route exact path={RoutingPaths.homeView} component={HomeView}></Route>
    <Route exact path={RoutingPaths.aboutView} component={AboutView}></Route>
    <Route exact path={RoutingPaths.signInView} component={SignInView}></Route>
    <Route component={HomeView}></Route>
    </Switch>
    </BrowserRouter>
  )
  
  
}