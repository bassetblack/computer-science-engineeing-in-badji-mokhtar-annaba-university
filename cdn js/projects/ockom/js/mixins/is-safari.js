const isSafari =
  /constructor/i.test(window.HTMLElement) ||
  "[object SafariRemoteNotification]" ===
    (
      !window.safari ||
      ("undefined" != typeof safari && safari.pushNotification)
    ).toString();
isSafari && document.body.classList.add("safari");
