function login(codehtml) {
    let name = localStorage.getItem('name');
    // alert(name)
    if (name == "aris") {
        document.getElementById("editForm").innerHTML = codehtml;
        document.getElementById("loginAdm").innerHTML = `
        <span>Hai' <b>Aris</b></span>
        `;
    } else {
        let autConf = prompt("ketik aris untuk login ke admin jika tidak ketik ok")
        localStorage.setItem('name', `${autConf}`);
        if (autConf == "") {
            alert("selamat datang di my portofolio")
        } else {
            window.location.reload();
        }
    }
}
let codeHtml = `
<a class="btn-link" href="#update">
<button type="button" class="btn-knt">Edit Profil</button>
</a>
<div class="update-form" id="update">
<form action="" method="post">
    <ul class="form-input-content">
        <li>
            <label for="">Availability</label>
            <br>
            <input type="text">
        </li>
        <li>
            <label for="">Age</label>
            <br>
            <input type="number">
        </li>
        <li>
            <label for="">Location</label>
            <br>
            <input type="text">
        </li>
        <li>
            <label for="">Experience</label>
            <br>
            <input type="number">
        </li>
        <li>
            <label for="">Email</label>
            <br>
            <input type="text">
        </li>
    </ul>
    <button type="submit" class="btn-knt">Update</button>
    <a class="btn-link" href="#"><button type="button" class="btn-res">Exit</button></a>
</form>
</div>
`;
login(codeHtml)