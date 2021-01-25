import { useState } from "react"
import { loginCredentials } from "../shared/interface/interface"
import {useHistory} from "react-router-dom"
import RoutingPaths from "../routes/RoutingPaths"

export const SignInView = () => {
  const history = useHistory()
  const [loginCredentials, setLoginCredentials] = useState<loginCredentials>({ username: "", password: "" })

const signIn = () =>{
history.push(RoutingPaths.homeView)
localStorage.setItem("User", loginCredentials.username)
}
  return (
    <div>
      <h1>{loginCredentials.username}</h1>
      <h1>{loginCredentials.password}</h1>
      <form>
        <input placeholder="Username" onChange={event => setLoginCredentials({ ...loginCredentials, username: event.target.value })} /> <br />
        <input placeholder="Password" onChange={event => setLoginCredentials({ ...loginCredentials, password: event.target.value })} /> <br />
        <button onClick={()=> signIn()}>Sign in</button>
      </form>
    </div>
  )
}
