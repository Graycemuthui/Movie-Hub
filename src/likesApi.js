export default class LikesApi {
  static url =
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/O9XLhIJZb65RrJXzf9ES/likes";

  static getLikes = async () => {
    const res = await fetch(this.url);
    const data = await res.json();
    return data;
  };

  static setLikes = async (id) => {
    const res = await fetch(this.url, {
<<<<<<< HEAD
      method: 'post',
      headers: { 'content-type': 'application/json' },
=======
      method: "post",
      headers: { "content-type": "application/json" },
>>>>>>> 70c32ee81c3308c599386a1893fc09b7dffe4023
      body: JSON.stringify({ item_id: id }),
    });
    const data = await res.text();
    return data;
<<<<<<< HEAD
  }
}
=======
  };
}
>>>>>>> 70c32ee81c3308c599386a1893fc09b7dffe4023
