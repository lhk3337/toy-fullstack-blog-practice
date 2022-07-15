let postId = 1;

const posts = [{ id: 1, title: 'title', body: 'content' }];

export const write = (ctx) => {
  const { title, body } = ctx.request.body;
  postId += 1;
  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};

export const list = (ctx) => {
  ctx.body = posts;
};

export const read = (ctx) => {
  const { id } = ctx.params;
  const post = posts.find((value) => value.id.toString() === id);
  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 없습니다.',
    };
    return;
  }
  ctx.body = post;
};

export const remove = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((value) => value.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 없습니다.',
    };
    return;
  }
  posts.splice(index, 1);
  ctx.status = 204;
};

export const replace = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((value) => value.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 없습니다.',
    };
    return;
  }
  posts[index] = {
    id,
    ...ctx.request.body,
  };

  ctx.body = posts[index];
};

export const update = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((value) => value.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 없습니다.',
    };
    return;
  }
  posts[index] = {
    ...posts[index],
    ...ctx.request.body,
  };

  ctx.body = posts[index];
};
