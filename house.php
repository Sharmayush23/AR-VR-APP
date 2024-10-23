<?php
// Database connection details
$host = "localhost";
$db_username = "vrocusmafia";
$db_password = "@idil790883#D";
$db_name = "vrocuscustomer";

// Establishing database connection
$conn = new mysqli($host, $db_username, $db_password, $db_name);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieving form data
$image = $_POST['file'];
$email = $_POST['email'];
// $password = $_POST['password'];
// $confirm_password = $_POST['confirm_password'];

// Check if passwords match
// if ($password !== $confirm_password) {
//     echo $username;
//     echo $email;
//     die("Passwords do not match!");
// }

// Inserting data into the database
$sql = "INSERT INTO uploads ( email, image) VALUES ('$email', '$image')";


if ($conn->query($sql) === true) {
    echo "Registration successful!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Closing the database connection
$conn->close();
?>