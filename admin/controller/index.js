
import { renderListPhone, showDataForm, getDataForm } from './controller.js';
import { validateForm, kiemTraRong, checkPrice } from './validate.js';

const BASE_URL = "https://66c740b4732bf1b79fa5e896.mockapi.io/phone"

// gọi api để lấy danh sách sản phẩm
let fetchProduct = () => {
  axios({
    url: BASE_URL,
    method: "GET",
  }).then((res) => {
    renderListPhone(res.data)
  })
    .catch((err) => {
      console.log("🚀 ~ err:", err);
    });
}
fetchProduct()


// xoá sản phẩm
window.deletePhone = (id) => {
  axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  }).then((res) => {
    fetchProduct();
  })
    .catch((err) => {
      console.log("🚀 ~ err:", err);
    });
}

// edit sản phẩm
window.editPhone = (id) => {
  axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  }).then((res) => {
    $("#addPhoneModal").modal("show")
    showDataForm(res.data)
    document.getElementById("phoneID").disabled = true
  })
    .catch((err) => {
      console.log("🚀 ~ err:", err);
    });
}

// update sản phẩm 
window.updatePhone = () => {
  let data = getDataForm()
  axios({
    url: `${BASE_URL}/${data.id}`,
    method: "PUT",
    data: data,
  }).then((res) => {

    $("#addPhoneModal").modal("hide")
    fetchProduct()
  })
    .catch((err) => {
      console.log("🚀 ~ err:", err);
    });
}

window.resetForm = () => {
  document.getElementById("addPhoneForm").reset();
  document.getElementById("phoneID").disabled = false
  let spanList = document.querySelectorAll("span")
  for (let i = 1; i < spanList.length; i++) {
    spanList[i].innerHTML = ""
  }
}

// thêm sản phẩm
window.addPhone = () => {
  if (!validateForm()) {
    // Nếu form không hợp lệ, dừng quá trình và không gửi dữ liệu
    return;
  }
  let data = getDataForm();
  axios({
    url: BASE_URL,
    method: "POST",
    data: data,
  }).then((res) => {

    fetchProduct()
    $("#addPhoneModal").modal("hide")
  })
    .catch((err) => {
      console.log("🚀 ~ err:", err);
    });
}

// tìm sản phẩm 
window.searchPhone = () => {
  axios({
    url: BASE_URL,
    method: "GET",
  }).then((res) => {
    let phoneList = res.data;
    let input = document.getElementById("searchInput").value;
    let newPhoneList = []
    for (let i = 0; i < phoneList.length; i++) {
      if (phoneList[i].name.includes(input)) {
        newPhoneList.push(phoneList[i])
      }
    }
    renderListPhone(newPhoneList)
  })
    .catch((err) => {
      console.log("🚀 ~ err:", err);
    });
}


// sắp xếp sản phẩm

window.sortUp = () => {
  axios({
    url: BASE_URL,
    method: "GET",
  }).then(function (res) {
        let phoneList = res.data
        phoneList.sort((a,b) => {
          return Number(a.price) - Number(b.price);
        })
        renderListPhone(phoneList)
      })
      .catch(function (err) {
        console.log("🚀 ~ err:", err);
      });
}

window.sortDown = () => {
  axios({
    url: BASE_URL,
    method: "GET",
  }).then(function (res) {
        let phoneList = res.data
        phoneList.sort((a,b) => {
          return Number(b.price) - Number(a.price);
        })
        renderListPhone(phoneList)
      })
      .catch(function (err) {
        console.log("🚀 ~ err:", err);
      });
}


