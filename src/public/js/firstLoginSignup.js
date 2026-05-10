// Background Slideshow - CROSSFADE, NO WHITE FLASH, WON'T BLOCK CLICKS
const images = [
    'https://image2url.com/r2/default/images/1770825831667-8a18c048-232e-4856-8869-fab74018dd07.blob',
    'https://image2url.com/r2/default/images/1770829409581-a5def723-a1cc-47bd-b046-4c9627b0b530.blob',
    'https://image2url.com/r2/default/images/1770829411402-0c906955-8762-46da-84f0-47a14ae127da.blob',
    'https://image2url.com/r2/default/images/1770829665468-f2bc37f9-9492-4e64-8514-b3a8ae3b8e0f.blob',
    'https://image2url.com/r2/default/images/1770829671475-0f784266-a130-4ecb-a4e8-f6e07e0a583e.blob',
    'https://image2url.com/r2/default/images/1770829676945-e231d829-c72f-49e2-bf8f-34a7ab1231c9.blob'
];

let idx = 0;

// Preload all images
images.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Create overlay for smooth transition - NO CLICK BLOCKING
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundSize = 'cover';
overlay.style.backgroundPosition = 'center';
overlay.style.opacity = '0';
overlay.style.transition = 'opacity 1s ease-in-out';
overlay.style.zIndex = '-1';  // FIX: Put behind content
overlay.style.pointerEvents = 'none';  // FIX: Allow clicks to pass through
document.body.appendChild(overlay);

// Set initial background
document.body.style.background = `url('${images[0]}') center/cover fixed`;
document.body.style.position = 'relative';

function changeBg() {
    idx = (idx + 1) % images.length;
    
    // Set next image on overlay
    overlay.style.backgroundImage = `url('${images[idx]}')`;
    overlay.style.opacity = '1';
    
    // After fade, update body background
    setTimeout(() => {
        document.body.style.background = `url('${images[idx]}') center/cover fixed`;
        overlay.style.opacity = '0';
    }, 1000);
}

setInterval(changeBg, 5000);

// login and signup

// Redirect to login/signup pages
const loginToggle = document.getElementById('loginToggle');
const signupToggle = document.getElementById('signupToggle');

if (loginToggle) {
    loginToggle.onclick = () => window.location.href = '/login';
}
if (signupToggle) {
    signupToggle.onclick = () => window.location.href = '/signup';
}

// Password visibility
function togglePasswordVisibility(id, el) {
    const input = document.getElementById(id);
    const icon = el.querySelector('i');
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    icon.className = isPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
}

// Signup validation (only runs on signup page)
const signup = document.getElementById('signupForm');
if (signup) {
    const pwd = document.getElementById('signupPassword');
    const confirm = document.getElementById('confirmPassword');
    const msg = document.createElement('small');
    msg.style.cssText = 'color:#ff4444;font-size:0.7rem;display:block;margin-top:0.3rem';
    confirm.parentElement.appendChild(msg);
    
    const validate = () => {
        if (pwd.value.includes(' ')) msg.textContent = 'No spaces allowed';
        else if (pwd.value && pwd.value.length < 6) msg.textContent = 'Min 6 characters';
        else if (confirm.value && pwd.value !== confirm.value) msg.textContent = 'Passwords do not match';
        else msg.textContent = '';
    };
    
    pwd.onkeyup = validate;
    confirm.onkeyup = validate;
    
    signup.onsubmit = (e) => {
        if (!pwd.value || pwd.value.length < 6 || pwd.value !== confirm.value) e.preventDefault();
    };
}

