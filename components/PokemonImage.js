const PokemonImage = ({ src, alt }) => {
  return (
    <>
      <img src={src} alt={alt} />
      <style jsx>{`
        img {
          width: 500px;
        }
      `}</style>
    </>
  );
};

export default PokemonImage;
