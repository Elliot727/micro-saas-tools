'use client'; // This directive indicates that the component should be a Client Component

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white relative overflow-hidden">
      {/* Colorful Animated Circles */}
      <div className="absolute top-0 left-0 h-96 w-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 h-96 w-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 h-96 w-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-20 right-20 h-96 w-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-6000"></div>

      <h1 className="text-9xl font-extrabold text-gray-800 tracking-wider drop-shadow-lg">404</h1>
      <p className="text-2xl mt-4 text-gray-800 font-semibold drop-shadow-md">Oops! Page not found.</p>
      <p className="text-lg text-gray-600 mt-2">The page you’re looking for doesn’t exist.</p>
      
      {/* Blue Gradient Button */}
      <button
        onClick={() => (window.location.href = '/')}
        className="mt-8 px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-md shadow-lg transform transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-105 active:scale-95"
      >
        Go back home
      </button>

      <style>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
