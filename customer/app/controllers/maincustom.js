const BASE_URL = "https://66e050722fb67ac16f292e00.mockapi.io/product";

let fetchData = async () => {
    let res = await axios({
        url: BASE_URL,
        method: "GET",
    })
        .then(function (res) {

            console.log("🚀 ~ res:", res);
            renderListData(res.data)
        })
        .catch(function (err) {

            console.log("err:", err);
        });
    // convert array object trở thành array food

};
fetchData();
let iphone = async () => {
    let res = await axios({
        url: BASE_URL,
        method: "GET",
    })
        .then(function (res) {

            console.log("🚀 ~ res:", res);
            iphonelist(res.data);
        })
        .catch(function (err) {

            console.log("err:", err);
        });
}
let samsung = async () => {
    let res = await axios({
        url: BASE_URL,
        method: "GET",
    })
        .then(function (res) {

            console.log("🚀 ~ res:", res);
            samsunglist(res.data);
        })
        .catch(function (err) {

            console.log("err:", err);
        });
}
