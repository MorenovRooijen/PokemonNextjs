import axios from "axios";
import useSWR from "swr";
import { api_url, login_cookie_name } from "../constants/constants";
import { getCookie } from "./custom_methods";

/************************************************************
 *
 * useSWR functions
 *
 *************************************************************/

export const useUser = () => {
  const { data, error } = useSWR("user", mijngoedhuis_get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

/************************************************************
 *
 * Mijngoedhuis API POST's
 *
 *************************************************************/

//TODO: Create a general post function with prefilled header and url

export async function mijngoedhuis_post(url, data) {
  let result = null;
  try {
    await axios
      .post(url, data, {
        headers: { Authorization: "Bearer " + getCookie(login_cookie_name) },
      })
      .then(function (data) {
        result = data;
      });
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      console.log("Request made and server responded");
      result = {
        error: true,
        response: error.response.data,
        reason: "Request made and server responded",
      };
    } else if (error.request) {
      // The request was made but no response was received
      console.log("The request was made but no response was received");
      result = {
        error: true,
        response: error.request,
        reason: "The request was made but no response was received",
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log(
        "Something happened in setting up the request that triggered an Error"
      );
      result = {
        error: true,
        response: error.message,
        reason:
          "Something happened in setting up the request that triggered an Error",
      };
    }
  }
  return result;
}

/************************************************************
 *
 * Mijngoedhuis API GET's
 *
 *************************************************************/
export const mijngoedhuis_get = (url) => {
  return axios
    .get(api_url + "wp-json/notanumber/v1/mijngoedhuis/" + url, {
      headers: { Authorization: "Bearer " + getCookie(login_cookie_name) },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log("Error getting ", url, "with message", error);
      return { error: error };
    });
};
