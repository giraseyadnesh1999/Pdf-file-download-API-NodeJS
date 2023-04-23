import React, { useState, useEffect } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=2`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortColumn(event.target.value);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              Name
              <select onChange={handleSortChange}>
                <option value="name">Name</option>
                <option value="email">Email</option>
              </select>
            </th>
          </tr>
        </thead>
        {data}
      </table>
    </>
  );
};
export default Table