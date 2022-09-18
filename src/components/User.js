function User({ userInfo }) {
  return (
    <div className="card" style={{ width: "22rem" }}>
      <div className="card-body">
        <a href={"https://" + userInfo.website}>
          <h5 className="card-title">{userInfo.company.name}</h5>
          <p
            className="card-text"
            style={{
              borderBottom: "1px solid rgba(70, 70, 70, 0.5)",
              paddingBottom: "1em",
            }}
          >
            {userInfo.company.bs}
          </p>
          <p className="card-text">{userInfo.company.catchPhrase}</p>
        </a>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item list-group-item-primary">
          <div className="list-group-item-name ">Address</div>
          <div>{`${userInfo.address.suite} ${userInfo.address.street} ST, ${userInfo.address.city} ${userInfo.address.zipcode}`}</div>
        </li>
        <li className="list-group-item ">
          <div className="list-group-item-name">Username</div>
          <div>{userInfo.username}</div>
        </li>
        <li className="list-group-item list-group-item-primary">
          <div className="list-group-item-name">Name</div>
          <div>{userInfo.name}</div>
        </li>
        <li className="list-group-item ">
          <div className="list-group-item-name">Phone</div>
          <div>{userInfo.phone}</div>
        </li>

        <li className="list-group-item list-group-item-primary">
          <div className="list-group-item-name">Email</div>
          <div
            onClick={() => {
              window.location = `mailto:${userInfo.email}`;
            }}
            onMouseEnter={(e) => {
              e.target.style = "cursor: pointer; text-decoration: underline";
            }}
            onMouseLeave={(e) => {
              e.target.style = " text-decoration: none";
            }}
          >
            {userInfo.email}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default User;
