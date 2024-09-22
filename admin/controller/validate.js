export let  kiemTraRong = (id, idErr) => {
    let value = document.getElementById(id).value.trim()
    let thongBao = document.getElementById(idErr)
    if (!value) {
        thongBao.innerHTML = "Mục này không được để trống!"
        return false
    } else {
        thongBao.innerHTML = ""
        return true
    }
}
export let checkPrice = () => { 
    let price = document.getElementById("phonePrice").value
    if (price < 0) {
        document.getElementById("priceTB").innerHTML = "Price phải là số dương"
        return false
    } else {
        document.getElementById("priceTB").innerHTML = ""
        return true
    }
 }
export let validateForm = () => {
    let isValid = true;
    if (!kiemTraRong("phoneID", "idTB")) isValid = false;
    if (!kiemTraRong("phoneName", "nameTB")) isValid = false;
    if (!(kiemTraRong("phonePrice", "priceTB") && checkPrice())) isValid = false;
    if (!kiemTraRong("phonePhoto", "imgTB")) isValid = false;
    if (!kiemTraRong("phoneDescription", "descTB")) isValid = false;
    return isValid;
}
