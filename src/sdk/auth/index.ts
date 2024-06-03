import { API } from '../../../config';

const sliderAPI = 'http://173.249.5.15:8085/StarBetBO';

interface User {
  username: string;
  password: string;
}

interface AuthData {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export const login = async (user: User): Promise<AuthData | void> => {
  try {
    console.log('loginapi', API);
    const response = await fetch(`${API}/user/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(user),
    });
    console.log('loginres', response);
    return response.json();
  } catch (err) {
    console.log('loginerr', err);
  }
};

export const isAuthenticated = (): AuthData | false => {
  if (typeof window === 'undefined') {
    return false;
  }
  const jwt = localStorage.getItem('jwt');
  return jwt ? JSON.parse(jwt) : false;
};

export const authenticate = (data: AuthData, next: () => void): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
};

export const signout = async (): Promise<void> => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
    try {
      const response = await fetch(`${API}/logout`, {
        method: 'GET',
      });
      console.log('Logout', response);
    } catch (err) {
      console.log(err);
    }
  }
};

// Slider Images Operations

interface SliderData {
  id?: string;
  name?: string;
  url?: string;
}

export const uploadSlider = async (data: FormData): Promise<any> => {
  try {
    const response = await fetch(`${sliderAPI}/Upload`, {
      method: 'POST',
      body: data,
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const editSlider = async (data: SliderData): Promise<any> => {
  try {
    const response = await fetch(`${sliderAPI}/Update`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const deleteSlider = async (data: SliderData): Promise<any> => {
  try {
    const response = await fetch(`${sliderAPI}/Delete`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
