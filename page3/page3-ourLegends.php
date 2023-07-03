<?php

    //$server_name = "localhost";
    $server_name = "asafjonathonop.mtacloud.co.il";
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
    $burialPlace = $_POST["burialPlace"];
    $lifeStory = $_POST["lifeStory"];
    $photo = $_POST["photo"];
    
    $sql = "INSERT INTO legends (firstName, lastName, birthDate, deathDate, burialPlace, lifeStory, photo ) 
            VALUES ('$firstName', '$lastName', '$birthDate', '$deathDate', '$burialPlace', '$lifeStory', '$photo')";
    if ($conn->query($sql)==FALSE){
        echo "Can not add new legend. Error is: ".$conn->error;
        exit();
    }
    
    // Close the database connection
    $conn->close();

?>
