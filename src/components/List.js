import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import User from "./User";
import "./list.css";
import { motion } from "framer-motion";

function List() {
  const searchFields = ["Company", "Username", "Name"];

  const [usersData, setUsersData] = useState([]);
  const [targetFiled, setTargetFiled] = useState(searchFields[0]);
  const [searchContent, setSearchContent] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const targetSearch = (filed) => {
    if (!searchContent) {
      setFilteredData(usersData);
    } else {
      if (filed === searchFields[0]) {
        const temp = usersData.filter((item) => {
          return item.company.name
            .toLowerCase()
            .includes(searchContent.toLowerCase());
        });
        setFilteredData(temp);
      } else if (filed === searchFields[1]) {
        const temp = usersData.filter((item) => {
          return item.username
            .toLowerCase()
            .includes(searchContent.toLowerCase());
        });
        setFilteredData(temp);
      } else if (filed === searchFields[2]) {
        const temp = usersData.filter((item) => {
          return item.name.toLowerCase().includes(searchContent.toLowerCase());
        });
        setFilteredData(temp);
      }
    }
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      // console.log(data);
      setUsersData(data);
      setFilteredData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <SearchBar
        setFilteredData={setFilteredData}
        usersData={usersData}
        searchFields={searchFields}
        targetFiled={targetFiled}
        setTargetFiled={setTargetFiled}
        setSearchContent={setSearchContent}
        targetSearch={targetSearch}
      />
      <motion.ul
        className="listContainer "
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {filteredData.map((user) => (
          <motion.li
            key={user.id}
            variants={item}
            style={{ listStyleType: "none" }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <User userInfo={user} />
          </motion.li>
        ))}
      </motion.ul>

      <div className="listContainer"></div>
    </div>
  );
}

export default List;
