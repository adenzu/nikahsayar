const TARGET_DATE = new Date("2026-04-24T14:00:00+03:00").getTime();

const els = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
};

function update() {
    const now = Date.now();
    let diff = Math.max(0, TARGET_DATE - now);

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff %= 1000 * 60 * 60 * 24;
    const h = Math.floor(diff / (1000 * 60 * 60));
    diff %= 1000 * 60 * 60;
    const m = Math.floor(diff / (1000 * 60));
    diff %= 1000 * 60;
    const s = Math.floor(diff / 1000);

    els.days.textContent = d;
    els.hours.textContent = h.toString().padStart(2, "0");
    els.minutes.textContent = m.toString().padStart(2, "0");
    els.seconds.textContent = s.toString().padStart(2, "0");
}

update();
setInterval(update, 1000);
