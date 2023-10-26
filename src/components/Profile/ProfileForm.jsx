import { useContext, useRef } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ProfileForm = () => {
  const newPasswordRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const inputHandler = (e) => {
    e.preventDefault();

    const enterdPassword = newPasswordRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBpYRWWzvVLyPSxqZxnnuKKgFYMW_XkCy4",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enterdPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      history.replace("/");
    });
  };

  return (
    <form className={classes.form} onSubmit={inputHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="8"
          ref={newPasswordRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
