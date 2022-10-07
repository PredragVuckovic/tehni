import React from "react";
import { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import FormDialog from "../components/dialog";

export default function ListUsers() {
  const initialValue = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phone: "",
    adress: "",
    salary: 0,
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialValue);
  const url = "http://localhost:4000/users";
  const [gridApi, setGridApi] = useState(null);
  const [tableData, setTableData] = useState(null);

  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue);
  };

  const onChange = (e) => {
    const { value, id } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFormSubmit = () => {
    if (formData.id) {
      const confirm = window.confirm("Are you sure?");
      confirm &&
        fetch(url + `/${formData.id}`, {
          method: "PUT",
          body: JSON.stringify(formData),
          headers: {
            "content-type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((resp) => {
            handleClose();
            getData();
          });
    } else {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((resp) => {
          handleClose();
          getData();
        });
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setTableData(resp));
  };

  const handleUpdate = (oldData) => {
    setFormData(oldData);
    handleClickOpen();
  };
  const handleDelete = (id) => {
    const confirm = window.confirm(
      "Are you sure, you want to delete this row",
      id
    );
    if (confirm) {
      fetch(url + `/${id}`, { method: "DELETE" })
        .then((resp) => resp.json())
        .then((_resp) => getData());
    }
  };
  const columnDefs = [
    {
      headerName: "First Name",
      field: "firstName",
      minWidth: 150,
    },
    {
      headerName: "Last Name",
      field: "lastName",
      minWidth: 150,
    },
    {
      headerName: "Username",
      field: "userName",
      maxWidth: 200,
    },
    {
      headerName: "E-mail",
      field: "email",
      minWidth: 150,
    },
    {
      headerName: "Phone",
      field: "phone",
      maxWidth: 120,
    },
    {
      headerName: "Adress",
      field: "adress",
      maxWidth: 150,
    },
    {
      headerName: "Salary",
      field: "salary",
      maxWidth: 120,
    },
    {
      headerName: "Actions",
      field: "id",
      maxWidth: 200,
      cellRendererFramework: (params) => (
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleUpdate(params.data)}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleDelete(params.value)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const onGridReady = (params) => {
    setGridApi(params);
  };

  const defaultColDef = {
    sortable: true,
    flex: 1 / 2,
    filter: true,
    floatingFilter: true,
  };

  return (
    <div className="mt-3 content-center">
      <h1 className="text-4xl text-center h-full m-4"> Users</h1>

      <div
        className="ag-theme-alpine content-center text-center "
        style={{ height: "600px" }}
      >
        <AgGridReact
          colResizeDefault="true"
          rowData={tableData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          groupIncludeFooter={true}
          pagination={true}
          paginationPageSize={10}
          suppressAutoSize={true}
          suppressRowTransform={true}
          className="m-12 text-center "
        />
      </div>
      <Grid align="center" className="m-12">
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add user
        </Button>
      </Grid>
      <FormDialog
        open={open}
        handleClose={handleClose}
        data={formData}
        onChange={onChange}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
}
