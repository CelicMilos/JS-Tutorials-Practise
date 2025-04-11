//URL i querystring moduli-core Node moduli.Dobri kad se ima posla sa dosta url adresama
//i vadjenje podataka iz njih.

const url = require("url");
const querystring = require("querystring");

//url.parse()
const myUrl = url.parse("https://example.com/listing?id=1000&premium=true");
console.log(myUrl);

//url.format()

const myUrl2 = url.format({
  protocol: "https",
  host: "www.example.com",
  pathname: "listing",
  query: {
    id: 1100,
    premium: true,
  },
});
console.log(myUrl2);

//Query string

const myQs = "year=2025&month=april&day=11";
const q = querystring.parse(myQs);
console.log(q);
console.log(q.month);

// querystring.stringify

const myQs2 = querystring.stringify({
  year: 2025,
  month: "April",
  day: 11,
});
console.log(myQs2);
