import Image from "next/image";

export default function Home() {
  return (
    <div className="body">
      {/* <!-- Navbar --> */}
      <div className="header">
        <a href="">
          <Image
            src="https://lelogama.go-jek.com/prime/upload/gojek-horizontal-logo-white.svg"
            alt=""
            width={100}
            height={90}
          />
        </a>
        <div className="navBar">
          <a href="">Home Page</a>
          <a href="">Join as Mitra</a>
          <a href="">Go Corp</a>
          <a href="">Carier</a>
          <a href="">Company</a>
          <a href="">Product</a>
          <a href="">Blog</a>
          <a href="">Help</a>
          <a href="">ID</a>
        </div>
      </div>
      {/* <!-- 3 Negara --> */}
      <div className="img3negara">
        <div className="imgBackground">
          <Image
            src="https://cdn-site.gojek.com/uploads/hero_b18c33ed07.jpg"
            alt=""
            width={10000}
            height={10000}
            style={{ width: "100vw", height: "auto" }}
            className=""
          />
        </div>
        <div className="positioning">
          <h1>30 negara. 20+ layanan. 1 platform on-demand terkemuka</h1>
        </div>
      </div>
      {/* <!-- Kenali Kami --> */}
      <div className="kenaliKami">
        <h2>Kenalin, Gojek. Si pembawa perubahan</h2>
        <a className="gabung" href="">
          <span>Gabung</span>
        </a>
      </div>
      {/* <!-- SVG --> */}
      <div className="sfv">
        <div className="backgroundSVG1"></div>
        <div className="backgroundSVG2"></div>
        <div className="inputSVG">
          <div className="svg1">
            <Image
              src="/Source/SVG/FortuneTop20.png"
              alt=""
              width={10000}
              height={10000}
            />
            <h3>Fortune Top 20</h3>
            <p>
              Satu-satunya perusahaan di Asia Tenggara yang dua kali berada di
              daftar Perusahaan Pengubah Dunia versi masajah Fortune
            </p>
          </div>
          <div className="svg1">
            <Image
              src="/Source/SVG/BerkontribusiEkonomi.png"
              alt=""
              width={100}
              height={90}
            />
            <h3>Berkontribusi lebih dari $7.1 triliun</h3>
            <p>Penggerak roda perekonomian Indonesia</p>
          </div>
          <div className="svg1">
            <Image
              src="/Source/SVG/GerakanHijau.png"
              alt=""
              width={10000}
              height={10000}
            />
            <h3>Jaket hijau pergerakan juga hijau</h3>
            <p>
              Gojek mengurangi pemakaian plastik hingga 11.3 ton sejak Oktober
              2020
            </p>
          </div>
          <div className="svg1">
            <Image
              src="/Source/SVG/TumbuhPasPandemi.png"
              alt=""
              width={10000}
              height={10000}
            />
            <h3>Tumbuh 80% sejak pandemi</h3>
            <p>
              Mitra Food merchants naik 80% sejak pandemi berkat solusi
              digitalisasi Gojek untuk UMKM
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Skala Kami --> */}
      <div className="skalaKami">
        <h2>Skala kami</h2>
        <a className="gabung2" href="">
          <span>Gabung</span>
        </a>
      </div>
      {/* <!-- Skala content --> */}
      <div className="skalaKonten">
        <div className="kontenScale" id="one">
          <Image
            src="/Source/scale/scale-1.png"
            alt=""
            width={10000}
            height={10000}
          />
          <div className="des1">
            <h3>190 juta+</h3>
            <p>jumlah isntall aplikasi kami.</p>
          </div>
        </div>
        <div className="kontenScale" id="two">
          <Image
            src="/Source/scale/scale-2.png"
            alt=""
            width={10000}
            height={10000}
          />
          <div className="des1">
            <h3>2 juta+</h3>
            <p>mitra Driver yang sudah bergabung dengan kami</p>
          </div>
        </div>
        <div className="kontenScale" id="three">
          <Image
            src="/Source/scale/scale-3.png"
            alt=""
            width={10000}
            height={10000}
          />
          <div className="des1">
            <h3>900.000+</h3>
            <p>jumlah mitra GoFood</p>
          </div>
        </div>
        <div className="kontenScale" id="four">
          <Image
            src="/Source/scale/scale-4.png"
            alt=""
            width={10000}
            height={10000}
          />
          <div className="des1">
            <h3>2.448x</h3>
            <p>
              lipat kenaikan pengunduhan aplikasi Gojek dari 2015 sampai 2020
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
