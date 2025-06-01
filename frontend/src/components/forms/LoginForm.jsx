import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useAuth } from "../../hooks/useAuth";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="username"
        placeholder="user name"
        value={formData.username}
        onChange={handleChange}
      />
      <Input
        name="password"
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
      />
      <Button type="submit">login</Button>
    </form>
  );
};

export default LoginForm;
