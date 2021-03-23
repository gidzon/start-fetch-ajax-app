<?php
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);
$users = ['name' => 'alex', 'age' => 23];
header('Content-type: application/json');
echo json_encode($users);