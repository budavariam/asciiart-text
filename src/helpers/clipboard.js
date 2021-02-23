export function copyToClipboard(node) {
    const copyText = node.textContent;
    const textArea = document.createElement('textarea');
    textArea.style.position = "absolute";
    textArea.style.left = "-100%";
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove()
  }