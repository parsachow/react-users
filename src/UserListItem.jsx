
export default function UserListItem({employee}) {
    return (
        <li>
            {employee.name} <span>{employee.email}</span> <span>{employee.country}</span>
        </li>
    )
}