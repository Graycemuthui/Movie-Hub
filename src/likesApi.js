export default class LikesApi {
  static url =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/O9XLhIJZb65RrJXzf9ES/likes';

  static getLikes = async () => {
    const res = await fetch(this.url);
    const data = await res.json();
    return data;
<<<<<<< HEAD
  }
=======
  };
>>>>>>> 89101b8a6a08a79248d4968d4baff61046b83329

  static setLikes = async (id) => {
    const res = await fetch(this.url, {
      method: 'post',
      headers: { 'content-type': 'application/json' },
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
>>>>>>> 89101b8a6a08a79248d4968d4baff61046b83329
