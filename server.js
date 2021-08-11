var server = function(error, port) {
  if (error) {
    alert("Something went wrong :L")
    console.log("Go to your settings to fix Errors")
  } else {
    alert("Server Joined!")
  }
  
  port = 7000

  console.log("server is listening on port " + port)
}

server()
