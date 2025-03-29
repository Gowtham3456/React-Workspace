// i use the props-for getting an value from the coomponet while it is called
export const Student = (props) => {
  return (
    <div className="stud">
        <table>
            <tr>
                <th> FUll name changed name</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>age</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>is married</th>
                <td>{props.married?"yes":"no"}</td>
            </tr>

        </table>
    </div>
  )
}
