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
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ item_id: id }),
    });
    const data = await res.text();
    return data;
  };
}
