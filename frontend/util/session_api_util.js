//postSession
export const login = user => (
    $.ajax({
        method: "POST",
        url: "/api/session",
        data: { user }
    })
)
//postUser
export const signup = user => (
    $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user }
    })
)
//deleteSession
export const logout = () => (
    $.ajax({
        method: "DELETE",
        url: "/api/session"
    })
)
