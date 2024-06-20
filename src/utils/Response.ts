import { TUser } from "../types/user";

export const signUp = async (user: TUser) => {
  const resp = await fetch('https://dummyapi.io/data/v1/user/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'app-id': '667314da539f807d1f8969bb',
    },
    body: JSON.stringify(user)
  });

  if (!resp.ok) {
    throw new Error('ошибка добавления пользователя')
  };
};

export const login = async (data: TUser) => {
  try {
    const resp = await fetch('https://dummyapi.io/data/v1/user?created=1', {
      headers: {
        'app-id': '667314da539f807d1f8969bb',
      },
    });

    if (!resp.ok) {
      throw new Error('Пользователя не существует')
    };

    const registeredUsers = await resp.json();
    const foundedUser = await registeredUsers.data.find((item: TUser) =>
      item.firstName === data.firstName);

    if (!foundedUser) {
      throw new Error('Пользователь не найден');
    };

    localStorage.setItem('currentUser', JSON.stringify(
      {
        user: {
          firstName: data.firstName,
          email: data.email,
        },
        token: 'jkjslflkjsflkj4kj53lk5j3l5kj',
      }));

  } catch (e) {
    console.log(e)
  }
};