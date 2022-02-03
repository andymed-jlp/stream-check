const axios = require("axios");

const produce = async () => {
  const result = await axios.get(
    "https://redacted.com/sparql/stream?commitNum=2672"
  );

  console.log(result);
};

produce();
