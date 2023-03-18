export const fetch_user = async (uuid) => {
    let user_data;

    try {
        const res = await fetch(`http://localhost:8000/api/members/${uuid}/`);
        user_data = await res.json();

    } catch (error) {
        console.log(error);
        user_data = false;
    }

    return user_data;
}