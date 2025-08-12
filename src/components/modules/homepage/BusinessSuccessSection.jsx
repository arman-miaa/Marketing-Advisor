
import logo1 from "../../../assets/images/Home Page/big-innovation-2025.png.2503270932005.webp"
import logo2 from "../../../assets/images/Home Page/Leader-winter-2025.png.2503270932004.webp"
import logo3 from "../../../assets/images/Home Page/The-Sammy-2023.png.2503270932003.webp"

export default function BusinessSuccessSection() {
  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
            MAXIMIZE YOUR SUCCESS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Every business we serve exists to help others.
          </h2>
          <p className="text-4xl md:text-5xl font-bold">
            <span className="bg-white text-gray-900 px-4 py-2 rounded">
              Our job
            </span>{" "}
            is to help them.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* 20k+ */}
            <div className="text-center">
              <h3 className="text-5xl md:text-6xl font-bold mb-4">20k+</h3>
              <div className="badge badge-primary badge-lg">
                <span className="text-white font-medium">helped succeed</span>
              </div>
            </div>

            {/* $100B+ */}
            <div className="text-center">
              <h3 className="text-5xl md:text-6xl font-bold mb-4">$100B+</h3>
              <div className="badge badge-info badge-lg">
                <span className="text-white font-medium">generated</span>
              </div>
            </div>

            {/* 200M+ */}
            <div className="text-center">
              <h3 className="text-5xl md:text-6xl font-bold mb-4">200M+</h3>
              <div className="badge badge-secondary badge-lg">
                <span className="text-white font-medium">
                  driven for clients
                </span>
              </div>
            </div>

            {/* Countless */}
            <div className="text-center">
              <h3 className="text-5xl md:text-6xl font-bold mb-4">Countless</h3>
              <div className="badge badge-accent badge-lg">
                <span className="text-white font-medium">broken</span>
              </div>
            </div>
          </div>

          {/* Awards Cards */}
          <div className="space-y-4">
            {/* Transformative Product Winner */}
            <div className="card bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="card-body flex-row items-center gap-4 py-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <img src={logo1} alt="" />
                  </div>
                </div>
                <div>
                  <h4 className="card-title text-lg mb-1">
                    Transformative Product Winner
                  </h4>
                  <p className="text-blue-100 text-sm">ReviewsMAX</p>
                </div>
              </div>
            </div>

            {/* Top Choice in Category */}
            <div className="card bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="card-body flex-row items-center gap-4 py-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center relative">
                    <img src={logo2} alt="" />
                    <div className="absolute -top-1 -right-1 bg-yellow-400 text-red-600 text-xs font-bold px-1 rounded">
                      #1
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="card-title text-lg mb-1">
                    Top Choice in Category
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Digital and Content Marketing
                  </p>
                </div>
              </div>
            </div>

            {/* Excellence in Sales & Marketing */}
            <div className="card bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="card-body flex-row items-center gap-4 py-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center relative">
                    <img src={logo3} alt="" />
                    <div className="absolute inset-0 border-4 border-yellow-600 rounded-lg transform rotate-45"></div>
                  </div>
                </div>
                <div>
                  <h4 className="card-title text-lg mb-1">
                    Excellence in Sales & Marketing
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Exceptional Results for SMB Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
