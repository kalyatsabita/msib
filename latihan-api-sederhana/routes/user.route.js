// memanggil module express
const express = require('express');

// definisi router dengan express
const router = express.Router();

// definisi array/larik (array index dimulai dari nol)
const dataUsers = Array();

// get list user
router.get('/user', (req, res) => {
    // mengembalikan data user
    res.status(200).json(dataUsers);
});

// get untuk detail user
router.get('/user/:index', (req, res) => {
    // mengambil param index
    const index = req.params.index
    // mengambil data dari array sesuai dengan index
    const dataDetail = dataUsers[index]
    
    // kondisi jika data detail kosong
    if (!dataDetail) {
        res.status(400).send('Data tidak ditemukan')
    }

    // mengembalikan data detail user
    res.status(200).json(dataDetail)
});

// post untuk menambahkan data user
router.post('/user', (req, res) => {
    // mengambil data body yang dikirimkan dari klien (postman)
    const body = req.body
    // memasukkan data body ke dalam array
    dataUsers.push(body) // push adalah fungsi dari array untuk menambahkan record/data
    // mengembalikan response ke klien
    res.status(201).json(body)
});

// put untuk mengubah data user
router.put('/user/:index', (req, res) => {
    // mengambil param index
    const index = req.params.index
    // mengambil data body yang dikirimkan
    const body = req.body
    // cek dara di array apakah ada atau tidak
    const checkData = dataUsers[index]
    
    // kondisi jika data tidak ditemukan
    if (!checkData) {
        res.status(400).send('Data tidak ditemukan')
    }

    // update data berdasarkan index
    dataUsers[index] = body
    // mengembalikan response ke klien
    res.status(201).json(body)
});

// patch untuk mengubah data user

// delete untuk menghapus data user
router.delete('/user/:index', (req, res) => {
    // mengambil paramd index
    const index = req.params.index
    // cek data di array apakah ada atau tidak
    const checkData = dataUsers[index]

    // kondisi jika data tidak ditemukan 
    if (!checkData) {
        res.status(400).send('Data tidak ditemukan')
    }

    // hapus data di array berdasarkan index
    // splice fungsi array untuk menghapus data berdasarkan index
    // didalam kurung ada dua parameter, parameter pertama itu diisi `index` dan parameter diisi jumlah data (1)
    dataUsers.splice(index,1)
    // mengembalikan response ke klien setelah sukses menghapus
    res.status(200).send('Success delete data index: '+ index)

});

// ekspor router agar bisa diakses di file lain
module.exports = router