export const sign_in = (username) => {
    localStorage.clear()
    localStorage.setItem('user', username);
}