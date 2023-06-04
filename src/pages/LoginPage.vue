<template>
    <div class="login-container">
        <h2>Login</h2>
        <div class="login-form">
            <div class=" form-group">
                <div class="search-page">
                    <div class="search-box">
                        <label for="username">Username:</label>
                        <input type="text" id="username" v-model="username" class="form-control"
                            placeholder="Enter username">
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="search-page">
                    <div class="search-box">
                        <label for="password">Password:</label>
                        <input type="text" id="password" v-model="password" class="form-control"
                            placeholder="Enter password">
                    </div>
                </div>
            </div>
            <div class="search-box">
                <button @click="login">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: ""
        }
    },
    method: {
        login() {
            console.log(this.username)
            if (this.username && this.password) {
                console.log(this.username)
            }
        }
    }
}; 
</script>
  
<style>
.search-box button {
    font-size: 1.2rem;
    padding: 10px;
    border: none;
    border-radius: 20px;
    background-color: #1db954;
    color: white;
    cursor: pointer;
    width: 30%;
}

.search-page {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
}

.search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    color: #fff;
}

.search-box input[type="text"] {
    font-size: 1.2rem;
    padding: 10px;
    border: none;
    border-radius: 20px;
    margin-right: 10px;
    width: 70%;
}

.login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
}

.login-form {
    width: 30%;
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 1rem;
}

label {
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.form-control {
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #f1f1f1;
}

.btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
}

.btn:hover {
    background-color: #0069d9;
}
</style>
  