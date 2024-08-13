var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); 
}

document.addEventListener('DOMContentLoaded', function() {
  // Handle phone vs email button clicks
  const phoneButton = document.querySelector('.btn-box');
  const emailButton = document.querySelector('.btns-box');
  const phoneInputSection = document.querySelector('.section-six');
  const otpSection = document.querySelector('.section-saven');
  const phoneInput = document.querySelector('.phone-no');
  const sendOtpButton = document.querySelector('.otp-btn');

  phoneButton.addEventListener('click', function() {
      phoneInputSection.style.display = 'block';
      otpSection.style.display = 'none';
  });

  emailButton.addEventListener('click', function() {
      phoneInputSection.style.display = 'none';
      otpSection.style.display = 'none';
      alert('Email verification not implemented yet!');
  });

  sendOtpButton.addEventListener('click', function() {
      if (phoneInput.value) {
          // Simulate sending OTP (replace this with actual backend call)
          alert('OTP sent to ' + phoneInput.value);
          phoneInputSection.style.display = 'none';
          otpSection.style.display = 'block';
      } else {
          alert('Please enter a phone number');
      }
  });

  // Responsive layout adjustments
  function adjustLayout() {
      const screenWidth = window.innerWidth;
      const logo = document.querySelector('.section-five img');
      
      if (screenWidth < 600) {
          logo.style.width = '60%';
      } else {
          logo.style.width = '30%';
      }
  }
  adjustLayout();

  // Adjust layout on window resize
  window.addEventListener('resize', adjustLayout);
});