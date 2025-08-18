<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
     <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<div>
	<form action="register" method="post">
       <div>
        Username: <input type="text" name="username" />
        </div>
        <div>
        Email: <input type="email" name="userEmail" />
        </div>
        <div>
        Phone: <input type="text" name="userPhone" />
        </div>
        <input type="submit" value="Submit" />
    </form>
</div>

</body>
</html>