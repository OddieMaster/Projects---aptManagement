import React, { useState } from "react";
import GlobalHeader from "./pageComponents/GlobalHeader";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import { useForm } from "react-hook-form";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import PopupDelete from "./pageComponents/PopupDelete";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: "auto",
    display: "flex",
    marginTop: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(4),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 640,
  },
  submit: {
    backgroundColor: "#6CB26C",
    margin: theme.spacing(3, 0, 2),
    color: "#ffffff",
    fontWeight: "bold",
  },
  error: {
    color: "red",
  },
  table: {
    minWidth: 400,
    borderCollapse: "collapse",
    borderRadius: "5px 5px 0 0",
    margin: "25px 0",
    fontSize: "0.9em",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
    overflow: "hidden",
  },
  tableTheadTr: {
    backgroundColor: "#009879",
    color: "#ffffff",
    fontWeight: "bold",
  },
  tableTd: {
    padding: "12px 15px",
  },
  tableTbodyTr: {
    borderBottom: "1px solid #dddddd",
    backgroundColor: "#f3f3f3",
  },
  container: {
    background: "#c3d6e2",
    border: "solid 1px",
    borderRadius: "20px",
    marginTop: theme.spacing(1),
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
    backgroundColor: "#ffffff",
    color: "#009879",
    fontWeight: "bold",
  },
}));

