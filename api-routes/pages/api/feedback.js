import { json } from "body-parser";
import fs from "fs";
import path from "path";
function handler(req, res) {
  if (res.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.text;
    const newFeedback = {
      id: new Date().toISOString,
      email: email,
      text: feedback,
    };
    //store that in a databse or in a file
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({
      message: "success",
      feedback: newFeedback,
    });
  }else{
    res.status(404).json({
        status: "This works",
      });
  }
}
export default handler;
