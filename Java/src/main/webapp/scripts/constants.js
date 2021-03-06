const routineURL = "/Yoga/api/routine/";
//"http://localhost:8080/Yoga/api/routine/";

const poseURL = "/Yoga/api/pose/";
//"http://localhost:8080/Yoga/api/pose/";


function makeRequest(requestType, url, whatToSend) {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.onload = () => {
            if (req.status === 200) {
                resolve(req);
            } else {
                const reason = new Error("Rejected");
                reject(reason);
            }
        };
        req.open(requestType, url);
        req.send(whatToSend);
    });
}