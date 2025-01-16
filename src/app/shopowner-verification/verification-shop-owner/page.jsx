"use client";
import { useState } from 'react';

export default function VerifyIdentity() {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [frontPreview, setFrontPreview] = useState(null);
  const [backPreview, setBackPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = async (e, side) => {
    const file = e.target.files[0];
    if (!file) return;

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      if (side === 'front') {
        setFrontPreview(reader.result);
        setFrontImage(file);
      } else {
        setBackPreview(reader.result);
        setBackImage(file);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    if (!frontImage || !backImage) {
      alert('Please upload both sides of your ID card');
      return;
    }

    setIsLoading(true);

    try {
      // Process front image
      const frontReader = new FileReader();
      frontReader.readAsDataURL(frontImage);
      frontReader.onloadend = async () => {
        const base64Front = frontReader.result.split(',')[1];
        
        // Call API for front image
        const frontResponse = await fetch('/api/kyc', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            doc_base64: base64Front,
            req_id: 'front-' + Date.now()
          })
        });

        const frontData = await frontResponse.json();
        console.log('Front ID Response:', frontData);

        // Process back image
        const backReader = new FileReader();
        backReader.readAsDataURL(backImage);
        backReader.onloadend = async () => {
          const base64Back = backReader.result.split(',')[1];
          
          // Call API for back image
          const backResponse = await fetch('/api/kyc', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              doc_base64: base64Back,
              req_id: 'back-' + Date.now()
            })
          });

          const backData = await backResponse.json();
          console.log('Back ID Response:', backData);
          setIsLoading(false);
        };
      };
    } catch (error) {
      console.error('Error uploading images:', error);
      setIsLoading(false);
      alert('Error uploading images. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex flex-1 bg-gray-50 p-4">
        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-8 text-gray-800">
            Verify your identity
          </h1>
          <div className="grid gap-8">
            {/* Upload Front of ID Card */}
            <div className="border border-gray-300 rounded-lg p-6 w-[300px]">
              <div className="flex gap-2 items-center justify-center mb-2">
                <img src="/Front-ID-Card.svg" alt="frontid-card" className="w-7 h-7"/>
                <p className="text-lg font-medium text-gray-700">Front of ID Card</p>
              </div>
              <label
                htmlFor="front-id-card"
                className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-lg p-4 cursor-pointer"
              >
                {frontPreview ? (
                  <div className="relative w-full h-48">
                    <img
                      src={frontPreview}
                      alt="Front ID Preview"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <>
                    <img src="/Upload.svg" alt="upload" className="w-7 h-7"/>
                    <span className="text-sm text-gray-500 mt-2">Upload your ID card</span>
                  </>
                )}
                <input
                  id="front-id-card"
                  type="file"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, 'front')}
                  accept="image/*"
                />
              </label>
            </div>

            {/* Upload Back of ID Card */}
            <div className="border border-gray-300 rounded-lg p-6 w-[300px]">
              <div className="flex gap-2 items-center justify-center mb-2">
                <img src="/Back-ID-Card.svg" alt="backid-card" className="w-7 h-7"/>
                <p className="text-lg font-medium text-gray-700">Back of ID Card</p>
              </div>
              <label
                htmlFor="back-id-card"
                className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-lg p-4 cursor-pointer"
              >
                {backPreview ? (
                  <div className="relative w-full h-48">
                    <img
                      src={backPreview}
                      alt="Back ID Preview"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <>
                    <img src="/Upload.svg" alt="upload" className="w-7 h-7"/>
                    <span className="text-sm text-gray-500 mt-2">Upload your ID card</span>
                  </>
                )}
                <input
                  id="back-id-card"
                  type="file"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, 'back')}
                  accept="image/*"
                />
              </label>
            </div>
          </div>
          <button
            className="mt-8 px-8 py-2 bg-[#2a4f48] text-white rounded hover:bg-slate-500 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={isLoading || !frontImage || !backImage}
          >
            {isLoading ? 'Processing...' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}