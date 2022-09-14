import React from 'react';
import axios from 'axios';

export default class PersonAdd extends React.Component {
  state = {
    name:'',
     /* surname:"",
      email:"",
      password:"",
      mobile:"",
      projects:"",
      friends:"",
      skillsets:"",
      experience:"",
      description:""*/
     // user:''

  }

 /* handleChange = event => {
    this.setState({ name: event.target.value.name,
        surname:event.target.value.surname,
        email:event.target.value.email,
        password:event.target.value.password,
        mobile:event.target.value.mobile,
        projects:event.target.value.projects,
        friends:event.target.values.friends,
        skillsets:event.target.value.skillsets,
        experience:event.target.value.experience,
        description:event.target.value.description });
  }*/

  handleChange = event => {
    this.setState({ name: event.target.value.name
    });
console.log(this.name)
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name:this.name
     /* surname:this.surname,
      email:this.email,
      password:this.password,
      mobile:this.mobile,
      projects:this.projects,
      friends:this.friends,
      skillsets:this.skillsets,
      experience:this.experience,
      description:this.description*/

    };
    var a = JSON.stringify(user)
    console.log(event.target);
console.log(user);
    axios.post('http://localhost:3000/users/submit', { a })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
            <br></br>
          {/*  Person Surname:
            <input type="text" name="surname" onChange={this.handleChange} />
            <br></br>
            Email:
            <input type="text" name="email" onChange={this.handleChange} />
            <br></br>
            Password
            <input type="text" name="password" onChange={this.handleChange} />
            <br></br>
            Mobile:
            <input type="text" name="mobile" onChange={this.handleChange} />
            <br></br>
            Projects:
            <input type="text" name="projects" onChange={this.handleChange} />
            <br></br>
            Friends:
            <input type="text" name="friends" onChange={this.handleChange} />
            <br></br>
            Skillsets:
            <input type="text" name="skillsets" onChange={this.handleChange} />
            <br></br>
            Experience:
            <input type="text" name="experience" onChange={this.handleChange} />
            <br></br>
            Description:
            <input type="text" name="description" onChange={this.handleChange} /> */}
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}