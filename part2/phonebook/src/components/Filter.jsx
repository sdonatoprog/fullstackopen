const Filter = (props) => (
  <p>
    Filter shown with <input value={props.filter} onChange={props.onChange}/>
  </p>
)

export default Filter