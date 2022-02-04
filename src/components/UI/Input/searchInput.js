import React, { Component } from "react";
import Button from "../Button/Button";
import classes from "./searchInput.module.scss";
import defautlAxios from "axios";
import MovieBoxSmall from "../../dumb/MovieBox/Small/MovieBoxSmall";
import Spinner from "../Spinner/Spinner";

defautlAxios.defaults.baseURL = "https://api.themoviedb.org/3/search/";

const SearchInput = (axios = defautlAxios, params, props = {}) => {
  class ChildComp extends Component {
    inputRef = React.createRef();

    state = {
      searchResult: [],
      searchType: "movie",
      ifLoading: false,
      showResult: false,
      isError: false,
    };

    defaultParams = {
      api_key: "<api_key>",
      language: "en-US",
      page: "1",
      adult: "false",
    };

    findMovies(word) {
      if (!word) return;
      this.setState({ isLoading: true });
      axios
        .get(`/${this.state.searchType}`, {
          params: { ...(params || { ...this.defaultParams }), query: word },
        })
        .then((res) => {
          this.setState({
            searchResult:
              res.data.results.length >= 5
                ? [...res.data.results].slice(0, 5)
                : res.data.results,
          });
        })
        .catch((err) => this.setState({ isError: err }));
      this.setState({ isLoading: false });
      console.log(this.state.searchResult);
    }

    generateResult() {
      if (this.state.searchResult.length === 0) return;

      return [...this.state.searchResult].map((movie, i) => {
        console.log(`${movie.id}: ${movie.original_title}`);

        return (
          <MovieBoxSmall
            key={movie.id}
            imgURL={movie.poster_path}
            heading={movie.original_title || movie.name}
            details={movie.overview}
            releaseDate={movie.release_date || movie.first_air_date}
          />
        );
      });
    }

    showResults() {
      if (!this.state.showResult) return;
      return (
        <div className={classes.DetailBox}>
          <div className={classes.FilterBox}>
            <Button
              type="text"
              active={this.state.searchType === "movie"}
              clicked={() => {
                this.setState({ searchType: "movie" });
              }}
            >
              Movies
            </Button>
            <Button
              type="text"
              active={this.state.searchType === "tv"}
              clicked={() => {
                this.setState({ searchType: "tv" });
              }}
            >
              Tv Shows
            </Button>
          </div>
          {this.state.isLoading && <Spinner />}
          {this.state.isError ? (
            <p style={{ fontSize: "1.2rem" }}>Something went wrong!</p>
          ) : null}
          {this.generateResult()}
        </div>
      );
    }

    closeResults = () => {
      this.setState({ showResult: false, searchResult: [] });
      this.inputRef.current.value = "";
    };

    render() {
      return (
        <div className={classes.SearchBox}>
          <div className={classes.InputBox}>
            <input
              ref={this.inputRef}
              type="text"
              placeholder={this.props.placeholder || "Search Movies & Tv shows"}
              onChange={() => this.findMovies(this.inputRef.current.value)}
              onFocus={() => this.setState({ showResult: true })}
            />
            <Button clicked={this.closeResults} type="close">
              &#8203;
            </Button>
          </div>

          {this.showResults()}
        </div>
      );
    }
  }
  return <ChildComp {...props} />;
};

export default SearchInput;
