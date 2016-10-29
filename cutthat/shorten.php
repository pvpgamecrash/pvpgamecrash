< ?php  
  
$con = mysql_connect("localhost","username","password");  
if (!$con)  
  {  
  die('Could not connect: ' . mysql_error());  
  }  
mysql_select_db("DB NAME", $con); //Replace with your MySQL DB Name  
$urlinput=mysql_real_escape_string($_POST['url']);  
$id=rand(10000,99999);  
$shorturl=base_convert($id,20,36);  
$sql = "insert into TABLE NAME values('$id','$urlinput','$shorturl')";  
mysql_query($sql,$con);  
echo "Shortened url is http://cutthat.com/". $shorturl ."";  
mysql_close($con);  
?>  
