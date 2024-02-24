import { fetchAPI } from '@/lib/fetchAPI';

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL!;

export type User = {
  name: string;
  avatar: {
    height: number;
    width: number;
    url: string;
  };
  description: string | null;
  email: string | null;
  userId: number;
};

export async function getAuthors() {
  const query = `
  query NewQuery {
  users {
    nodes {
      name
      avatar {
        height
        width
        url
      }
      description
      email
      userId
    }
  }
}`;

  try {
    const response = await fetchAPI({
      query,
    });

    const users = response?.users?.nodes as User[];

    return users;
  } catch (error) {}
}
