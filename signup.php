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
$name = $_POST['name'];
$roll = $_POST['roll'];
$branch = $_POST['branch'];
$date = $_POST['date'];
$subject = $_POST['subject'];
$lecture = $_POST['lecture'];
$teachername = $_POST['teachername'];
$day = $_POST['day'];
$specialoccasion = $_POST['specialoccasion'];

// Inserting data into the database
$sql = "INSERT INTO attendance (name, roll, branch, date, subject, lecture, teachername, day, specialoccasion) 
        VALUES ('$name', '$roll', '$branch', '$date', '$subject', '$lecture', '$teachername', '$day', '$specialoccasion')";

if ($conn->query($sql) === true) {
    echo "Data inserted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Closing the database connection
$conn->close();
?>
