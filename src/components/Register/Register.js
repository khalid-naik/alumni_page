// import React, { Component } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"
// import axios from 'axios'
// class Register extends Component {
  //   constructor(){
  //       super()
  //       this.state = {
  //           fullName: '',
  //           username: '',
  //           email: '',
  //           password: ''
  //       }
  //       this.changeFullName = this.changeFullName.bind(this)
  //       this.changeUsername = this.changeUsername.bind(this)
  //       this.changeEmail = this.changeEmail.bind(this)
  //       this.changePassword = this.changePassword.bind(this)
  //       this.onSubmit = this.onSubmit.bind(this)
  //   }

  // changeFullName(event){
  //   this.setState({
  //     fullName:event.target.value
  //   })
  // }
  // changeUsername(event){
  //   this.setState({
  //     username:event.target.value
  //   })
  // }
  // changeEmail(event){
  //   this.setState({
  //     email:event.target.value
  //   })
  // }
  // changePassword(event){
  //   this.setState({
  //     password:event.target.value
  //   })
  // }

  // onSubmit(event) {
  //   event.preventDefault()

  //   const registered = {
  //     fullName: this.state.fullName,
  //     username:this.state.username,
  //     email:this.state.email,
  //     password:this.state.password
  //   }

  //   axios.post('http://localhost:4000/app/signup',registered)
  //     .then(response => console.log(response.data))

  //   this.setState({
  //     fullName:'',
  //     username:'',
  //     email:'',
  //     password:''
  //   })

  // }
//   render() {
//     return (
//       <div> 

//       <div className='container'>
//                 <div className='form-div'>
//                     <form onSubmit={this.onSubmit}>
//                         <input type="text"
//                         placeholder="fullName"
                        // onChange={this.changeFullName}
                        // value={this.state.fullName}
//                         className='form-control form-group'
//                         />
//                         <input type="text"
//                         placeholder="username"
//                         onChange={this.changeUsername}
//                         value={this.state.username}
//                         className='form-control form-group'
//                         />

//                         <input type="text"
//                         placeholder="E-mail"
                        // onChange={this.changeEmail}
                        // value={this.state.email}
//                         className='form-control form-group'
//                         />

//                         <input type="text"
//                         placeholder="password"
                        // onChange={this.changePassword}
                        // value={this.state.password}
//                         className='form-control form-group'
//                         />
                        
//                         <input type="submit" className="btn btn-danger btn-block" value="submit" />
//                     </form>
//                 </div>
//             </div>
//       </div>
//     )
//   }
// }

// export default Register




// import React, { Component } from 'react'
// import axios from 'axios'
// import './Registerstyle.css'

// const bgColor = {
//   backgroundColor: '#eee'
// }
// const makeCircular = {
//   borderRadius: '25px'
// }



// class Register extends Component {


//   constructor(){
//     super()
//     this.state = {
//         fullName: '',
//         username: '',
//         email: '',
//         password: ''
//     }
//     this.changeFullName = this.changeFullName.bind(this)
//     this.changeUsername = this.changeUsername.bind(this)
//     this.changeEmail = this.changeEmail.bind(this)
//     this.changePassword = this.changePassword.bind(this)
//     this.onSubmit = this.onSubmit.bind(this)
// }

// changeFullName(event){
// this.setState({
//   fullName:event.target.value
// })
// }
// changeUsername(event){
// this.setState({
//   username:event.target.value
// })
// }
// changeEmail(event){
// this.setState({
//   email:event.target.value
// })
// }
// changePassword(event){
// this.setState({
//   password:event.target.value
// })
// }

// onSubmit(event) {
// event.preventDefault()

// const registered = {
//   fullName: this.state.fullName,
//   username:this.state.username,
//   email:this.state.email,
//   password:this.state.password
// }

// axios.post('http://localhost:4000/app/signup',registered)
//   .then(response => console.log(response.data))

// this.setState({
//   fullName:'',
//   username:'',
//   email:'',
//   password:''
// })

// }

//   render() {
//     return (
//   <section class="vh-100" style={bgColor}>
//   <div class="container h-100">
//     <div class="row d-flex justify-content-center align-items-center h-100">
//       <div class="col-lg-12 col-xl-11">
//         <div class="card text-black" style={makeCircular}>
//           <div class="card-body p-md-5">
//             <div class="row justify-content-center">
//             <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

// <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

// <form onSubmit={this.onSubmit} class="mx-1 mx-md-4">

//   <div class="d-flex flex-row align-items-center mb-4">
//     <i class="fas fa-user fa-lg me-3 fa-fw"></i>
//     <div class="form-outline flex-fill mb-0">
//       {/* <label class="form-label" for="form3Example1c">Your Name</label> */}
//       <label class="form-label" for="form3Example1c">FullName</label>
//       <input
//        type="text" 
//        id="form3Example1c" 
//        class="form-control" 
//        onChange={this.changeFullName}
//        value={this.state.fullName}
//       />

//     </div>
//   </div>

