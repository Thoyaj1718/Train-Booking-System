import axios from "axios";

const url = "/api/";;

export const getTrains = async () => {
  return await axios.get(url + "train", {
    withCredentials: true,
  });
};

export const loginUser = async (email, password) => {
  return await axios.post(
    url + "auth/login",
    { email, password },
    { withCredentials: true }
  );
};

export const logoutUser = async () => {
  return await axios.get(url + "auth/logout", {
    withCredentials: true,
  });
};

export const checkUser = async () => {
  return await axios.get(url + "user/return/current", {
    withCredentials: true,
  });
};

export const createBook = async (payload) => {
  return await axios.post(url + "book", payload, {
    withCredentials: true,
  });
};

export const getBooks = async () => {
  return await axios.get(url + "book", {
    withCredentials: true,
  });
};

export const getTrainById = async (id) => {
  return await axios.get(url + `train/${id}`, {
    withCredentials: true,
  });
};

export const deleteBook = async (id) => {
  const { data } = await axios.delete(url + `book/${id}`, {
    withCredentials: true,
  });
  return data;
};

export const register = async (name, email, password, phone) => {
  return await axios.post(
    url + "user",
    {
      name,
      email,
      password,
      phone,
      is_admin: "false",
    },
    {
      withCredentials: true,
    }
  );
};

export const createTrain = async (
  name,
  destination,
  startpoint,
  startDate,
  reachDate,
  price
) => {
  const { data } = await axios.post(
    url + "train",
    {
      name,
      destination,
      startpoint,
      startDate,
      reachDate,
      price,
    },
    {
      withCredentials: true,
    }
  );
  console.log(data);
};

export const deleteTrain = async (id) => {
  const { data } = await axios.delete(url + "train", {
    data: { id },
    withCredentials: true,
  });
  console.log(data);
};