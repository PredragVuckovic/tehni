import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";

export default function FormDialog({
  open,
  handleClose,
  data,
  onChange,
  handleFormSubmit,
}) {
  const { id, firstName, lastName, userName, email, phone, adress, salary } =
    data;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {id ? "Update user" : "Create new user"}
        </DialogTitle>
        <DialogContent>
          <form>
            <TextField
              id="firstName"
              value={firstName}
              onChange={(e) => onChange(e)}
              placeholder="Enter First name"
              label="First Name"
              variant="outlined"
              margin="dense"
              fullWidth
            />
            <TextField
              id="lastName"
              value={lastName}
              onChange={(e) => onChange(e)}
              placeholder="Enter Last name"
              label="Last Name"
              variant="outlined"
              margin="dense"
              fullWidth
            />
            <TextField
              id="userName"
              value={userName}
              onChange={(e) => onChange(e)}
              placeholder="Enter Username"
              label="Username"
              variant="outlined"
              margin="dense"
              fullWidth
            />
            <TextField
              id="email"
              value={email}
              onChange={(e) => onChange(e)}
              placeholder="Enter email"
              label="E-mail"
              variant="outlined"
              margin="dense"
              fullWidth
            />
            <TextField
              id="phone"
              value={phone}
              onChange={(e) => onChange(e)}
              placeholder="Enter phone number"
              label="Phone Number"
              variant="outlined"
              margin="dense"
              fullWidth
            />
            <TextField
              id="adress"
              value={adress}
              onChange={(e) => onChange(e)}
              placeholder="Enter Adress"
              label="Adress"
              variant="outlined"
              margin="dense"
              fullWidth
            />
            <TextField
              id="salary"
              value={salary}
              onChange={(e) => onChange(e)}
              placeholder="Enter Salary"
              label="Salary"
              variant="outlined"
              margin="dense"
              fullWidth
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={() => handleFormSubmit()}
            variant="contained"
          >
            {id ? "Update" : "Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
