const Filter = (props) => {
  const { value, handleChange } = props;
  return (
    <div>
      filter shown with <input value={value} onChange={handleChange} />
    </div>
  );
};

export default Filter;
