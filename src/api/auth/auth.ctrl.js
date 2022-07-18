import Joi from '@hapi/joi';
import User from '../../models/user.js';

export const register = async (ctx) => {
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });

  try {
    await schema.validateAsync(ctx.request.body);
  } catch (e) {
    ctx.throw(400, e);
  }

  const { username, password } = ctx.request.body;

  try {
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409;
      return;
    }

    const user = new User({
      username,
    });

    await user.setPassword(password);
    await user.save();

    ctx.body = user.serialize();
  } catch (e) {
    ctx.throw(500, e);
  }
};
export const login = (ctx) => {};
export const check = (ctx) => {};
export const logout = (ctx) => {};
