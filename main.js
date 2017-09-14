let section =document.querySelector('#section');

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/Idris8303");
req.addEventListener("load", reqListener);
req.send();

function reqListener (response) {
  let data = JSON.parse(this.responseText);
  let html = `
  <section class ="section1">
  <h2> The Basics </h2>
    <p>Name: ${data.name}</p>
    <p>Github URL ${data.html_url}</p>
    <p>Company ${data.company}</p>
    <p>Website: ${data.blog}</p>
    <hr id ="line" width="1" size="130">
    </section>
    <section class = "section2">
      <h2> The Story </h2>
      <p>awesome
      [aw-suh m]
      Spell  Syllables
      Examples Word Origin
      See more synonyms on Thesaurus.com
      adjective
      1.
      causing or inducing awe; inspiring an overwhelming feeling of reverence,  admiration, or fear:
      an awesome sight.
      2.
      exhibiting or marked by awe; showing reverence, admiration, or fear.
      3.
      Slang. very impressive:
      That new white convertible is totally awesome.</p>
      <img src = "${data.avatar_url}" style="width:304px;height:228px;border-radius:50%;">
    </section>

    `;

  section.innerHTML = html;
  }
