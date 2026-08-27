function FilterDropdown({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="All">All Genres</option>
      <option value="Action">Action</option>
      <option value="Adventure">Adventure</option>
      <option value="RPG">RPG</option>
      <option value="Strategy">Strategy</option>
      <option value="Sports">Sports</option>
    </select>
  );
}

export default FilterDropdown;