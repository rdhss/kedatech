import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import home from './assets/home-icon.svg'
import shape from './assets/blob.svg'
import Card from './component/Card';
import Map from './assets/map.png'
import about from './assets/about.svg'
import { useEffect, useState } from 'react';
import ModalLogin from './component/ModalLogin';
import 'animate.css';

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition])

  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition])

  return (
    <div className="">
      {openModal &&
        <ModalLogin close={() => setOpenModal(false)} />
      }
      <Header login={() => setOpenModal(true)} />
      <div className='py-6'></div>
      <section id='home' className='h-screen overflow-hidden'>
        <div className='md:h-[50%] h-[30%] flex md:justify-end md:px-28 justify-center'>
          <div className='md:mr-40 mt-8 px-12 md:px-0 animate__animated animate__fadeInUp'>
            <h1 className='text-center text-2xl mt-10'>
              Revolusi Bisnis Platform ERP
            </h1>
            <h1 className='text-center text-2xl'>
              Inovatif untuk Pengusaha Modern
            </h1>
          </div>
        </div>
        <div className='h-[20%] md:flex md:pl-28'>
          <div className='flex flex-col justify-center items-center animate__animated animate__fadeInUp'>
            <h1 className='italic md:p-0 px-8 md:m-0 mt-10'>
              "Kelola Bisnismu dengan Mudah, Catat Setiap Transaksi, Raih Keuntungan Setiap Hari!"
            </h1>
            <img src={home} alt="" width={300} className='mt-10' />
          </div>
          <div className='relative md:block hidden w-full h-full'>
            <div className='w-[40rem] top-[-13rem] absolute right-[-16rem]'>
              <img src={shape} alt="" className='animate__animated animate__slideInRight' />
            </div>
          </div>
        </div>
      </section>
      
      {
        scrollPosition &&
        <section id='about' className='h-screen overflow-hidden md:px-28 animate__animated animate__fadeInUp'>
          <h1 className='font-semibold text-center text-3xl'>ABOUT US</h1>
          <div className='flex md:flex-row flex-col justify-center  md:items-center md:mt-10'>
            <div>
              <h1 className='md:text-left text-center md:w-[60%] md:text-2xl mt-10 px-10 md:p-0'>
                kami menghadirkan solusi ERP terdepan untuk membantu perusahaan Anda tumbuh dan berkembang dengan lebih efisien. Sebagai pemimpin dalam industri teknologi informasi, kami berkomitmen untuk memberikan platform terintegrasi yang memungkinkan Anda mengelola semua aspek bisnis Anda dengan mudah.
              </h1>
            </div>

            <div className='mt-20 md:hidden flex justify-center'>
              <img src={about} alt="" width={200} />
            </div>

            <div className='mr-10 hidden md:flex mt-6'>
              <img src={about} alt="" width={1000} />
            </div>
          </div>
        </section>
      }

      <section id='pricing' className='md:h-screen mb-[15rem]'>
        <div className='bg-[#7A9FE8] flex flex-col items-center justify-center gap-3'>
          <h1 className='font-bold text-white/75 text-2xl mt-12'>Harga Tier</h1>
          <h1 className='text-white text-4xl mb-32 md:text-left text-center'>Tentukan Tier Sesuai Kebutuhanmu</h1>
        </div>
        <div className='flex mt-[-4rem] justify-center'>

          <div class="grid md:grid-cols-3 grid-cols-1 gap-4 animate__animated animate__fadeInUp">
            <Card price="309.000" priceNew="225.000" diskon="28" tier={1} nameTier="Basic" fitur={[
              "Mencatat barang masuk",
              "Mencatat barang keluar",
              "Mencatat hasil keuntungan"
            ]} />
            <Card price="409.000" priceNew="300.000" diskon="27" tier={2} nameTier="Business" fitur={[
              "Mencatat barang masuk dan keluar",
              "Mencatat Keuntungan",
              "Dapat menganalisa hasil penjualan dengan CHART",
              "Support 7x24 Jam"
            ]} />
            <Card price="639.000" priceNew="375.000" diskon="42" tier={3} nameTier="Entrepreneur" fitur={[
              "Mencatat barang masuk dan keluar",
              "Mencatat Keuntungan",
              "Dapat menganalisa hasil penjualan dengan CHART",
              "Support 7x24 Jam",
              "Export data ke Excel",
              "AI Prediksi penghasilan"
            ]} />
          </div>

        </div>

      </section>

      <section id='contact' className='md:h-screen'>
        <div className='bg-[#B07BFF] flex flex-col gap-3 md:px-28 px-4 md:text-left text-center'>
          <h1 className='font-bold text-white/75 text-2xl mt-12'>Lokasi Kantor</h1>
          <h1 className='text-white text-4xl'>Kantor Cabang Perusahaan</h1>
          <h1 className='text-white text-2xl mb-32'>Sambutlah tim kami yang ramah di salah satu lokasi ini</h1>
        </div>
        <div className='flex mt-[-4rem] justify-center'>
          <div className='bg-white overflow-hidden flex md:flex-row flex-col md:w-[65rem] w-[23rem] rounded-xl md:h-[18rem]  shadow-md'>
            <img src={Map} className='w-[36rem]' />
            <div className='my-14 mx-12'>
              <h1 className='text-2xl font-semibold'>Kantor</h1>
              <p className='mt-8'>
                Jl demo No. 111C RT.01 RW.01, Kelurahan demo, Kecamatan demo, Kota Jakarta, DKI Jakarta
              </p>
              <p className='mt-8'>
                ( +62 ) 81249197226
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className='bg-[#B07BFF] text-center text-white font-semibold py-1'>
        Made by Ridho Suhendar
      </footer>
    </div>
  );
}

export default App;
