import Contact from "../models/Contact.js";
import { sendEmail } from "../utils/email.js";

export const submitContact = async (req, res) => {
  try {
    const { name, email, gsm, message } = req.body;

    // Save to database
    const contact = new Contact({ name, email, gsm, message });
    await contact.save();

    // Send email notification
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nGSM: ${gsm}\nMessage: ${message}`,
    });

    res.status(201).json({
      message: "Message sent successfully",
      contact: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
