const Inbox = () => {
  const messages = [
    {
      id: 1,
      name: "JamJam Hanan",
      email: "test@email.com",
      message: "Lorem ipsum...",
    },
    {
      id: 2,
      name: "Kanar El Hassan",
      email: "test@email.com",
      message: "Lorem ipsum...",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="pixel-font text-3xl">Inbox</h1>
        <div className="space-x-4">
          <button className="retro-button bg-primary-300">Latest</button>
          <button className="retro-button">Oldest</button>
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter name, email, or phone number"
          className="retro-input w-full max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {messages.map((msg) => (
          <div key={msg.id} className="retro-border p-4">
            <h3 className="font-bold">{msg.name}</h3>
            <p className="text-sm text-primary-600">{msg.email}</p>
            <p className="mt-2">{msg.message}</p>
            <button className="retro-button mt-2">delete</button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p>150 Visitors</p>
        <p>120 Messages</p>
        <button className="retro-button mt-4">logout</button>
      </div>
    </div>
  );
};

export default Inbox;
