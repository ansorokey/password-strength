const password = document.querySelector('#password');
const msg = document.querySelector('#msg');
const strength = document.querySelector('#strength');

// The input event fires when the value of an input changes
// Different than the change event, which fires when a value is committed
password.addEventListener('input', () => {
    // Only show if anything is typed into the input
    if(password.value.length > 0) {
        msg.style.display = 'block';
    } else {
        msg.style.display = 'none';
    }

    // change wthe message and colors
    if(password.value.length < 4) {
        strength.innerHTML = 'weak';
        password.style.borderColor = '#ff5925';
        msg.style.color = '#ff5925';
    } else
    if (password.value.length >= 4 && password.value.length < 8) {
        strength.innerHTML = 'medium';
        password.style.borderColor = 'yellow';
        msg.style.color = 'yellow';
    } else
    if(password.value.length >= 8) {
        strength.innerHTML = 'strong';
        password.style.borderColor = '#26d730';
        msg.style.color = '#26d730';
    }
})
