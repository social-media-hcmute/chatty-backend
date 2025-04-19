import Joi, { ObjectSchema } from 'joi';

const loginSchema: ObjectSchema = Joi.object().keys({
  username: Joi.string().required().min(3).max(20).messages({
    'string.base': 'Username must be a string',
    'string.empty': 'Username cannot be empty',
    'string.min': 'Invalid username',
    'string.max': 'Invalid username'
  }),
  password: Joi.string().required().min(5).max(10).messages({
    'string.base': 'Password must be a string',
    'string.empty': 'Password cannot be empty',
    'string.min': 'Invalid password',
    'string.max': 'Invalid password'
  })
});

export { loginSchema };
