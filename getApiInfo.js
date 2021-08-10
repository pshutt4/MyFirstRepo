fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Yw4FOA4kGHT6S5i0sSwl0OAQClqrYjKu')
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data.results.list_name_encoded[0].bestsellers_date)
    console.log(data.results.name[2].bestsellers_date)
  })
  .catch(err => {
    //Do something here if it errors out.
  })
