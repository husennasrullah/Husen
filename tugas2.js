var today = new Date();
const hasil = document.querySelector('#isiData')
let id = document.querySelector('#id');
let nama = document.querySelector('#nama');
let alamat = document.querySelector('#alamat');
let tempat = document.querySelector('#tempat');
let ttl = document.querySelector('#ttl');
let jk = document.getElementsByName("jk");
let agama = document.getElementById("agama");
var a = document.getElementsByName('hobby');
var jkChecked;
//var hobby;
var hobby = [];

let data = [
    { nama: "Alif", tempat: "bekasi", ttl: "1994-04-19", alamat: "bekasi", umur: 23, jk: "L", hobby: "bersepeda", agama: "Islam" },
    { nama: "Afif", tempat: "jakarta", ttl: "1998-04-19", alamat: "jakarta", umur: 23, jk: "L", hobby: "Jogging", agama: "Hindu" },
    { nama: "Agung", tempat: "bekasi", ttl: "1998-04-19", alamat: "bekasi", umur: 23, jk: "L", hobby: "futsal", agama: "Islam" },
    { nama: "Bibah", tempat: "depok", ttl: "1998-04-19", alamat: "depok", umur: 22, jk: "P", hobby: "berenang", agama: "Budha" },
    { nama: "Budi", tempat: "bandung", ttl: "1996-04-19", alamat: "cilacap", umur: 24, jk: "L", hobby: "jogging", agama: "Islam" },
    { nama: "Eric", tempat: "palembang", ttl: "1997-04-19", alamat: "tangerang", umur: 23, jk: "L", hobby: "Berenang", agama: "Katolik" },
    { nama: "Fauzan", tempat: "jakarta", ttl: "1998-04-19", alamat: "jakarta", umur: 22, jk: "L", hobby: "futsal", agama: "Islam" },
    { nama: "Amal", tempat: "palembang", ttl: "1999-04-19", alamat: "palembang", umur: 22, jk: "L", hobby: "Berenang", agama: "Kristen" },
    { nama: "Kriss", tempat: "cirebon", ttl: "1998-04-19", alamat: "cirebon", umur: 23, jk: "L", hobby: "Bersepeda", agama: "Hindu" },
    { nama: "Silo", tempat: "bogor", ttl: "1998-04-19", alamat: "Bogor", umur: 23, jk: "L", hobby: "jogging", agama: "Kristen" }
];

showData();

function handleSubmit() {
    var isValid = true;
    console.log(ttl.value);

    if (nama.value.length == 0 && alamat.value.length == 0 && ttl.value.length == 0 && tempat.value.length == 0
        && ttl.value.length == 0) {
        isValid = false
    }

    jk.forEach(function (item, index) {
        if (item.checked)
            jkChecked = item.value;
    });
    if (jkChecked == undefined)
        isValid = false;


    if (isValid)
        inputPerson(id.value);
    else
        alert("Data harus terisi!")

}

function inputPerson(id) {
    if (id == undefined || id == "")
        addData();
    else
        editdata(id);
}

function validasi() {
    //var newvar = 0;
    hobby = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i].checked) {
            //newvar = newvar + 1;
            //hobby = a[i].value;
            //hobby = hobby + a[i].value + ", "
            hobby.push(a[i].value);
        }
    }

    // if (newvar>1){
    //     alert("select only one hobby")
    //     return false;
    // }
}

function addData() {
    var birthday = new Date(ttl.value);
    var umur = today.getFullYear() - birthday.getFullYear();

    let data2 = {
        nama: nama.value,
        tempat: tempat.value,
        ttl: ttl.value,
        alamat: alamat.value,
        umur: umur,
        jk: jkChecked,
        hobby: hobby,
        agama: agama.value

    };
    data.push(data2);
    showData();
    resetForm();
}

function editdata(id) {
    var birthday = new Date(ttl.value);
    var umur = today.getFullYear() - birthday.getFullYear();

    console.log(data);

    data[id].nama = nama.value,
        data[id].tempat = tempat.value,
        data[id].ttl = ttl.value,
        data[id].alamat = alamat.value,
        data[id].umur = umur,
        data[id].jk = jkChecked,
        data[id].hobby = hobby,
        data[id].agama = agama.value

    showData();
    resetForm();

}

function showData() {
    hasil.innerHTML = ''
    data.forEach(function (data, index) {
        hasil.innerHTML += `
		<tr>
			<td>${index + 1}</td>
            <td>${data.nama}</td>
            <td>${data.umur} tahun</td>
            <td>${data.alamat}</td>
            <td>${data.jk}</td>
            <td>${data.hobby}</td>
            <td>${data.agama}</td>
            <td>
                <button class="tomboledit" onclick="edit(${index})">Edit</button>
                <button class="tomboldelete" onclick="hapus(${index})">Delete</button>
            </td>
		</tr>
		`
    })
}

function resetForm() {
    id.value = "";
    nama.value = "";
    tempat.value = "";
    ttl.value = "";
    alamat.value = "";
    umur = "";
    jkChecked = "";
    hobby = "";
    agama.value = "";
    jk.forEach(element => {
        element.checked = false;
    });
    a.forEach(element => {
        element.checked = false;
    });
}

function edit(index) {
    var id = document.getElementById('id');
    var nama = document.getElementById('nama');
    var tempat = document.getElementById('tempat');
    var ttl = document.getElementById('ttl');
    var alamat = document.getElementById('alamat');
    var agama = document.getElementById('agama');

    var dataToEdit = data[index];
    //console.log(dataToEdit);

    //fill form with edit data
    id.value = index;
    nama.value = dataToEdit.nama;
    tempat.value = dataToEdit.tempat;
    alamat.value = dataToEdit.alamat;
    agama.value = dataToEdit.agama;
    ttl.value = dataToEdit.ttl;
}

function hapus(index) {
    if (confirm("Apakah Anda yakin Ingin menghapus data")) {
        data.splice(index, 1)
    }
    showData();
}

function searchRow() {
    var input, filter, tbody, tr, td;

    input = document.getElementById('filterRow');
    filter = input.value.toLowerCase();
    tbody = document.getElementById('isiData');
    tr = tbody.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td');
        if (td.length > 0) {
            if (td[0].innerHTML.toLowerCase().indexOf(filter) > -1 ||
                td[1].innerHTML.toLowerCase().indexOf(filter) > -1 ||
                td[2].innerHTML.toLowerCase().indexOf(filter) > -1 ||
                td[3].innerHTML.toLowerCase().indexOf(filter) > -1 ||
                td[4].innerHTML.toLowerCase().indexOf(filter) > -1 ||
                td[5].innerHTML.toLowerCase().indexOf(filter) > -1 ||
                td[6].innerHTML.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

