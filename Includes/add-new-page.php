<?php

    //$server_name = "localhost";
    $server_name = "localhost";
    $user_name = "asafjona_legend";
    $password = "123456";
    $database_name = "asafjona_our_legends";

    //create connection
    $conn = new mysqli($server_name,$user_name,$password,$database_name);
    mysqli_set_charset($conn, "utf8");

    //check the connection
    if ($conn->connect_error){
        die("Connection failed: ".$conn->connect_error);
    }

    //get info from html
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $birthDate = $_POST["birthDate"];
    $deathDate = $_POST["deathDate"];
    $summary = $_POST["summary"];
    $burialPlace = $_POST["burialPlace"];
    $burial1 = $_FILES["burial1"]["name"];
    $burial2 = $_FILES["burial2"]["name"];
    $burial3 = $_FILES["burial3"]["name"];
    $lifeStory = $_POST["lifeStory"];
    $photo = $_FILES["photo"]["name"];
    
    $sql = "INSERT INTO legends (firstName, lastName, birthDate, deathDate, summary,  burialPlace, burial1, burial2, burial3, lifeStory, photo ) 
            VALUES ('$firstName', '$lastName', '$birthDate', '$deathDate', '$summary', '$burialPlace', '$burial1', '$burial2', '$burial3', '$lifeStory', '$photo')";
    if ($conn->query($sql)==FALSE){
        echo "Can not add new legend. Error is: ".$conn->error;
        exit();
    }
    
    // Close the database connection
    $conn->close();

    header('Location: personal-memorial-page.html');
    exit();

?>
