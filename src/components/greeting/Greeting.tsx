import './Greeting.css'

export const Greeting = (props: {name: string}) => {
  return (
    <div>
      <h1 className = "title">Hello! {props.name} made this</h1>
      <h2>Wrapped in a div since two elements</h2>
    </div>
  )
}