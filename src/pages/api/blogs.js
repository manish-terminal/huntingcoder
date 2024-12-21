// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from "fs";
import path from "path";
//collect all the files from blog data directory
//iterate through them and display them

//all console.log statements can be shown in the terminal where the server is running not on browser console

export default function handler(req, res) {
  const blogDataPath = path.join(__dirname, "../../blogData");
  console.log(blogDataPath);

  fs.readdir(/Users/manishgupta/Documents/NEXTJS/4-Project1/huntingcoder/src/blogData, (err, data) => {
    console.log(data);
    res.status(200).json({ success: "true" });
  });
}
