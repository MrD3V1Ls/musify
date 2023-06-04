//import tracks from './Tracks.json';

export async function onRequestPost(context) {
    const {
        request, // same as existing Worker API
        env, // same as existing Worker API
        params, // if filename includes [id] or [[path]]
        waitUntil, // same as ctx.waitUntil in existing Worker API
        next, // used for middleware or to fetch assets
        data, // arbitrary space for passing data between middlewares
    } = context;
    var body = await request.json();
    let tracks = body;
    let songDatabase = {};

    tracks.forEach((song, index) => {
        const songName = song.name;
        songDatabase[songName] = { likes: song.likes };
    });

    const userRating = {};

    tracks.forEach((song, index) => {
        const key = song.name;
        userRating[key] = song.favorited ? 1 : -1;
    });
    let sortOrder = await fetch('http://127.0.0.1:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ songDatabase, userRating })
    });
    sortOrder = await sortOrder.json();
    tracks = tracks.sort((a, b) => {
        const indexA = sortOrder.indexOf(a.name);
        const indexB = sortOrder.indexOf(b.name);

        // If both names are found in the sortOrder array, sort based on their indices
        if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
        }

        // If only one name is found in the sortOrder array, prioritize it
        if (indexA !== -1) {
            return -1;
        }

        if (indexB !== -1) {
            return 1;
        }

        // If both names are not found in the sortOrder array, maintain the original order
        return 0;
    });
    return new Response(JSON.stringify({ tracks }));
}


export async function onRequestGet(context) {
    const {
        request, // same as existing Worker API
        env, // same as existing Worker API
        params, // if filename includes [id] or [[path]]
        waitUntil, // same as ctx.waitUntil in existing Worker API
        next, // used for middleware or to fetch assets
        data, // arbitrary space for passing data between middlewares
    } = context;

    let results = await fetch('http://127.0.0.1:3000/');
    results = await results.json();
    return new Response(JSON.stringify({ success: true, results }));
}