<?php
	$senderEmail = $_POST['senderEmail'];
	$senderName = $_POST['senderName'];
	$message = $_POST['message'];

	$finalMessage = "Sender: ".$senderName."\nEmail: ".$senderEmail."\n\n".$message;

	if (mail("dougalg@gmail.com", "Email From: ".$senderName, $finalMessage)) {
		echo "success";
	} else {
		echo "failure";
	}
?>