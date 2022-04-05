const getRequest = (req, res) => {
  res.send("Hello ismeretlen! ez get az upload route-on");
};
const postRequest = (req, res) => {
  //   console.log(req.body);
  //const adatok = req.body.adatok;
  //res.send(adatok);
  // adatbázissal összekötés
  res.send("upload route post");
};

//postreq

// nem csak egyet, hanem többet (dekonstrukció? rekonstr.?)
module.exports = { getRequest, postRequest };
