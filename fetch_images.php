<?php
// Connect to your database
$servername = "localhost";
$username = "vrocusmafia";
$password = "idil@790883#D";
$dbname = "vrocuscustomer";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to fetch image data
$sql = "SELECT * FROM images_table WHERE id = 1"; // Assuming the image you want to display has an ID of 1
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    // Display the image
    echo '<img src="data:image/jpeg;base64,'.base64_encode($row['image_path']).'" />';
} else {
    echo "Image not found";
}

$conn->close();

?>
