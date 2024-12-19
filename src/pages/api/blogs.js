// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from "fs";

export default function handler(req, res) {
  // console.log(req);
  fs.readFile(
    "/Users/manishgupta/Documents/NEXTJS/4-Project1/huntingcoder/src/blogData/how-to-learn-flask.json",
    "utf8",
    (err, data) => {
      // console.log(data);

      res.status(200).json(JSON.parse(data));
    }
  );
}
