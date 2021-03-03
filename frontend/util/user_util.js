export const fetchUsers = () => {
    return $.ajax({
        method: "GET",
        url: "/api/users"
    });
};

export const fetchUser = userId => {
    
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}`
    });
};

export const updateUser = (userData, id) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/users/${id}`,
        data: userData,
        contentType: false,
        processData: false,
    })
}