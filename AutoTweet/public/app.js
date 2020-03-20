const form = document.querySelector('form');
const API_URL = 'http://localhost:5000/tweet';
const API_URL_2 = 'http://localhost:5000/tweet50';
const loading = document.querySelector('.loading-img');

loading.style.display = 'none';
submitButton.addEventListener("click", event => {
  loading.style.display = '';
  event.preventDefault();
  const formData = new FormData(form);
  const content = formData.get('content');

  const tweetContent = {
    content
  };
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(tweetContent),
    headers: {
      "content-type": "application/json"
    }
  });
  loading.style.display = 'none';
});

submitButton50.addEventListener("click", event => {
  event.preventDefault();
  loading.style.display = '';
  const formData = new FormData(form);
  const content = formData.get('content');

  const tweetContent = {
    content
  };

  fetch(API_URL_2, {
    method: 'POST',
    body: JSON.stringify(tweetContent),
    headers: {
      "content-type": "application/json"
    }
  });
  loading.style.display = 'none';
});