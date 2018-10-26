<?php
$host_name = 'db759114666.hosting-data.io';
$database = 'db759114666';
$user_name = 'dbo759114666';
$password = 'FT89ko?!';
$connect = mysqli_connect($host_name, $user_name, $password, $database);

if (mysqli_connect_errno()) {
    die('<p>Verbindung zum MySQL Server fehlgeschlagen: '.mysqli_connect_error().'</p>');
} else {
    echo '<p>Verbindung zum MySQL Server erfolgreich aufgebaut.</p >';
}
?>