import axios from "axios";
import parse from "html-react-parser";

/**
 * Converts number to euro price.
 * @param {*} price price to be converted
 * @param {*} text where or not euro should be a sign in front or text behind the price.
 */

export function toEuroFormat(price, text = false) {
  if (!price) {
    return "";
  }
  if (text) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " euro";
  }
  return "€" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
/**
 * Convert object to url query
 * @param {object} info object to be converted
 **/
export function createQuery(info) {
  let first = true;
  let query = "";
  for (const [key, value] of Object.entries(info)) {
    if (first) {
      query += "?";
      first = false;
    } else {
      query += "&";
    }
    query += `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  }
  return query;
}
/**
 * Get the url for the generated PDF.
 * @param {string} url  URL of the page to be generated
 * @param {string} filename Name of the resulting pdf.
 */
export function getPDFUrl(url, filename = "test.pdf") {
  return `https://pdf.test.wurld.nl/?filename=${filename}&margin=0&url=${url}`;
}
/**
 *  Scroll the parent to the center of a given element.
 * @param {JSelement} element
 */
export function scrollItemToCenter(element) {
  const dist =
    element.offsetLeft - window.screen.width / 2 + element.offsetWidth / 2;
  element.parentElement.scroll({
    left: dist,
    top: 0,
    behavior: "smooth",
  });
}
export function toDateString(date) {
  if (date instanceof Date) {
    return (
      zeroPad(date.getDate(), 2) +
      "-" +
      zeroPad(date.getMonth() + 1, 2) +
      "-" +
      date.getFullYear()
    );
  }
  return null;
}
export function zeroPad(num, size) {
  num = num.toString();
  while (num.length < size) {
    num = "0" + num;
  }
  return num;
}
/**
 * Print HTML String to plain HTML Element
 * @param {*} text String to be converted
 */
export function printHTML(text) {
  if (!text) {
    return null;
  }
  return parse(text);
}

/** */
export async function createPDFFile(url, name) {
  return axios({
    url: url, // download url
    method: "get",
    headers: {
      Accept: "application/pdf",
      "Content-Type": "application/pdf",
    },
  }).then((data) => {
    let file = new File([data.data], name || "file.pdf");
    return file;
  });
}
export const changeFileDescription = (event) => {
  const target = event.currentTarget;
  const file_container = target.querySelector("input");

  const file = file_container?.files[0]?.name;
  const label = target.querySelector("label.custom-file-label");
  console.log("file_container", file_container);
  console.log("file", file);
  console.log("label", label);
  label.innerHTML = file || "";
};
//return a promise that resolves with a File instance
export async function base64toFile(base64, filename, mimeType) {
  return await fetch(base64)
    .then(function (res) {
      return res.arrayBuffer();
    })
    .then(function (buf) {
      return new File([buf], filename, { type: mimeType });
    });
}

/**
 * Function to download a file from a blob.
 * @param {*} blob
 */
export function downloadBlob(blob) {
  // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
  const blobUrl = URL.createObjectURL(blob);

  // Create a link element
  const link = document.createElement("a");

  // Set link's href to point to the Blob URL
  link.href = blobUrl;
  link.download = blob?.name;

  // Append link to the body
  document.body.appendChild(link);

  // Dispatch click event on the link
  // This is necessary as link.click() does not work on the latest firefox
  link.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    })
  );

  // Remove link from body
  document.body.removeChild(link);
}

/**
 * Lichten or darken a given Hexadecimal color
 * @param {string} hex color
 * @param {int} amt Amount to make it darker, between -100 and 100
 */
export function LightenDarkenColor(hex, amt) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);

  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  s = s * 100;
  s = Math.round(s);
  l = l * 100;
  l = Math.max(0, Math.min(100, l + amt));
  l = Math.round(l);
  h = Math.round(360 * h);

  return "hsl(" + h + ", " + s + "%, " + l + "%)";
}

/**
 * Get a cookie with a given name
 * @param {string} cname
 */
export function getCookie(cname) {
  if (typeof document !== "undefined") {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
  }
  return "";
}
/**
 * Set a cookie
 * @param {*} cname name of the cookie
 * @param {*} cvalue value of the cookie
 * @param {*} exdays days until expiration
 */
export function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
/**
 * Remove cookie with a given name
 * @param {*} cname
 */
export function removeCookie(cname) {
  setCookie(cname, "", -1);
}
/**
 * Redirect to a given path, relative to the homepage.
 * @param {string} path
 */
export function redirectTo(path) {
  window.location.replace(window.location.origin + path);
}
