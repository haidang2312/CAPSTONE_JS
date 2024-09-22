
var DSSP = [];
let cart = localStorage.getItem("DSSP") ? JSON.parse(localStorage.getItem("DSSP")) : []

let renderListData = (dataProduct) => {
  let contentHtml = "";
  for (var i = 0; i < dataProduct.length; i++) {
    var sanpham = dataProduct[i];

    // Kiểm tra xem sản phẩm đã có trong DSSP chưa
    if (!DSSP.some(item => item.id === sanpham.id)) {
      DSSP.push({
        id: sanpham.id,
        name: sanpham.name,
        price: sanpham.price,
        img: sanpham.img,
      });
    }
    var trString = `
      <div class='col-6 col-lg-4'>
        <div class='card'>
          <img src='${sanpham.img}' class='card-img-top' alt=''>
          <div class='card-body'>
            <h5 class='card-title'>${sanpham.name}</h5>
            <p class='card-text'>${sanpham.price}</p>
            <button onclick='addToCart(${sanpham.id})' class='btn btn-primary'>Add to cart</button>
          </div>
        </div>
      </div>
    `;
    contentHtml += trString;
  }
  document.getElementById("tblDanhSachSP").innerHTML = contentHtml;
};

console.log(DSSP);
console.log(cart);
let iphonelist = (dataProduct) => {
  let iphoneHtml = "";
  for (var i = 0; i < dataProduct.length; i++) {
    // tạo biến mỗi lần chạy lấy ra một product
    var sanpham = dataProduct[i];
    if (sanpham.type === "iPhone") {
      var trString = `
      <div class='col-6 col-lg-4'>
        <div class='card'>
          <img src='${sanpham.img}' class='card-img-top' alt=''>
          <div class='card-body'>
            <h5 class='card-title'>${sanpham.name}</h5>
            <p class='card-text'>${sanpham.price}</p>
            <button onclick='addToCart(${sanpham.id})' class='btn btn-primary'>Add to cart</button>
          </div>
        </div>
      </div>
    `;
      iphoneHtml += trString;
    }
  }
  document.getElementById("tblDanhSachSP").innerHTML = iphoneHtml;

}
let samsunglist = (dataProduct) => {
  let samsungHtml = "";
  for (var i = 0; i < dataProduct.length; i++) {
    // tạo biến mỗi lần chạy lấy ra một product
    var sanpham = dataProduct[i];
    if (sanpham.type === "Samsung") {
      var trString = `
      <div class='col-6 col-lg-4'>
        <div class='card'>
          <img src='${sanpham.img}' class='card-img-top' alt=''>
          <div class='card-body'>
            <h5 class='card-title'>${sanpham.name}</h5>
            <p class='card-text'>${sanpham.price}</p>
            <button onclick='addToCart(${sanpham.id})' class='btn btn-primary'>Add to cart</button>
          </div>
        </div>
      </div>
    `;
      samsungHtml += trString;
    }
  }

  document.getElementById("tblDanhSachSP").innerHTML = samsungHtml;
}

function addToCart(id) {
  let checkProduct = cart.some(value => value.id * 1 === id);
  if (!checkProduct) {
    let product = DSSP.find(value => value.id * 1 === id);
    console.log("🚀 ~ addToCart ~ product:", product)
    cart.unshift({
      ...product,
      quantity: 1
    });
  } else {
    let product = cart.find(value => value.id * 1 === id);
    let getIndex = cart.findIndex(value => value.id === id);
    cart[getIndex] = {
      ...product,
      quantity: ++product.quantity
    };
  }
  console.log(cart)
  localStorage.setItem('DSSP', JSON.stringify(cart));
  total();
}


function hienthicart() {
  let data = ``;
  cart.map((value, index) => {
    data += `
        <tr>
          <td>${value.name}</td>
          <td>${value.price}</td>
          <td><img width='100' src='${value.img}' alt=''></td>   
          <td>
            <button onclick='tangQuantity(${index})' class='btn btn-secondary'>+</button>
            <span class='mx-2'>${value.quantity}</span>
            <button onclick='giamQuantity(${index}, ${value.quantity})' class='btn btn-secondary'>-</button>
          </td>
          
          <td><button onclick='deleteProductInCart(${index})' class='btn btn-danger'>Delete</button></td>
        </tr>
      `;
  });
  document.getElementById('products-cart').innerHTML = data;
}





hienthicart(cart)
function tangQuantity(index) {
  cart[index] = {
    ...cart[index],
    quantity: ++cart[index].quantity
  };
  localStorage.setItem('DSSP', JSON.stringify(cart));
  hienthicart();
}
function giamQuantity(index, quantity) {
  if (quantity > 1) {
    cart[index] = {
      ...cart[index],
      quantity: --cart[index].quantity
    };
    localStorage.setItem('DSSP', JSON.stringify(cart));
    hienthicart();
  } else {
    alert('Quantity min is 1');
  }
}
function deleteProductInCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('DSSP', JSON.stringify(cart));
  hienthicart()
}
function tinhgia() {
  var gia = 0;
  for (var i = 0; i < cart.length; i++) {
    var giahientai = cart[i];
    gia += giahientai.price * giahientai.quantity;
  }

  document.getElementById("moneycantra").innerHTML = `${gia} vnd`;
  cart = [];
  localStorage.setItem('DSSP', JSON.stringify(cart));
}

