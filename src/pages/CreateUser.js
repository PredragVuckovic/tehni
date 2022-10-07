// import React, { useEffect, useState } from "react";
// import FormDialog from "../components/dialog";
// import { TextField } from "@material-ui/core";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-alpine.css";
// import { Grid, Button } from "@material-ui/core";
// export default function CreateUser() {
//   const url = "http://localhost:4000/users";
//   useEffect(() => {
//     getData();
//   }, []);

//   const [formData, setFormData] = useState(formData);
//   return (
//     <div className="h-screen bg-slate-200">
//       <h1 className="text-4xl text-center">Create users</h1>
//       <br />
//       <div class="mx-[35vw] my-2">
//         <div class="max-w-xl rounded overflow-hidden shadow-xl align-middle bg-blue-400">
//           <h1 class="text-center text-3xl my-2">Add new User</h1>
//           <form
//             class="px-20 my-12 max-w-3xl mx-auto space-y-6"
//             onSubmit={(e) => submit(e)}
//           >
//             <TextField
//               id="firstName"
//               value={firstName}
//               onChange={(e) => onChange(e)}
//               placeholder="Enter First name"
//               label="First Name"
//               variant="outlined"
//               margin="dense"
//               fullWidth
//             />
//             <TextField
//               id="lastName"
//               value={lastName}
//               onChange={(e) => onChange(e)}
//               placeholder="Enter Last name"
//               label="Last Name"
//               variant="outlined"
//               margin="dense"
//               fullWidth
//             />
//             <TextField
//               id="userName"
//               value={userName}
//               onChange={(e) => onChange(e)}
//               placeholder="Enter Username"
//               label="Username"
//               variant="outlined"
//               margin="dense"
//               fullWidth
//             />
//             <TextField
//               id="email"
//               value={email}
//               onChange={(e) => onChange(e)}
//               placeholder="Enter email"
//               label="E-mail"
//               variant="outlined"
//               margin="dense"
//               fullWidth
//             />
//             <TextField
//               id="phone"
//               value={phone}
//               onChange={(e) => onChange(e)}
//               placeholder="Enter phone number"
//               label="Phone Number"
//               variant="outlined"
//               margin="dense"
//               fullWidth
//             />
//             <TextField
//               id="adress"
//               value={adress}
//               onChange={(e) => onChange(e)}
//               placeholder="Enter Adress"
//               label="Adress"
//               variant="outlined"
//               margin="dense"
//               fullWidth
//             />
//             <TextField
//               id="salary"
//               value={salary}
//               onChange={(e) => onChange(e)}
//               placeholder="Enter Salary"
//               label="Salary"
//               variant="outlined"
//               margin="dense"
//               fullWidth
//             />
//             <div class="items-center">
//               <button class="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-5 rounded-lg mx-16 items-center shadow-md cursor-pointer">
//                 Add
//               </button>
//               <button
//                 onClick={""}
//                 class="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-4 rounded-lg mx-12 items-center shadow-md cursor-pointer"
//               >
//                 Reset
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <FormDialog
//         open={open}
//         handleClose={handleClose}
//         data={formData}
//         onChange={onChange}
//         handleFormSubmit={handleFormSubmit}
//       />
//     </div>
//   );
// }
