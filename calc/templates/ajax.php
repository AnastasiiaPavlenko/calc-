<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<title></title>
		<meta http-equiv='Content-Type' content='text/html;charset=UTF-8'>
	</head>
	<body>
		<form action="calc.php" method="POST" 		class='b-calc' id='calc1'>
			<input type='text' name='a' 	class='b-calc__a' value='<?= $a?>'> + 
			<input type='text' name='b' 	class='b-calc__b' value='<?= $b?>'>
			<input type='submit' value='=' 	class='b-calc__count'>
			<span 							class='b-calc__result'><?= $result?></span>
		</form>
	
	<script src="../scripts/jquery-3.3.1.min.js"></script>
	<script src="../scripts/component.js"></script>
	<script src="../scripts/calcSum.js"></script>
	<script>
		let as1 = new AjaxSample("#calc1");
	</script>
	</body>
</html>