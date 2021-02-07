import { useState, useContext } from "react"
import { loginCredentials } from "../shared/interface/interface"
import { useHistory } from "react-router-dom"
import RoutingPaths from "../routes/RoutingPaths"
import { UserContext } from "../shared/provider/UserProvider"

export const SignInView = () => {
  const history = useHistory()
  const [loginCredentials, setLoginCredentials] = useState<loginCredentials>({ username: "", password: "" })
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

  const signIn = () => {
    localStorage.setItem("User", loginCredentials.username)
    setAuthenticatedUser(loginCredentials)
    history.push(RoutingPaths.homeView)
  }
  return (
    <div>
      <h1>{loginCredentials.username}</h1>
      <form>
        <input placeholder="Username" onChange={event => setLoginCredentials({ ...loginCredentials, username: event.target.value })} /> <br />
        <input placeholder="Password" onChange={event => setLoginCredentials({ ...loginCredentials, password: event.target.value })} /> <br />
        <button onClick={() => signIn()}>Sign in</button>
      </form>
    </div>
  )
}
