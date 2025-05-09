const RandomList = ({ listItems }) => {
  return (
    <div>
      <h1>Random List:</h1>

      <div>
        <ul>
          {listItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RandomList;
