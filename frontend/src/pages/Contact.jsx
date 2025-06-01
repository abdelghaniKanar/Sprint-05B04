import ContactForm from "../components/forms/ContactForm";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h1 className="pixel-font text-3xl mb-8">
          contact
          <br />
          channel
        </h1>
        <p className="mb-4">
          Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Hic Odit
          Aliquid Adipisci Voluptate Consectetur Quis Optio, Architecto
          Reiciendis. Adipisci Soluta At Sit Abl Sit Esse Nam Dolorum
        </p>
        <p>
          Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Hic Odit
          Aliquid Adipisci Voluptate Consectetur Quis Optio, Architecto.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
