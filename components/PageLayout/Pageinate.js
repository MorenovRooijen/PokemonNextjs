const Pageinate = ({
  current_page,
  total_pokemon,
  previous_function,
  next_function,
  page_one,
  page_last,
}) => {
  const last_page = Math.ceil(total_pokemon / 20);

  return (
    <>
      <div className="custom_spinner" animation="border" role="status">
        <button onClick={page_one}>Eerste pagina</button>
        <button onClick={previous_function}>Terug</button>
        {current_page > 1 && (
          <>
            <span className="page_number">{parseInt(current_page) - 1}</span>
          </>
        )}

        {current_page > 0 && (
          <>
            <span className="page_number">{parseInt(current_page)}</span>
          </>
        )}

        <span className="page_number current_number">
          {parseInt(current_page) + 1}
        </span>

        {current_page + 1 < last_page && (
          <>
            <span className="page_number">{parseInt(current_page) + 2}</span>
          </>
        )}

        {current_page + 2 < last_page && (
          <>
            <span className="page_number">{parseInt(current_page) + 3}</span>
          </>
        )}
        <button onClick={next_function}>Verder</button>
        <button
          onClick={() => {
            page_last(last_page);
          }}
        >
          Laatste pagina
        </button>
      </div>
      <style jsx>{`
        .page_number {
          margin: auto 3px;
          &.current_number {
            font-weight: bold;
          }
        }
      `}</style>
    </>
  );
};
export default Pageinate;
