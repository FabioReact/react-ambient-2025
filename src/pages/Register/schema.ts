import { z } from 'zod';

export const schema = z
  .object({
    email: z
      .string()
      .email('Not a valid email')
      .min(8, 'Email should be at least 8 characters long'),
    password: z
      .string()
      .min(6, 'should be at least 6 characters long')
      .regex(/^(?=.*[a-z]).*$/, { message: 'Password must contain at least one lowercase letter' })
      .regex(/^(?=.*[A-Z]).*$/, { message: 'Password must contain at least one uppercase letter' })
      .regex(/^(?=.*\d).*$/, { message: 'Password must contain at least one digit' })
      .regex(/^(?=.*[#?!@$%^&*-+]).*$/, {
        message: 'Password must contain at least one special character',
      }),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Password do not match',
    path: ['passwordConfirmation'],
  });
