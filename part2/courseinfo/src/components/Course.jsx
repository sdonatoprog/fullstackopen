import Content from "./Content"

const Course = (props) => (
  <>
    <h1>{props.course.name}</h1>
    <Content parts={props.course.parts}></Content>
    <p><b>total of {props.course.parts.reduce((total, part) => part.exercises + total, 0)} exercises</b></p>
  </>
)

export default Course