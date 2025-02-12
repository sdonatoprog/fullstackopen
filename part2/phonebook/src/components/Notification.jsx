const Notification = ({msg, error}) =>
{
  const style ={
    color: error ? 'red':'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }

  if(msg === null)
    return null
  return(
    <div style={style}>
      {msg}
    </div>
  )
}

export default Notification