  const toggle = document.getElementById("ai-chat-toggle");
  const panel = document.getElementById("ai-chat-panel");

  toggle.addEventListener("click", () => {
    console.log("clicked on");
    // Toggle the hidden property of the panel (true to false, false to true
    const isOpen = !panel.hidden;
    panel.hidden = isOpen;
    toggle.textContent = isOpen ? "Chat with Isabelle AI" : "Close chat";
  });