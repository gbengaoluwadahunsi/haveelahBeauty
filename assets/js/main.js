/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('#toggle_btn');
  const topnav = document.querySelector('.topnav ul');
//   const icon = document.querySelector('#toggle_btn');

  toggleButton.addEventListener('click', toggleMenu);

  function toggleMenu() {
    topnav.classList.toggle('show-menu');

    // Toggle between the bars and X icon
    if (toggleButton.classList.contains('fa-bars')) {
      toggleButton.classList.remove('fa-bars');
      toggleButton.classList.add('fa-times');
      toggleButton.style.border = '1px solid white';
      toggleButton.style.padding = '2px';
    } else {
      toggleButton.classList.remove('fa-times');
      toggleButton.classList.add('fa-bars');
      toggleButton.style.border = 'none';
      toggleButton.style.padding = '0';
    }
  }

  document.addEventListener('click', function(event) {
    let targetElement = event.target;

    if (targetElement !== toggleButton && !topnav.contains(targetElement)) {
      topnav.classList.remove('show-menu');
      toggleButton.classList.remove('fa-times');
      toggleButton.classList.add('fa-bars');
      toggleButton.style.border = 'none';
      toggleButton.style.padding = '0';
    }
  });
});










  const submitButton = document.querySelector('input[type="submit"]');

  submitButton.addEventListener('click',  submitForm)
	 
	  
	  function submitForm(event) {
		event.preventDefault(); // Prevent the default form submission
	   
  
		// Get the values of name, email, and message inputs
		const  name = document.querySelector("input[type='text']").value;
		const  email = document.querySelector("input[type='email']").value;
		const  message = document.querySelector("#message").value;
  
		// Check if any of the fields are empty
		if (name === "" || email === "" || message === "") {
		  // Display an alert if any of the fields are empty
		  alert("Please fill in the required information.");
		} else {
		  // Display a thank you message if all fields are filled
		  const nameInput = document.querySelector('#contact-form input[name="name"]');
			  const firstName = nameInput.value.split(' ')[0];
		  alert(`Thank you for reaching out to us, ${firstName}! We will get back to you as soon as possible.`);
		  // Reset the form
		  document.getElementById("contact-form").reset();
		}
	  }
  