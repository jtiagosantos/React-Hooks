import { createContext } from "react";

type UserContextProps = {
  user: string,
  email: string,
};

export const UserContext = createContext({
  user: 'admin@123',
  email: 'admin@teste.com'
} as UserContextProps);