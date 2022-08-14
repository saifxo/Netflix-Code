import Banner from './components/Banner';
import Row from './components/Row'
import requests from './services/requests';
import Nav from './components/Nav'
function App() {
  return (
    <div className='bg-[#111]'>
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOrignals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomaceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentries} />

    </div>
  );
}

export default App;
