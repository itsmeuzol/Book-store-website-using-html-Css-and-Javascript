
        function validateform() {
            var fname= document.getElementById("fname").value;
            var lname=document.getElementById("lname").value;
            var Email= document.getElementById("email").value;
            var phone= document.getElementById("phone").value;
            if (fname=="" || lname=="" || Email=="" || phone=="") {
                window.alert("Please fill out the form.")
                
            } else {
                window.alert("Successful!")
            }
        }