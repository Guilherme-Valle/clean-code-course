class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    save(){
        database.insert(this);
    }
}

function handleCreateUserRequest(request){
    try {
        createUser(request.user);
    } catch(error){
        showErrorMessage(error.message)
    }
}

function createUser(user){
    validateInput(user.email, user.password)
    
    saveUser(user);
}

function isValidEmail(email){
    return email && email.includes('@');
}

function isValidPassword(password){
    return password && password.trim() !== '';
}

function validateInput(email, password){
    if (!isValidEmail(email) || !isValidPassword(password)){
        throw new Error('Invalid input!');
    }
}

function showErrorMessage(error){
    console.error(error);
}

function saveUser(user){
    const newUser = new User(user.email, user.password);
    
    newUser.save();
}
