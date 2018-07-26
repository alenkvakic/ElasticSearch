import React, {Component} from "react";
import {
  ReactiveBase,
  DataSearch,
  MultiDataList,
  RangeSlider,
  DateRange,
  MultiList,
  SingleRange,
  SelectedFilters,
  ResultCard
} from "@appbaseio/reactivesearch";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      message: "🔬 Zeige Filter"
    };
  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,
      message: this.state.isClicked ? "🔬 Zeige Filter" : "🎬 Zeige Filme"
    });
  }
  render() {
    return (
      <div className="main-container">
        <ReactiveBase
          app="MovieAppFinal"
          credentials="RxIAbH9Jc:6d3a5016-5e9d-448f-bd2b-63c80b401484"
          theme={{
            typography: {
              fontFaMioy:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
              fontSize: "16px"
            },
            colors: {
              textColor: "#fff",
              backgroundColor: "#212121",
              primaryTextColor: "#fff",
              primaryColor: "#2196F3",
              titleColor: "#fff",
              alertColor: "#d9534f",
              borderColor: "#666"
            }
          }}
        >
          <div className="navbar">
            <div className="logo-container">
              <img
                className="app-logo"
                src="logo3.png"
                alt="ElasticMovieSearch"
              />
            </div>

            <div className="search-container">
              <DataSearch
                componentId="mainSearch"
                dataField={["original_title"]}
                categoryField="title"
                className="search-bar"
                queryFormat="and"
                placeholder="nach Filmen suchen..."
                iconPosition="left"
                autosuggest={false}
                filterLabel="search"
              />
            </div>
          </div>
          <div className="sub-container">
            <div
              className={
                this.state.isClicked ? "left-bar-optional" : "left-bar"
              }
            >
              <div className="filter-heading center">
                <b>
                  {" "}
                  <i className="fa fa-pied-piper-alt" /> Genre{" "}
                </b>
              </div>
              <MultiList
                componentId="genres-list"
                dataField="genres_data.raw"
                className="genres-filter"
                size={20}
                sortBy="asc"
                queryFormat="or"
                selectAllLabel="Alle"
                showCheckbox={true}
                showCount={true}
                showSearch={true}
                placeholder="Nach Genre suchen"
                react={{
                  and: [
                    "mainSearch",
                    "results",
                    "date-filter",
                    "RangeSlider",
                    "language-list",
                    "revenue-list"
                  ]
                }}
                showFilter={true}
                filterLabel="Genre"
                URLParams={false}
                innerClass={{
                  label: "list-item",
                  input: "list-input"
                }}
              />
              <hr className="blue" />
              <div className="filter-heading center">
                <b>
                  {" "}
                  <i className="fa fa-dollar" /> Einnahmen{" "}
                </b>
              </div>

              <SingleRange
                componentId="revenue-list"
                dataField="ran_revenue"
                className="revenue-filter"
                data={[
                  {start: 0, end: 1000, label: "< 1 Mio."},
                  {start: 1000, end: 10000, label: "1 Mio. - 10 Mio."},
                  {start: 10000, end: 500000, label: "10 Mio. - 500 Mio."},
                  {start: 500000, end: 1000000, label: "500 Mio. - 1 Mrd."},
                  {start: 1000000, end: 10000000, label: "> 1 Mrd."}
                ]}
                showRadio={true}
                showFilter={true}
                filterLabel="Einnahmen"
                URLParams={false}
                innerClass={{
                  label: "revenue-label",
                  radio: "revenue-radio"
                }}
              />
              <hr className="blue" />

              <div className="filter-heading center">
                <b>
                  <i className="fa fa-star" /> Bewertung
                </b>
              </div>
              <RangeSlider
                componentId="RangeSlider"
                dataField="vote_average"
                className="review-filter"
                range={{
                  start: 0,
                  end: 10
                }}
                rangeLabels={{
                  start: "0",
                  end: "10"
                }}
                react={{
                  and: [
                    "mainSearch",
                    "results",
                    "language-list",
                    "date-Filter",
                    "genres-list",
                    "revenue-list"
                  ]
                }}
              />
              <hr className="blue" />
              <div className="filter-heading center">
                <b>
                  {" "}
                  <i className="fa fa-language" /> Sprachen{" "}
                </b>
              </div>
              <MultiDataList
                componentId="language-list"
                dataField="original_language.raw"
                className="language-filter"
                size={100}
                sortBy="asc"
                queryFormat="or"
                selectAllLabel="Alle Sprachen"
                showCheckbox={true}
                showSearch={true}
                placeholder="Nach Sprache suchen"
                react={{
                  and: [
                    "mainSearch",
                    "results",
                    "date-filter",
                    "RangeSlider",
                    "genres-list",
                    "revenue-list"
                  ]
                }}
                data={[
                  {
                    label: "Englisch",
                    value: "English"
                  },
                  {
                    label: "Deutsch",
                    value: "Deutsch"
                  },
                  {
                    label: "Französisch",
                    value: "French"
                  },
                  {
                    label: "Swedisch",
                    value: "Swedish"
                  },
                  {
                    label: "Türkisch",
                    value: "Turkish"
                  },
                  {
                    label: "Russisch",
                    value: "Russian"
                  },
                  {
                    label: "Portugiesisch",
                    value: "Portuguese"
                  },
                  {
                    label: "Chinesisch",
                    value: "Chinese"
                  },
                  {
                    label: "Koreanisch",
                    value: "Korean"
                  },
                  {
                    label: "Japanisch",
                    value: "Japanese"
                  },
                  {
                    label: "Italienisch",
                    value: "Italian"
                  },
                  {
                    label: "Hindi",
                    value: "Hindi"
                  },
                  {
                    label: "Finnisch",
                    value: "Finnish"
                  },
                  {
                    label: "Spanisch",
                    value: "Spanish"
                  }
                ]}
                showFilter={true}
                filterLabel="Sprache"
                URLParams={false}
                innerClass={{
                  label: "list-item",
                  input: "list-input"
                }}
              />
              <hr className="blue" />

              <div className="filter-heading center">
                <b>
                  {" "}
                  <i className="fa fa-calendar" /> Erscheinungsdatum{" "}
                </b>
              </div>
              <DateRange
                componentId="date-filter"
                dataField="release_date"
                className="datePicker"
                placeholder={{
                  start: "von",
                  end: "bis"
                }}
              />
            </div>
            <div
              className={
                this.state.isClicked
                  ? "result-container-optional"
                  : "result-container"
              }
            >
              <SelectedFilters
                showClearAll={true}
                clearAllLabel="Filter entfernen"
              />

              <ResultCard
                componentId="results"
                dataField="original_title"
                react={{
                  and: [
                    "mainSearch",
                    "RangeSlider",
                    "language-list",
                    "date-filter",
                    "genres-list",
                    "revenue-list"
                  ]
                }}
                pagination={true}
                className="Result_card"
                paginationAt="bottom"
                pages={5}
                size={12}
                Loader="Lade Daten..."
                noResults="Keine Ergebnisse gefunden..."
                sortOptions={[
                  {
                    dataField: "revenue",
                    sortBy: "desc",
                    label: "Sortieren nach Einnahmen(Hoch bis Gering) \u00A0"
                  },
                  {
                    dataField: "popularity",
                    sortBy: "desc",
                    label: "Sortieren nach Beliebtheit(Hoch bis Gering)\u00A0 \u00A0"
                  },
                  {
                    dataField: "vote_average",
                    sortBy: "desc",
                    label: "Sortieren nach Bewertung(Hoch bis Gering) \u00A0"
                  },
                  {
                    dataField: "original_title.raw",
                    sortBy: "asc",
                    label: "Sortieren nach Titel(A-Z) \u00A0"
                  }
                ]}
                innerClass={{
                  title: "result-title",
                  listItem: "result-item",
                  list: "list-container",
                  sortOptions: "sort-options",
                  resultStats: "result-stats",
                  resultsInfo: "result-list-info",
                  poweredBy: "powered-by"
                }}
                onData={function(res) {
                  res.vote_average < 3 && res.vote_average >= 0 ? res.opinion = 'absoluter dreck' : console.log();
                  res.vote_average < 4 && res.vote_average >= 3 ? res.opinion = 'ziemlicher mist' : console.log();
                  res.vote_average < 5 && res.vote_average >= 4 ? res.opinion = 'such dir lieber was anderes' : console.log();
                  res.vote_average < 6 && res.vote_average >= 5 ? res.opinion = 'naja..' : console.log();
                  res.vote_average === 6 ? res.opinion = 'mittelmäßig' : console.log();
                  res.vote_average === 6.1 ? res.opinion = 'es gibt besseres, aber nicht schlecht' : console.log();
                  res.vote_average === 6.2 ? res.opinion = 'leichte kost' : console.log();
                  res.vote_average === 6.3 ? res.opinion = 'jaa noch irgendwie unterhaltsam' : console.log();
                  res.vote_average === 6.4 ? res.opinion = 'kann man gucken' : console.log();
                  res.vote_average === 6.5 ? res.opinion = 'nicht schlecht' : console.log();
                  res.vote_average === 6.6 ? res.opinion = 'würde dir gefallen, kein muss' : console.log();
                  res.vote_average === 6.7 ? res.opinion = 'ich würd ihn gucken' : console.log();
                  res.vote_average === 6.8 ? res.opinion = 'ist ganz nett, geht aber besser' : console.log();
                  res.vote_average === 6.9 ? res.opinion = 'gute unterhaltung' : console.log();
                  res.vote_average === 7 ? res.opinion = 'sehenswert' : console.log();
                  res.vote_average === 7.1 ? res.opinion = 'unterhält gut' : console.log();
                  res.vote_average === 7.2 ? res.opinion = 'wirklich nicht schlecht' : console.log();
                  res.vote_average === 7.3 ? res.opinion = 'gefällt den meisten' : console.log();
                  res.vote_average === 7.4 ? res.opinion = 'sehr solide' : console.log();
                  res.vote_average === 7.5 ? res.opinion = 'fabelhaft' : console.log();
                  res.vote_average === 7.6 ? res.opinion = 'wirst du nicht bereuen' : console.log();
                  res.vote_average === 7.7 ? res.opinion = 'top film' : console.log();
                  res.vote_average === 7.8 ? res.opinion = 'sehr sehr gut' : console.log();
                  res.vote_average === 7.9 ? res.opinion = 'meisterwerk' : console.log();
                  res.vote_average >= 8 ? res.opinion = 'must-see' : console.log();

                  if (res.opinion == '') {
                    res.opinion = 'alles klar';
                  }

                  return {
                    description: (
                      <div className="main-description">
                        <div className="ih-item square effect6 top_to_bottom">
                          <a
                            target="#"
                            href={"http://www.imdb.com/title/" + res.imdb_id}
                          >
                            <div className="img">
                              <img
                                src={
                                  "https://image.tmdb.org/t/p/w500" +
                                  res.poster_path
                                }
                                alt={res.original_title}
                                className="result-image"
                              />
                            </div>
                            <div className="info colored">
                              <h3 className="overlay-title">
                                {res.original_title}
                              </h3>

                              <div className="overlay-description">
                                <strong> {res.opinion}</strong>
                              </div>

                              <div className="overlay-info">
                                <div className="rating-time-score-container">
                                  <div className="sub-title Rating-data">
                                    <b>
                                      IMDB:
                                      <span className="details">
                                        {" "}{res.vote_average}/10{" "}
                                      </span>
                                    </b>
                                  </div>
                                  <div className="sub-title Score-data">
                                    <b>
                                      Länge:
                                      <span className="details">
                                        {" "}
                                        {res.time_str}
                                      </span>
                                    </b>
                                  </div>
                                </div>
                                <div className="revenue-lang-container">
                                  <div className="revenue-data">
                                    <b>
                                      <span>Einnahmen:</span>{" "}
                                      <span className="details">
                                        {" "}
                                        ${res.or_revenue}
                                      </span>{" "}
                                    </b>
                                  </div>

                                  <div className="sub-title language-data">
                                    <b>
                                      Sprache:
                                      <span className="details">
                                        {" "}
                                        {res.original_language}
                                      </span>
                                    </b>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    ),
                    url: "http://www.imdb.com/title/" + res.imdb_id
                  };
                }}
              />
            </div>

            <button
              className="toggle-button"
              onClick={this.handleClick.bind(this)}
            >
              {this.state.message}
            </button>
          </div>
        </ReactiveBase>
      </div>
    );
  }
}

export default App;