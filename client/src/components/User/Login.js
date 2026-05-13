import { useState, useEffect } from "react";
import { login } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onEmailChange = (e) => {
    setForm({ ...form, email: e.target.value });
  };

  const onPasswordChange = (e) => {
    setForm({ ...form, password: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form.email, form.password));
  };

  useEffect(() => {
    if (user?.name) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmit}>
        <h3>Login</h3>
        <input
          value={form.email}
          onChange={onEmailChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={form.password}
          onChange={onPasswordChange}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;