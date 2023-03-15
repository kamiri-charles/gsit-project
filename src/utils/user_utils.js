export const fetch_user = async (uuid) => {
    let user_data;
    fetch(`http://localhost:8000/api/members/${uuid}/`)
    .then(res => res.json())
    .then(data => user_data = data)
    .catch(err => {
        console.log(err);
        user_data = false
    })

    return user_data
}