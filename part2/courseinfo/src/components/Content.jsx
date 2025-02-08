import Part from "./Part"

const Content = (props) => (
  <div>
    {props.parts.map((part) => <Part key={part.id} part={part}></Part>)}
  </div>
)

export default Content