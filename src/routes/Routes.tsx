import {BrowserRouter, Switch, Route} from "react-router-dom"
import {HomeView} from "../views/HomeView"
import {AboutView} from "../views/AboutView"

export const Routes = (props: {children: React.ReactChild}) =>{
  const {children} =props
  return(

    <BrowserRouter>
    {children}
    <Switch>
    <Route exact path={"/home"} component={HomeView}></Route>
    <Route exact path={"/about"} component={AboutView}></Route>
    </Switch>
    </BrowserRouter>
  )
  
  
}