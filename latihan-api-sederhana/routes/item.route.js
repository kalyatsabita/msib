const express = require('express');
const router = express.Router();

let items = [
  { nama: 'Item 1', harga: 10, satuan: 'pcs' },
  { nama: 'Item 2', harga: 20, satuan: 'kg' },
  { nama: 'Item 3', harga: 30, satuan: 'pcs' }
];

router.post('/', (req, res) => {
  const newItem = req.body
  items.push(newItem)
  return res.status(201).json(newItem)
});

router.get('/', (req, res) => {
  return res.status(200).json(items)
});

router.get('/:index', (req, res) => {
    const index = req.params.index
    const dataDetail = items[index]
    
    if (!dataDetail) {
        res.status(400).send('Data tidak ditemukan')
    }

    res.status(200).json(dataDetail)
});

router.put('/:index', (req, res) => {
    const index = req.params.index
    const newItem = req.body
    const checkData = items[index]
    
    if (!checkData) {
        res.status(400).send('Data tidak ditemukan')
    }

    items[index] = newItem
    res.status(201).json(items)
});

router.delete('/:index', (req, res) => {
    const index = req.params.index
    if (index >= 0 && index < items.length) {
      const deletedItem = items.splice(index, 1)
      return res.status(200).json(deletedItem[0])
    } else {
      return res.status(404).json({ error: 'Item not found' })
    }
  });

router.post('/:index/kalkulasi', (req, res) => {
  const index = req.params.index
  const jumlah = req.body.jumlah

  if (index >= 0 && index < items.length) {
    const item = items[index]
    const total = item.harga * jumlah
    return res.status(200).json({ nama: item.nama, hargaSatuan: item.harga, satuan: item.satuan, jumlah: jumlah, total: total })
  } else {
    return res.status(404).json({ error: 'Item not found' });
  }
});

module.exports = router