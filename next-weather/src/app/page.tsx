import Navbar from './Components/Navbar';
import WeatherInfo from './Components/WeatherInfo';

export default function Home() {
      return (
            <body className="min-h-screen bg-gradient-to-b from-slate-400 to-slate-200">
                  <div>
                        <Navbar />
                        <WeatherInfo />
                  </div>
            </body>
      );
}
