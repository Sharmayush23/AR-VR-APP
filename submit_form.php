<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve data from the form
    $name = $_POST["name"];
    $email = $_POST["email"];
    $contactNumber = $_POST["contactNumber"];
    $propertyType = $_POST["propertyType"];
    $wallColor = $_POST["wallColor"];
    $budget = $_POST["budget"];
    $bedroomsBathrooms = $_POST["bedroomsBathrooms"];
    $squareFootage = $_POST["squareFootage"];
    $specialAmenities = $_POST["specialAmenities"];
    $floorPlan = $_POST["floorPlan"];
    $additionalInfo = $_POST["additionalInfo"];

    // Handle file upload
    $uploadDir = "uploads/"; // Create a directory to store uploaded files
    $uploadFile = $uploadDir . basename($_FILES["file"]["name"]);

    if (move_uploaded_file($_FILES["file"]["tmp_name"], $uploadFile)) {
        // File uploaded successfully
        // Insert data into the database
        $servername = "localhost";
        $username = "vrocusmafia";
        $password = "@idil790883#D";
        $dbname = "vrocuscustomer";
        
        // $host = "localhost";
        // $db_username = "vrocusmafia";
        // $db_password = "@idil790883#D";
        // $db_name = "vrocuscustomer";


        $conn = new mysqli($servername, $username, $password, $dbname);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "INSERT INTO propertydetails (name, email, contactNumber, propertyType, wallColor, budget, bedroomsBathrooms, squareFootage, specialAmenities, floorPlan, additionalInfo, file_path)
                VALUES ('$name', '$email', '$contactNumber', '$propertyType', '$wallColor', $budget, '$bedroomsBathrooms', '$squareFootage', '$specialAmenities', '$floorPlan', '$additionalInfo', '$uploadFile')";

        if ($conn->query($sql) === TRUE) {
            echo "Form data and file uploaded successfully.";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn->close();
    } else {
        echo "File upload failed.";
    }
} else {
    // Handle the case when the form is not submitted as a POST request
    echo "Form not submitted.";
}
?>