const ConsultResident = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const { handleSubmit, register, errors } = useForm({});
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function handleClick() {
    setOpen(true);
  }

  function onSubmit(formData) {
    setInputValue(formData);
    handleClick();
  }

  function findItems(rows, value) {
    switch (value !== 0) {
      case value === 1 && inputValue !== "":
        console.log(rows);
        console.log(inputValue);
        let teste = rows.filter((row) => row.resident === "Craft");
        /*   let tempData = rows.filter((row) => row.resident.toLowerCase().indexOf(inputValue.toString().toLowerCase()) > -1) */
        console.log("ativou findItems");
        console.log(teste);
        /*   console.log(tempData); */
        return teste;

      default:
        console.log("entrou default");
        return rows;
    }
  }
  var result = findItems(props.data, value);

  return (
    <>
      <GlobalHeader title="Consult Resident Information" buttonHome={true} />
      <Container component="main" maxWidth="xs" className={classes.container}>
        <CssBaseline>
          <p>Choose with parameter you will use to find a resident</p>
          <InputLabel id="select">Choose Here</InputLabel>
          <Select
            labelId="selectResident"
            id="selectResident"
            name="resident"
            defaultValue=""
            fullWidth
            value={value}
            onChange={handleChange}
          >
            <MenuItem value={1}>Resident Name</MenuItem>
            <MenuItem value={2}>CPF</MenuItem>
            <MenuItem value={3}>E-mail</MenuItem>
            <MenuItem value={4}>Birth Date</MenuItem>
            <MenuItem value={5}>Telephone</MenuItem>
            <MenuItem value={6}>Apartment</MenuItem>
            <MenuItem value={7}>Block</MenuItem>
            ))
          </Select>
          <p> </p>

          {value === 1 ? (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <TextField
                  autoComplete="fname"
                  name="name"
                  variant="outlined"
                  fullWidth
                  id="name"
                  label="Please, insert a name here"
                  autoFocus
                  inputRef={register({
                    required: true,
                  })}
                />
                {errors.name && errors.name.type === "required" && (
                  <p className={classes.error}>This parameter can't be empty</p>
                )}
                <Button
                  fullWidth
                  variant="contained"
                  color="inherit"
                  className={classes.submit}
                  type="submit"
                >
                  Find
                </Button>
              </form>
            </>
          ) : null}

          {value === 2 ? (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <TextField
                  autoComplete="cpf"
                  name="cpf"
                  variant="outlined"
                  fullWidth
                  id="cpf"
                  label="Please, insert a CPF here"
                  autoFocus
                  inputRef={register({
                    required: true,
                  })}
                />
                {errors.cpf && errors.cpf.type === "required" && (
                  <p className={classes.error}>This parameter can't be empty</p>
                )}
                <Button
                  fullWidth
                  variant="contained"
                  color="inherit"
                  className={classes.submit}
                  type="submit"
                >
                  Find
                </Button>
              </form>
            </>
          ) : null}

          {value === 3 ? (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  id="email"
                  type="email"
                  label="Please, insert an E-mail here"
                  autoFocus
                  inputRef={register({
                    required: true,
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <p className={classes.error}>This parameter can't be empty</p>
                )}
                <Button
                  fullWidth
                  variant="contained"
                  color="inherit"
                  className={classes.submit}
                  type="submit"
                >
                  Find
                </Button>
              </form>
            </>
          ) : null}

          {value === 4 ? (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <TextField
                  autoComplete="bdate"
                  name="bdate"
                  variant="outlined"
                  fullWidth
                  id="bdate"
                  type="date"
                  label="Please choose the birthday date here"
                  autoFocus
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputRef={register({
                    required: true,
                  })}
                />
                {errors.bdate && errors.bdate.type === "required" && (
                  <p className={classes.error}>This parameter can't be empty</p>
                )}
                <Button
                  fullWidth
                  variant="contained"
                  color="inherit"
                  className={classes.submit}
                  type="submit"
                >
                  Find
                </Button>
              </form>
            </>
          ) : null}

          {value === 5 ? (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <TextField
                  autoComplete="telephone"
                  name="telephone"
                  variant="outlined"
                  fullWidth
                  id="telephone"
                  type="tel"
                  label="Please insert the telephone here"
                  autoFocus
                  inputRef={register({
                    required: true,
                  })}
                />
                {errors.telephone && errors.telephone.type === "required" && (
                  <p className={classes.error}>This parameter can't be empty</p>
                )}
                <Button
                  fullWidth
                  variant="contained"
                  color="inherit"
                  className={classes.submit}
                  type="submit"
                >
                  Find
                </Button>
              </form>
            </>
          ) : null}

          {value === 6 ? (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <TextField
                  autoComplete="apartment"
                  name="apartment"
                  variant="outlined"
                  fullWidth
                  id="apartment"
                  type="number"
                  label="Please insert an apartment here"
                  autoFocus
                  inputRef={register({
                    required: true,
                  })}
                />
                {errors.apartment && errors.apartment.type === "required" && (
                  <p className={classes.error}>This parameter can't be empty</p>
                )}
                <Button
                  fullWidth
                  variant="contained"
                  color="inherit"
                  className={classes.submit}
                  type="submit"
                >
                  Find
                </Button>
              </form>
            </>
          ) : null}

          {value === 7 ? (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <TextField
                  autoComplete="block"
                  name="block"
                  variant="outlined"
                  fullWidth
                  id="block"
                  type="number"
                  label="Please insert a block here"
                  autoFocus
                  inputRef={register({
                    required: true,
                  })}
                />
                {errors.block && errors.block.type === "required" && (
                  <p className={classes.error}>This parameter can't be empty</p>
                )}
                <Button
                  fullWidth
                  variant="contained"
                  color="inherit"
                  className={classes.submit}
                  type="submit"
                >
                  Find
                </Button>
              </form>
            </>
          ) : null}
        </CssBaseline>
      </Container>
      {open ? (
        <>
          <Container maxWidth="lg">
            <Table aria-label="simple table" className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableTheadTr}>Id</TableCell>
                  <TableCell className={classes.tableTheadTr} align="center">
                    Resident
                  </TableCell>
                  <TableCell className={classes.tableTheadTr} align="center">
                    E-mail
                  </TableCell>
                  <TableCell className={classes.tableTheadTr} align="center">
                    Birth Date
                  </TableCell>
                  <TableCell className={classes.tableTheadTr} align="center">
                    Telephone
                  </TableCell>
                  <TableCell className={classes.tableTheadTr} align="center">
                    CPF
                  </TableCell>
                  <TableCell className={classes.tableTheadTr} align="center">
                    Apartment
                  </TableCell>
                  <TableCell className={classes.tableTheadTr} align="center">
                    Block
                  </TableCell>
                  <TableCell className={classes.tableTheadTr} align="center">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {result.map((row) => (
                  <TableRow className={classes.tableTbodyTr} key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell className={classes.tableTd} align="center">
                      {row.resident}
                    </TableCell>
                    <TableCell className={classes.tableTd} align="center">
                      {row.email}
                    </TableCell>
                    <TableCell className={classes.tableTd} align="center">
                      {row.dtNascimento}
                    </TableCell>
                    <TableCell className={classes.tableTd} align="center">
                      {row.tel}
                    </TableCell>
                    <TableCell className={classes.tableTd} align="center">
                      {row.cpf}
                    </TableCell>
                    <TableCell className={classes.tableTd} align="center">
                      {row.apartment}
                    </TableCell>
                    <TableCell className={classes.tableTd} align="center">
                      {row.block}
                    </TableCell>
                    <TableCell className={classes.tableTd} align="center">
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<EditIcon />}
                      >
                        Edit
                      </Button>{" "}
                      {"  "}
                      <PopupDelete
                      title="Delete"
                      id={row.id}
                      deleteItem={props.deleteItem}
                    ></PopupDelete>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Container>
        </>
      ) : null}
      <Button onClick={() => console.log(inputValue)}>
        searchParameter(?)
      </Button>
      <Button onClick={() => console.log(value)}>value(?)</Button>
    </>
  );
};

export default ConsultResident;
