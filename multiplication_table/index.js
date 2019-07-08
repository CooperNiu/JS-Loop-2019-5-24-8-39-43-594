<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>九九乘法表</title>
    <script>
    document.write("<table>");
document.write("<tbody>");
for (let i = 1; i <= 9; i++) {
  document.write("<tr>");
  for (let j = 1; j <= i; j++) {
    document.write("<td>" + i + "*" + j + "=" + i * j + "</td>");
  }
  document.write("</tr>");
}
document.write("</tbody>");
document.write("</table>");
    </script>
  </head>
  <body></body>
</html>
