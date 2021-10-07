<?php
// Panggil koneksi database
include "koneksi.php";

$tampil = mysqli_query($koneksi, "SELECT * FROM kalender order by id");

$dataArr = array();
while($data = mysqli_fetch_array($tampil)) {

    $dataArr[] = array(
        'groupId' => $data['id'],
        'title' => $data['judul_kegiatan'],
        'start' => $data['awal_kegiatan'],
        'end' => $data['akhir_kegiatan'],
    );

}

echo json_encode($dataArr);