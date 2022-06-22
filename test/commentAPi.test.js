import CommentApi from "../src/commentApi";

describe("Api testing", () => {
  const testAray = [
    {
      comment: "Great content!",
      creation_date: "2021-02-10",
      username: "Jane",
    },
    {
      comment: "Great Movie!",
      creation_date: "2021-04-10",
      username: "John",
    },
  ];
  test("Comment Counter", () => {
    const comment = CommentApi.counterComments(testAray);
     expect(comment).toBe(2);
  });
});
