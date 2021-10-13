var data = [
  //   {
  //     username: "test",
  //     title: "test title",
  //     desc: "test desc",
  //   },
];

const loopCards = () => {
  const cardslooperParent = document.getElementById("cardslooperParent");
  for (var i = 0; i < data.length; i++) {
    cardslooperParent.innerHTML += `  <div class="col-md-4" id="cardslooper">
    <div
      class="card text-white bg-primary mb-3"
      style="max-width: 18rem"
    >
      <div class="card-header">${data[i].username}</div>
      <div class="card-body">
        <h5 class="card-title">${data[i].title}</h5>
        <p class="card-text">
        ${data[i].desc}
        </p>
      </div>
    </div>`;
    console.log(i);
  }
};
function handleSubmit() {
  const username = document.getElementById("username").value;
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;
  var myCard = {
    username,
    title,
    desc,
  };
  data.push(myCard);
  console.log(data);
  loopCards();
  alert("added");
}

loopCards();
