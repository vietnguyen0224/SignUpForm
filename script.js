function verifyPw() {
    let p1 = document.getElementById('pw').value,
        p2 = document.getElementById('cfmPw').value;
    
    if (p1 !== p2) 
        document.getElementById('alert').textContent = "* Passwords do not match"
    else
        document.getElementById('alert').textContent = "Matched"
}