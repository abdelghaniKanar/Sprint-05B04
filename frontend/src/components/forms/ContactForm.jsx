import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gsm: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // TODO: Connect to API
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="retro-border p-6 space-y-4">
      <Input
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        name="gsm"
        placeholder="gsm"
        value={formData.gsm}
        onChange={handleChange}
      />
      <Input
        name="email"
        type="email"
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Enter message"
        rows="6"
        className="retro-input w-full resize-none"
        value={formData.message}
        onChange={handleChange}
      />
      <Button type="submit">Send</Button>
    </form>
  );
};

export default ContactForm;
