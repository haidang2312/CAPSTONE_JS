
function show() {
    var x = document.getElementById('custom');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        hienthicart(cart);
    } else {
        x.style.display = 'none';
    }
}
function hienthicart(cart) {
    var contentHTML = "";
    // tạo ds chuỗi tr chứa thông tin object sv
    for (var i = 0; i < cart.length; i++) {
        var sp = cart[i];
        var trString = ` <tr>
                                  <td>${sp.id}</td>
                                  <td>${sp.name}</td>
                                  <td>${sp.price}</td>
                                  <td><img src="${sp.img}"></td>
                                  <td>${sp.quantity}</td>
                                  <td>
                                      <button onclick=xoaSv('${sp.ma}') class='btn btn-dark'>Tăng</button>
                                      <button onclick=xoaSv('${sp.ma}') class='btn btn-dark'>Giảm</button>
                                      <button onclick=suaSv('${sp.ma}') class='btn btn-btn-danger'>Sửa</button>
                                  </td>
                       </tr>`;
        contentHTML += trString;
    }
    document.getElementById("products-cart").innerHTML = contentHTML;
}
hienthicart(cart)
