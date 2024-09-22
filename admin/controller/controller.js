export let renderListPhone = (phoneArr) => {
    let contentHTML = ""
    phoneArr.forEach((item) => {
        let { id, name, price, screen, backCamera, frontCamera, img, desc, type } = item;
        contentHTML += `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${price}</td>
                <td><img src="${img}" alt="" /></td>
                <td>${desc}</td>
                <td>
                    <button class="btn btn-danger" onclick = "deletePhone(${id})">Xoá</button>
                    <button class="btn btn-primary" onclick = "editPhone(${id})">Sửa</button>
                </td>
            </tr>
        `
    })
    document.getElementById("phoneList").innerHTML = contentHTML
}

export let showDataForm = (data) => {
    let { id, name, price, screen, backCamera, frontCamera, img, desc, type } = data;
    document.getElementById("phoneID").value = id;
    document.getElementById("phoneName").value = name;
    document.getElementById("phonePrice").value = price;
    document.getElementById("phonePhoto").value = img;
    document.getElementById("phoneDescription").value = desc;
}


export let getDataForm = () => {
    let id = document.getElementById("phoneID").value;
    let name = document.getElementById("phoneName").value;
    let price = document.getElementById("phonePrice").value;
    let img = document.getElementById("phonePhoto").value;
    let desc = document.getElementById("phoneDescription").value;
    return {
        id,
        name,
        price,
        img,
        desc
    }
}
