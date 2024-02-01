import { readable } from "svelte/store";

/**
 * Logs a warning if the condition is met
 *
 * taken from https://github.com/alexreardon/tiny-warning/blob/master/src/index.js
 */
 export function warning(condition: boolean, message: string): void {
  // condition passed: do not log
  if (condition) {
    return
  }

  const text = `Warning: ${message}`

  console.warn(text)

  // Throwing an error and catching it immediately
  // to improve debugging
  // A consumer can use 'pause on caught exceptions'
  // https://github.com/facebook/react/issues/4216
  try {
    throw Error(text)
    // eslint-disable-next-line no-empty
  } catch (x) {}
}

export function omitUndefined<T>(object: T) {
  return Object.keys(object).reduce((acc, key) => {
    if (typeof object[key] === 'undefined') {
      return acc
    }

    return {
      ...acc,
      [key]: object[key],
    }
  }, {})
}
  
export const isEurope = () => {
  const offset = new Date().getTimezoneOffset();
  return offset <= 0 && offset >= -180;
};

export const stringToBeautifiedFragment = (str: string = "") =>
  (str || "")
    .toLocaleLowerCase()
    .replace(/\s/g, "-")
    .replace(/\?/g, "")
    .replace(/,/g, "");

export const showHideOverflowY = (bool: boolean) => {
  const html = document.querySelector("html");
  if (bool) {
    html.classList.add("overflow-y-hidden");
  } else {
    html.classList.remove("overflow-y-hidden");
  }
};

export const formatDate = (date) =>
  new Date(Date.parse(date)).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const scrollToElement = async (
  element: HTMLElement,
  selector: string
) => {
  const firstElement: HTMLElement = element.querySelector(selector);
  if (!firstElement) {
    return;
  }
  firstElement.scrollIntoView({
    behavior: "smooth",
  });
};
export const isAnExternalLink = (href: string) => href.startsWith("http");

export const removeTrailingSlash = (site: string) => {
  return site.replace(/\/$/, "");
};

export const sanitizeSelfHosted = (testString: string) => {
  return /self-hosted\/\d\.\d\.\d/.test(testString)
    ? testString.replace(/\d\.\d\.\d/, "latest")
    : testString;
};

export const useMediaQuery = (mediaQueryString: string) => {
  const matches = readable<boolean>(null, (set) => {
    if (typeof globalThis["window"] === "undefined") return;

    const match = window.matchMedia(mediaQueryString);
    set(match.matches);
    const element = (event: MediaQueryListEvent) => set(event.matches);
    match.addEventListener("change", element);
    return () => {
      match.removeEventListener("change", element);
    };
  });
  return matches;
};

export const scrollIntoView = (selector: string) => {
  const scrollToElement = document.querySelector(selector);

  if (!scrollToElement) return;

  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  scrollToElement.scrollIntoView({
    block: "nearest",
    inline: "start",
    behavior: mediaQuery.matches ? "auto" : "smooth",
  });
};

export const getVariantFromStatus = (status: string) => {
  if (status === "soon" || status === "Early Access") {
    return "pink";
  } else {
    return "orange";
  }
};
  
export const onPrint = (url: string) => {
  let iframe: HTMLIFrameElement;
  if (!iframe) {
    iframe = document.createElement("iframe");
    document.body.appendChild(iframe);

    iframe.style.display = "none";
    iframe.onload = function() {
      setTimeout(function() {
        iframe.focus();
        iframe.contentWindow.print();
      }, 1);
    };
  }

  iframe.src = url;
};

/**
 * Calculate readig time of entire pdf document
 * @param {String} paraBody pdf text to calculate reading time
 * */
 export const calcRT = paraBody => {
  const wordsPerMinute = 200; // Average case.

  let textLength = paraBody.split(" ").length; // Split by words
  if (textLength > 0) {
    return Math.ceil(textLength / wordsPerMinute);
  }
};

/**
 * Retrieves the text of a specif page within a PDF Document obtained through pdf.js
 *
 * @param {Integer} pageNum Specifies the number of the page
 * @param {PDFDocument} PDFDocumentInstance The PDF document obtained
 **/
export const getPageText = (pageNum, PDFDocumentInstance) => {
  // Return a Promise that is solved once the text of the page is retrieven
  return new Promise(function(resolve, reject) {
    PDFDocumentInstance.getPage(pageNum).then(function(pdfPage) {
      // The main trick to obtain the text of the PDF page, use the getTextContent method
      pdfPage.getTextContent().then(function(textContent) {
        var textItems = textContent.items;
        var finalString = "";

        // Concatenate the string of the item to the final string
        for (var i = 0; i < textItems.length; i++) {
          var item = textItems[i];

          finalString += item.str + " ";
        }

        // Solve promise with the text retrieven from the page
        resolve(finalString);
      });
    });
  });
};