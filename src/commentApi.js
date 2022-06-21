export default class CommentApi {

  static url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oGpNFV0VEbtyfofRPhmv/comments'

    static getComments = async (id) => {
    const response = await fetch(`${this.url}?item_id=${id}`);

    const data = await response.json();
    console.log('data', data)
    console.log('id', id)
    return data;
  };

    static setComments = async (id, username, comment) => {
      const response = await fetch(this.url, {
        method: 'post',
        body: JSON.stringify({
          item_id: id,
          username,
          comment,
        }),
        headers: {
          'Content-type': 'application/JSON',
        },
      });

      const data = await response.text();
      console.log('data2', data)
      return data;
    };

  static counterComments = (data) => {
    let count = 0;
    for (let i = 0; i < data.length; i += 1) {
      count += 1;
    }
    console.log('count', count)
    return count;
  };
}

console.log(url)