//   <div class="d-flex flex-row align-items-center mb-4">
//     <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
//     <div class="form-outline flex-fill mb-0">
//       {/* <label class="form-label" for="form3Example4c">Password</label> */}
//       <label class="form-label" for="form3Example4c">Username</label>
//       <input 
//        type="text" 
//        id="form3Example4c" 
//        class="form-control" 
      //  onChange={this.changeUsername} 
      //  value={this.state.username}
//        />
//     </div>
//   </div>

//   <div class="d-flex flex-row align-items-center mb-4">
//     <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
//     <div class="form-outline flex-fill mb-0">
//       {/* <label class="form-label" for="form3Example3c">Your Email</label> */}
//       <label class="form-label" for="form3Example3c">Email</label>
//       <input 
//        type="email" 
//        id="form3Example3c" 
//        class="form-control" 
      //  onChange={this.changeEmail}
      //  value={this.state.email}
//       />
//     </div>
//   </div>

//   <div class="d-flex flex-row align-items-center mb-4">
//     <i class="fas fa-key fa-lg me-3 fa-fw"></i>
//     <div class="form-outline flex-fill mb-0">
//       {/* <label class="form-label" for="form3Example4cd">Repeat your password</label> */}
//       <label class="form-label" for="form3Example4cd">Password</label>
//       <input 
//        type="password" 
//        id="form3Example4cd" 
//        class="form-control" 
      //  onChange={this.changePassword}
      //  value={this.state.password}
//       />
//     </div>
//   </div>

//   <div class="form-check d-flex justify-content-center mb-5">
//     <input
//       class="form-check-input me-2"
//       type="checkbox"
//       value=""
//       id="form2Example3c"
//     />
//     <label class="form-check-label" for="form2Example3">
//       I agree all statements in <a href="#!">Terms of service</a>
//     </label>
//   </div>

//   <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
//     {/* <button type="button" class="btn btn-primary btn-lg">Register</button> */}
//     <input type="submit" className="btn btn-danger btn-block" value="submit" />
//   </div>

// </form>

// </div>
// <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

// {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" class="img-fluid" alt="Sample image" /> */}
// <img src={"./assets/nitimage.png"} class="img-fluid" alt="no image" />

// </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//     )
//   }
// }

// export default Register




import React, { Component } from 'react'
 import axios from 'axios'
 import './Registerstyle.css'

export class Register extends Component {

  constructor(){
    super()
    this.state = {
        fullName: '',
        username: '',
        email: '',
        password: ''
    }
    this.changeFullName = this.changeFullName.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
}

changeFullName(event){
this.setState({
  fullName:event.target.value
})
}
changeUsername(event){
this.setState({
  username:event.target.value
})
}
changeEmail(event){
this.setState({
  email:event.target.value
})
}
changePassword(event){
this.setState({
  password:event.target.value
})
}

onSubmit(event) {
event.preventDefault()

const registered = {
  fullName: this.state.fullName,
  username:this.state.username,
  email:this.state.email,
  password:this.state.password
}

axios.post('http://localhost:4000/app/signup',registered)
  .then(response => console.log(response.data))

this.setState({
  fullName:'',
  username:'',
  email:'',
  password:''
})

}

  render() {
    return (
      <div>
        <section class="h-100 bg-dark">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card card-registration my-4">
          <div class="row g-0">
            <div class="col-xl-6 d-none d-xl-block">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                alt="Sample photo"
                class="img-fluid"
                style={{borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem'}}
              />
            </div>
            <div class="col-xl-6">
              <div class="card-body p-md-5 text-black">
                <h3 class="mb-5 text-uppercase">Student registration form</h3>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1m" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1m">First name</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1n">Last name</label>
                    </div>
                  </div>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example97" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example97">Email ID</label>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1m1" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1m1">Batch</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n1" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1n1">Branch</label>
                    </div>
                  </div>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example8" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example8">Enrollment</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example8" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example8">Address</label>
                </div>

                {/* <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 class="mb-0 me-4">Gender: </h6>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="femaleGender"
                      value="option1"
                    />
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="maleGender"
                      value="option2"
                    />
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div class="form-check form-check-inline mb-0">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="otherGender"
                      value="option3"
                    />
                    <label class="form-check-label" for="otherGender">Other</label>
                  </div>

                </div> */}

                {/* <div class="row">
                  <div class="col-md-6 mb-4">

                    <select class="select">
                      <option value="1">State</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                  <div class="col-md-6 mb-4">

                    <select class="select">
                      <option value="1">City</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                </div> */}

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example9" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example9">Positions held</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example90" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example90">Current Position</label>
                </div>

                {/* <div class="form-outline mb-4">
                  <input type="text" id="form3Example99" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example99">Course</label>
                </div> */}

                <div class="d-flex justify-content-end pt-3">
                  {/* <button type="button" class="btn btn-light btn-lg">Reset all</button> */}
                  <button type="button" class="btn btn-warning btn-lg ms-2">Submit form</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
    )
  }
}

export default Register