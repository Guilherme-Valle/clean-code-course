function createUser(email, password){
    if (!email || !email.includes('@') || !password || password.trim() === ''){
        console.log('Invalid input!');
        return;
    }

    const user = {
        email: email,
        password: password
    }

    database.insert(user);
}