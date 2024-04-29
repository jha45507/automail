const cron = require('node-cron');
const axios = require('axios');
let global = [{}];
cron.schedule('*/30 * * * * *', async () => {
    let arr = ["Timestamp", "Name", "Email", "Description", "Contact"];
    let url = 'https://script.google.com/macros/s/AKfycbyuFXkKVrzep-DN2TDnAlNHOmiWczfyVFc2HMRbIlgus8SU0ls_6wvPse65CzQaMkUCuA/exec'
    try {
        const response = await axios.get(url);
        const result = response.data.content;
        let formateData = []
        result.unshift(arr)
        for (let i = 1; i < result.length; i++) {
            let obj = {};
            let currentRow = result[i];
            for (let j = 0; j < currentRow.length; j++) {
                obj[result[0][j]] = currentRow[j];
            }
            formateData.push(obj);
        }
        for (let k in formateData) {
            const postData = formateData[k];
            let userEmail = { Email: postData.Email }
            let haveMain = global.filter((i) => i.Email == postData.Email)
            if (haveMain.length == 0 || haveMain[0].Email !== postData.Email) {
                await axios.post("http://localhost:3000/api/mail/", postData).then((response) => {
                    console.log("qr response", JSON.stringify(response));
                    return response;
                }).catch((error) => { console.log("error:", error.response); });
                global.push(userEmail)
            }
        }
    } catch (error) {
        console.error(error);
    }
})
