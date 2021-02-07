import {BrowserRouter, Switch, Route} from "react-router-dom"
import RoutingPaths from "./RoutingPaths"
import {HomeView} from "../views/HomeView"
import {ProductsView} from "../views/ProductsView"
import { SignInView } from "../views/SignInView"
import { NewsView } from "../views/NewsView"
import { BrandsView } from "../views/BrandsView"

export const Routes = (props: {children: React.ReactChild}) =>{
  const {children} =props
  return(

    <BrowserRouter>
    {children}
    <Switch>
    <Route exact path={RoutingPaths.homeView} component={HomeView}></Route>
    <Route exact path={RoutingPaths.productsView} component={ProductsView}></Route>
    <Route exact path={RoutingPaths.newsView} component={NewsView}></Route>
    <Route exact path={RoutingPaths.signInView} component={SignInView}></Route>
    <Route exact path={RoutingPaths.brandsView} component={BrandsView}></Route>
    <Route component={HomeView}></Route>
    </Switch>
    </BrowserRouter>
  )
  
  
}