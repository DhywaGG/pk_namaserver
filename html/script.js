const watermark = document.getElementById('watermark');

window.addEventListener('message', (event) => {
    const data = event.data;

    if (data.action !== 'update') return;

    watermark.style.display = data.visible ? 'block' : 'none';

    if (data.text !== undefined) {
        watermark.textContent = data.text;
    }

    if (data.opacity !== undefined) {
        watermark.style.opacity = Number(data.opacity);
    }

    if (data.fontSize !== undefined) {
        watermark.style.fontSize = `${Number(data.fontSize)}px`;
    }

    if (data.letterSpacing !== undefined) {
        watermark.style.letterSpacing = `${Number(data.letterSpacing)}px`;
    }

    if (data.x !== undefined) {
        watermark.style.left = `${Number(data.x)}%`;
    }

    if (data.y !== undefined) {
        watermark.style.top = `${Number(data.y)}%`;
    }
});
