export const fetchSongsComments = songId => {
    return $.ajax({
        method: "GET",
        url: `/api/songs/${songId}/comments`
    });
};

export const fetchUserComments = userId => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/comments`
    });
};
export const createComment = comment => {
    debugger
    return $.ajax({
        method: "POST",
        url: "/api/comments",
        data: { comment }
        // contentType: false,
        // processData: false
    });
};
export const deleteComment = commentId => {
    debugger
    return $.ajax({
        method: "DELETE",
        url: `/api/comments/${commentId}`
    });
};