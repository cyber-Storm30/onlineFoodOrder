import React from "react";
import "./Register.css";
import LockIcon from "@material-ui/icons/Lock";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 3),
    borderRadius: 2,
  },
}));

const Register = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const login = () => {
    setOpen(true);
  };
  return (
    <div className="register">
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <div className="modal__nav">
            FOOD<span style={{ color: "#61b15a" }}>MARKET</span>
          </div>
          <div className="modal__body">
            <h1>Have we met before?</h1>
            <p>
              Great to see you here! Just one step before we take you to
              paradise.
            </p>
            <form className="modal__form">
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Username
                <input type="text" />
              </span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Password
                <input type="password" />
              </span>
              <button className="modal__button">Sign in to your account</button>
              <p>
                New here?{" "}
                <Link style={{ color: "blue" }}>Create an account</Link>
              </p>
            </form>
          </div>
        </div>
      </Modal>
      <div className="register__title">
        <LockIcon
          style={{ color: "gray", fontSize: "32px", marginRight: "10px" }}
        />
        <h1>Secure Login</h1>
      </div>
      <div className="register__body">
        <div className="register__body__title">
          <h1>Create Account</h1>
          <div className="register__body__titleright">
            <p>Already have an account?</p>
            <button className="register__body__button" onClick={login}>
              Log in
            </button>
          </div>
        </div>
        <div className="register__body__form">
          <h1>Sign up to food market to get started</h1>
          <div className="forminput">
            <span
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              User Name
              <input type="text" />
            </span>
            <span style={{ display: "flex", flexDirection: "column" }}>
              Email <input type="email" />
            </span>
          </div>
          <div className="forminput">
            <span style={{ display: "flex", flexDirection: "column" }}>
              Password <input type="password" />
            </span>
            <span style={{ display: "flex", flexDirection: "column" }}>
              Confirm Password <input type="password" />
            </span>
          </div>
          <p className="seller">Seller? sign up here</p>
          <button className="forminput__button">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
