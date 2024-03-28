import { json } from "body-parser";
import fs from "fs";
import path from "path";

export function buildFilePath() {
  return path.join(process.cwd(), "data", "feedback.json");
}
export function extractFeddback(filePath) {
    if (!filePath) {
        throw new Error("File path is undefined");
      }
    
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}
function handler(req, res) {
  if (res.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.text;
    const newFeedback = {
      id: new Date().toISOString,
      email: email,
      text: feedback,
    };
    const filePath = buildFilePath();

    const data = extractFeddback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({
      message: "success",
      feedback: newFeedback,
    });
  } else {
    const filePath = buildFilePath();
    const data = extractFeddback(filePath);
    res.status(404).json({
        //now , we hhave to keep in mind that we are sending back will be an 
        //object with  a feedback property which holds the actual ata parsed from the 
        //feedback json file
      feedback:data,
    });
  }
}

export default handler;
