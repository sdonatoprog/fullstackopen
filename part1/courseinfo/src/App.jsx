const Header = (props) => (
  <h1>{props.course.name}</h1>
)

const Part = (props) => (
  <p>
      {props.part} {props.exercises}
  </p>
)

const Content = (props) => (
  <>
    <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises}></Part>
    <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises}></Part>
    <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises}></Part>
  </>
)

const Total = (props) => (
  <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}></Header>
      <Content course={course}></Content>
      <Total course={course}></Total>
    </div>
  )
}

export default App