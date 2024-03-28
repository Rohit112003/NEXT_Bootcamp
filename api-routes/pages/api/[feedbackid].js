import  {buildFilePath, extractFeddback} from  './feedback'
function handler (rea,res){
    if(req.method==='GET'){

        const feedbackId = req.query.feedbackid;
        const filePath = buildFilePath();
        const feedbackData = extractFeddback(filePath);
        const selectedFeedback = feedbackData.find(feedback => feedback.id === feedbackId);
     
        res.staus(200).json({feedBack: selectedFeedback})
    }else{
        res.staus(200).json({message: "this dont support get request"})
    }


}
export default handler;