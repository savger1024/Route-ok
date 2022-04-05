const getRequest = (req, res) => {
  const adatok = {
    nev: "Jane Doe",
  };
  res.render(adatok);
};
const postRequest = (req, res) => {
  console.log(req.body);
  res.send(req.body);
};

//postreq

// nem csak egyet, hanem többet (dekonstrukció? rekonstr.?)
module.exports = { getRequest, postRequest };
