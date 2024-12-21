import * as fs from "fs";
export default function handler(req, res) {
  console.log(req.query);
  fs.readFile(
    `/Users/manishgupta/Documents/NEXTJS/4-Project1/huntingcoder/src/blogData/${req.query.slug}.json`,
    "utf8",
    (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).json(JSON.parse(data));
      }
    }
  );
}
