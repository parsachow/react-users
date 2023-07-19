import { useState } from "react"

export default function AddUserForm(props) {

    const [user, setUser] = useState({
        name: '',
        email: '',
        country: ''
    })
    function handleChange(e){
        console.log(e.target.value);

        setUser({

            ...user,
            //es6 computed property syntax- lets calculate keyname from variable
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        //if input fields are empty, it'll show error messsage
        if (user.name === '' || user.email === '' || user.country === '') {return setErrorMessage("Please fill out the form before you hit submit") }


        //if we pass ({addUser}) in the main function, we can just use addUser(user) inside the handleSubmit function

        props.addUser(user);


        //clear out the form
        setUser({
            name: '',
            email: '',
            country: ''
        })

    }

    return (

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" value={user.name} name="name" onChange={handleChange}/>
            <input type="text" placeholder="email" value={user.email} name="email" onChange={handleChange}/>
            <input type="text" placeholder="country" value={user.country} name="country" onChange={handleChange}/>
            <button>Add User</button>
        </form>
    )
}