window.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const description = urlParams.get('description');
    const location = urlParams.get('location');
    const date = urlParams.get('date');
    const time = urlParams.get('time');
    const price = urlParams.get('price');
    const website = urlParams.get('website');
    const instagram = urlParams.get('instagram');
    const speaker = urlParams.get('speaker');

    document.querySelector('#event-title').textContent = title;
    document.querySelector('#event-description').textContent = description;
    document.querySelector('#event-location').textContent = location;
    document.querySelector('#event-date-time').textContent = date + " : " + time;
    document.querySelector('#event-price').textContent = "$" + price;
    document.querySelector('#event-speaker').textContent = speaker;
    document.querySelector('#event-website').href = website;
    document.querySelector('#event-instagram').href = instagram;
});