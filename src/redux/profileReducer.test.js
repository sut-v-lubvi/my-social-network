import profileReducer, { newPostInStateActionCreator } from "./profileReducer";

let state = {
  postsData: [
    { id: 1, postText: "Саламаленькуй тигры есть жи", likesCount: 387 },
    { id: 2, postText: "Я хааа бляяяя", likesCount: 743 },
  ],
};

describe("add new post", () => {
  test("array post length test", () => {
    let text = "Саняяяя";
    let action = newPostInStateActionCreator(text);
    let newPosts = profileReducer(state, action);
    expect(newPosts.postsData.length).toBe(3);
  });
  test("is the text of the post correct", () => {
    let text = "Саняяяя";
    let action = newPostInStateActionCreator(text);
    let newPosts = profileReducer(state, action);
    expect(newPosts.postsData[2].postText).toBe("Саняяяя");
  });
});
