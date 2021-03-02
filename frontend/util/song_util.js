export const getSongs = () => (
    $.ajax({
        method: "GET",
        url: "/api/songs",
    })
)
export const getArtistSongs = (userId) => (
    $.ajax({
        method: "GET",
        url: `/api/users/${userId}/songs`
    })
)
export const getSong = songId => (
    $.ajax({
        method: "GET",
        url: `/api/songs/${songId}`,
        data: { songId }
    })
)

// review this beacuse of uploading
export const createSong = songData => (
    $.ajax({
        method: "POST",
        url: "/api/songs",
        data: songData,
        contentType: false,
        processData: false
    })
)

export const deleteSong = songId => (
    $.ajax({
        method: "DELETE",
        url: `/api/songs/${songId}`
    })
)

export const editSong = songId => (
    $.ajax({
        method: "PATCH",
        url: `/api/songs/${songId}`,
        data: { songId }
    })
)