const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="pixel-font text-4xl mb-4">
          kanar
          <br />
          abdelghani
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
      <div className="flex justify-center">
        <div className="retro-border p-4">
          <img
            src="/profile-pixel.png"
            alt="Kanar Abdelghani"
            className="w-64 h-64 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
