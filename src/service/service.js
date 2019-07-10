import axios from "axios";

export const fetchDog = () => {
    return axios({
        method: "get",
        url: "https://dog.ceo/api/breeds/image/random"
    });
};

export const getEmployee = () => {
    // console.log('works here: getEmployee ',);
  return axios({
      method: "get",
      url: "http://dummy.restapiexample.com/api/v1/employees"
  });
};
