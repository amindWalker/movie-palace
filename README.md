<h3 align="center">THE MOVIE PALACE</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]() [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

## Summary

- [About](#about)
- [Getting Started](#getting_started)
- [Documentation](#Documentation)
- [Built Using](#built_using)
- [TODO](#todo)
- [Author](#author)

<div align="center">

![demo](https://the-movie-palace.herokuapp.com/)

## About <a name = "about"></a>

<p align="center"> This project aims to create a good user experience (UX) using The Movie Database (TMDb) API and React. Also focus in Web responsiveness and modern coding practices like React Hooks. 
    <br>
</p>

<br>

</div>

## 🏁 Getting Started <a name = "getting_started"></a>

The documentation of the project can be found under [Documentation](#documentation) section.

The documentation of **TMDb** can be found here: [TMDb documentation](https://developers.themoviedb.org/3/getting-started/introduction).

The documentation of **React** and **Hooks** for reference: [React](https://reactjs.org/) and [Hooks](https://reactjs.org/docs/hooks-overview.html).

### Prerequisites

The first thing to do before starting development is to choose our **Code Editor**. I prefer using **Microsoft Visual Studio Code** ([VSCode](https://code.visualstudio.com/)).

"_[Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency._" The official description says all.

This project use at least **React 16.8**, because React introduced [Hooks](https://reactjs.org/docs/hooks-overview.html) on this release.

I prefer to work with **Typescript**, but the vast majority of the Web still uses **Javascript**. So, for compatibility reasons, I will work with Javascript and add [PropTypes](https://www.npmjs.com/package/prop-types) on this project as it adds the **Static Types** functionality to Javascript.

For increased flexibility, efficiency and organized development I prefer styling **React Components** with [styled-components](https://styled-components.com/) instead of plain CSS/SASS.

As my package manager I prefer using [Yarn](https://classic.yarnpkg.com/en/docs/install/).

### Installing locally

> Let's see the process as if you **do not** have any of the softwares required:

### Ubuntu Linux

- Open your Terminal. Let's start with our Code Editor [VSCode](https://code.visualstudio.com/)

```bash

sudo apt install software-properties-common apt-transport-https wget

wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -

sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"

sudo apt update

sudo apt install code

```

- Then the **Yarn** package manager. Reference: [Yarn Debian/Ubuntu](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

```bash

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -

echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt update && sudo apt install yarn

```

- Installing [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on Ubuntu:

```bash

sudo apt install git-all

```

- Now we can **git clone** this project locally in any folder of your computer, **install dependencies** and **run on the web browser**:

```bash

git clone https://github.com/git-BR/the-movie-palace.git

yarn install

yarn start

```

> ---
>
> With that we already have our **React** application up and running on the **browser** in this **address**: [localhost:3000](#localhost:3000)
>
> ---

### macOS

- Open your Terminal. Let's start with installing our Code Editor here:
  access [VSCode](https://code.visualstudio.com/) website, download and install.
  <br>

- Install homebrew if you don't already have it:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

```

- Then install **Yarn** package manager in terminal. This will also install **Node.js** if it is not already installed. Reference: [Yarn macOS](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

```bash

brew install yarn

```

- Installing [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on macOS:

```bash

brew install git

```

- Now we can **git clone** this project locally in any folder of your computer, **install dependencies** and **run on the web browser**:

```bash

git clone https://github.com/git-BR/the-movie-palace.git

yarn install

yarn start

```

> ---
>
> With that we already have our **React** application up and running on the **browser** in this **address**: [localhost:3000](#localhost:3000)
>
> ---

### Windows

- Visit [VSCode](https://code.visualstudio.com/) official website, download the **Windows Setup** file and install it.

- Install [Git for Windows](https://git-scm.com/download/win). The official [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) has linked this project that **ported** the original **Bash Terminal** experience to **Windows**. Right now the version is **2.28.0**, donwload and install it. For more information go here: [Git for Windows](https://gitforwindows.org/)
- Now you can **git clone** in the ported version of **Git for Windows** with a **right-click** on a folder in **Windows Explorer** to access the **Bash** then with the terminal open execute this:

```bash

git clone https://github.com/git-BR/the-movie-palace.git

cd the-movie-palace

```

> this will clone the project folder/files, named **the-movie-palace**, in the selected place.

- Install the **LTS** release of the [Node.js](https://nodejs.org/en/).
- Got to [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) official website, download for **Windows** button and install it.
- Now with the opened **Git Bash terminal** (if you closed just go where you git cloned/extracted the project files, **right-click** and select **BASH** to open it) execute this:

```bash
yarn install

yarn start

```

> ---
>
> With that we already have our **React** application up and running on the **browser** in this **address**: [localhost:3000](#localhost:3000)
>
> ---

---

<div align="center">
<b>Just for reference</b>
</div>

This project was bootstrapped with [create-react-app](https://create-react-app.dev/). It starts with all the **common** stuff needed in a **React** project so we don't need to add manually one by one. It's pretty straightforward:

```bash


yarn add create-react-app

yarn create react-app my-project-name

cd my-project-name

yarn start

```

You can open your project **directly** from **terminal** to **VSCode** like this:

```bash

cd my-project-name-folder

code .

```

Now we will install [PropTypes](https://www.npmjs.com/package/prop-types) in our project:

```bash

yarn add prop-types

```

And last we install [Styled Components](https://styled-components.com/):

```bash

yarn add styled-components

```

## 📜 Documentation <a name="documentation"></a>

## API Environment

For getting data from **TMDb API** efficiently we need to store the **URLs** in **_variables_**/**_constants_**. This will avoid repeated URLs typing. You can name your constants the way you want, but try to keep it meaningful:

```js
// THE BASE API URL
const API_URL = "https://api.themoviedb.org/3/";

// GET YOUR KEY FROM TMDB DEVELOPER API
const API_KEY = "put your KEY from TMDb API";

// THE URL WHICH TRIGGERS SEARCH
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;

// THE URL WHICH TRIGGERS POPULAR MOVIES
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

// UNFORTUNATELY TMDB LIMITS 20 RESULTS PER PAGE, SO RATINGS FILTER WILL BE
// LIMITED TO THAT JUST FOR DEMO.
const FILTER_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&page=2`;

// THE BASE URL WHICH TRIGGERS IMAGES
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";

// THE SIZE OF ALTERNATIVE BACKDROP IMAGES
const BACKDROP_SIZE = "w1280";

// THE SIZE OF MOVIES POSTER IMAGES
const POSTER_SIZE = "w500";
```

## 🖇 Custom Hooks

Here we will create **two Custom Hooks** to avoid too much **Hooks** code in the **Home Component**:

**useHomeFetch**

```js
// TRY TO GET DATA ENDPOINT FROM TMDB API WHILE WAIT FOR JSON PARSE
try {
  const result = await (await fetch(endpoint)).json();
  setState((prev) => ({
    ...prev,
    movies:
      isLoadMore !== -1
        ? // SPREAD ANY PREVIOUS PROPS FIRST
          [...prev.movies, ...result.results]
        : [...result.results],
    // IF ALREADY HAVE ANY heroImage USE THAT OR ELSE GET THE FIRST NEW ONE FROM API
    heroImage: prev.heroImage || result.results[0],
    currentPage: result.page,
    totalPages: result.total_pages,
  }));
  // CATCH ANY ERRORS IF ANY
} catch (error) {
  setError(true);
  console.log(error);
}

// FETCH POPULAR MOVIES FOR HOME PAGE
useEffect(() => {
  // STORE SESSION STATE IF ALREADY EXISTS OR ELSE GET FROM API
  if (sessionStorage.homeState) {
    setState(JSON.parse(sessionStorage.homeState));
    setLoading(false);
  } else {
    fetchMovies(POPULAR_BASE_URL);
  }
}, []);
```

**useMovieFetch** uses almost the same logic, but with **localStorage**

```js
// CALLED WHEN movieId TRIGGERS
useEffect(() => {
  // STORE LOCAL STATE IF ALREADY EXISTS OR ELSE GET FROM API
  if (localStorage[movieId]) {
    setState(JSON.parse(localStorage[movieId]));
    setLoading(false);
  } else {
    fetchData();
  }
}, [fetchData, movieId]);
```

## Popular Movies Home Page

We will create a **const** named **state** which gives us the **Popular Movies** in a descending order. We will use this many times, so let's destructuring it beforehand:

```js
// DESTRUCTURING state TO AVOID TOO MANY REPETITIONS
const [
  {
    state: { movies, currentPage, totalPages, heroImage },
    loading,
    error,
  },
  fetchMovies,
] = useHomeFetch(searchTerm);
```

Now we loop through an array from TMDb API and show that in the **MovieWall Component**:

```js

<MovieWall header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {/* TO LOOP/MAP AN ARRAY FROM TMDB AND SHOW DATA IN THE MOVIEWALL COMPONENT  */}
        {movies.map(movie => (
          <>
            <MovieCard
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
              }
              movieId={movie.id}
              movieName={movie.original_title}
            />
          </>
        ))}

```

To create a better **Single Page Application (SPA)** experience in our app we should stay in the same page, so let's create a "infinity" load button which calls the **loadMoreMovies function** to do that:

```js
{
  loading && <Spinner />;
}
{
  /* CHECK IF REACHED THE END */
}
{
  currentPage < totalPages && !loading && (
    // INFINITY LOAD THAT TURNS THE EXPERIENCE IN A SPA
    <LoadMoreBtn text="Load more..." callback={loadMoreMovies} />
  );
}
```

## 🔎 Search Movies

When the user types in the **Search Bar** it will return movies based on what is typed and will wait a **delay of one second** without the necessity to press **Enter**. This gives a better **User Experience (UX)** and is simple to do:

```js
const doSearch = (event) => {
  // TRACKS THE USER INPUTS event.target
  const { value } = event.target;
  // SET A DELAY (1s) TO USER SEARCH QUERY AND AVOID ABRUPT RENDERING
  clearTimeout(timeOut.current);
  // STORE INPUTS IN value AND RETURN DATA WITH callback TO Home COMPONENT
  setState(value);

  timeOut.current = setTimeout(() => {
    callback(value);
  }, 1000);
};
```

This will return the movies inside the **callback(value)** after **1s**

## 🌟 Ratings Star Filter

In **RatingsFilter Component** we will restrict movies based on **vote_average** of the **TMDb API**. So movies from **0.0 - 2.0** will show in the **first star**, movies with **2.0 - 4.0** **vote_average** will show in **two stars** and so on. To create that functionality we will use a **Radio Input HTML Element** which will mimic a **star rating system** and **useState Hook** to store the **filtered ratings** then restrict the results based on the **radio id**:

```js
// VERIFY ANY VALUE CHANGES IN target.id AND UPDATE ratings ACCORDINGLY
  const handleInputChange = (e) => {
    setSelected(e.target.id);
  };


  ...


// FILTER ratings STATE AND RETURN THE FILTERED VALUES IN MOVIEWALL COMPONENT
const filteredOneStar =
    <MovieWall
      header={'Filtered Movies'}
      children >
      {ratings
        .filter(movie => movie.vote_average <= 2 && movie.vote_average >= 0)
        .map(movie => (
          <>
            <MovieCard
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : null
              }
              movieId={movie.id}
              movieName={movie.original_title}
            />
          </>
        ))}
    </MovieWall>


    ...


return (


    ...

    <input
        onClick={handleInputChange}
        type="radio"
        id="rating-1"
        name="rating"
    />
    <label htmlFor="rating-1">1</label>

    ...


)

```

## Keep the SPA principle

In order to keep the **SPA principle** and give a good User Experience we should avoid reloads and navigation to other pages, but yet show different content inside the same page. To do that we'll create a **Modal Component** that will show the **MovieDetails Component** inside it and triggered by **onClick HTML**:

```js
<Modal isVisible={isModal} onClose={() => setModal(false)}>
  <MovieDetails movie={movie} />
</Modal>;
{
  /* clickable MAKES THE img CALLS THE Modal JUST ONE TIME */
}
{
  clickable ? (
    <>
      <img
        className="clickable"
        src={image}
        alt="moviecard"
        onClick={() => setModal(true)}
      />
      <div className="card-rating">
        <div>{movie.vote_average}</div>
      </div>
    </>
  ) : (
    <img src={image} alt="moviecard" />
  );
}
```

## Styled Components

With **Styled Components** the development turns easier after you created several **styled components**. Let's see one exemple:

```js

<StyledRatingsFilter>

    ...

    <StyledMovieWall>
        <StyledMovieCard>
        {

            ...

        }
        </StyledMovieCard>
    </StyledMovieWall>
</StyledRatingsFilter>


```

With this example we nested external **styled components** several times. **StyledRatingFilter** is styling the **StyledMovieWall** which is styling the **StyledMovieCard** and so on.

## PropTypes

With **PropTypes** we can enforce static types behavior by forcing **types** for every **props** in **React**. It's almost the same as **Static Types** in **TypeScript**:

```js
MovieCard.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};
```

Here we are saying that **image** will always be a **string**, **movieId** will always be a **number** and **clickable** will always be a **boolean**. With that feature **Javascript** does not need to check **every** other **type**, **just the one** we need.

---

## ⛏️ Built Using <a name = "built_using"></a>

- [VSCode](https://code.visualstudio.com/) - Code Editor written in TypeScript by Microsoft
- [Git](https://git-scm.com/) - Git is a free and open source distributed version control system
- [React](https://reactjs.org/) - Web Framework originally created by Jordan Walke at Facebook.
- [Hooks](https://reactjs.org/docs/hooks-overview.html) - React Hooks (state management).
- [PropTypes](https://www.npmjs.com/package/prop-types) - Type Enforcement in Javascript like in Typescript (originally inside of React and now an external module).
- [Styled Components](https://styled-components.com/) - Create CSS/SASS styling inside a React Component.
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - The common Web Language.
- [TMDb](https://developers.themoviedb.org/3/getting-started/introduction) - Instructions to get a The Movie Database Developer API and start development.
- [Krita](https://krita.org/) - Powerful free painting software.
<!-- - [Netlify](https://www.netlify.com/) - Easy deploy a live Web Server -->

---

## 🚧 TODO <a name = "TODO"></a>

- [ ] Simplify logic even more
- [ ] Add more styling and animations

---

## ✍️ Author <a name = "author"></a>

Breno Rocha - GitHub [@git-BR](https://github.com/git-BR)

---

<div align="center">

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

</div>
