import logo from '../logo.svg';
import '../App.css';
import Navbar from '../components/Navbar';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import API2 from './Api2';
import axios from 'axios';

function App() {
  return (
    <>
    <Navbar />
    <Aside /> {/* Buat List Latihan */}

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold italic">
         API
        </h1>

        {/* <p class="min-h-auto w-700px p-5 bg-white text-xl font-light leading-relaxed text-black mt-6 mb-2 inline-block">
           Hasil dari API
          <div className="-mt-9">
            <API2 />
          </div>
      </p> */}
      <p class="m-10"> 
      <API2 />

      </p>
      
      {/* <pre class="line-numbers h-auto w-700px mt-10">
          <h1> Code Snippet API*</h1>
          <br/>
          *Untuk file bernama Api.js, dan seharusnya ada code mapping*
          <br/>
          import Axios from 'axios'; 
            <br />
            <br />
          
           const [product, setProduct] = useState([]);
            <br />
            <br />
            useEffect(() =#62; 
            <br />
            &#123;
                getProduct()
            &#125;, []);
            <br />
            const getProduct = () =#62 <br /> &#123;
                Axios.get(`http://localhost/northwind/api/list/products`)
                <br /> .then(res =#62 &#123;
                        const data = res.data;
                        setProduct(data.products)
                    &#125;)
                    <br />
                    .catch(function (error) &#123;
                        // handle error
                        console.log(error);
                        <br />
                    &#125;)
            &#125;
        </pre> */}
      </header>

      
    </div>
    <Footer />
    </>
  );
}

export default App;
