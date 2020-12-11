rs.initiate(
  {
    _id: "mongo-rs",
    members: [
      { _id : 0, host : "mongo-rs-01:50001" },
      { _id : 1, host : "mongo-rs-02:50002" },
      { _id : 2, host : "mongo-rs-03:50003" }
    ]
  }
);
