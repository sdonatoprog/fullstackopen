import { useState } from "react"

const PersonForm = (props) => (
  <form>
    <div>
      name: <input value={props.newName} onChange={props.onNameChange}/>
    </div>
    <div>
      phone: <input value={props.newPhone} onChange={props.onPhoneChange}/>
    </div>
    <div>
      <button type="submit" onClick={props.onAdd}>add</button>
    </div>
  </form>
)

export default PersonForm