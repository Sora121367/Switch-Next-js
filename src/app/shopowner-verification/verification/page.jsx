"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VerifyIdentity() {
  const router = useRouter();
  const [idImage, setIdImage] = useState(null);
  const [idPreview, setIdPreview] = useState(null);
  const [faceImage, setFaceImage] = useState(null);
  const [facePreview, setFacePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) { // Limit file size to 5MB
      alert("File size must be under 5 MB.");
      return;
    }

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      alert("Only JPG and PNG formats are allowed.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      if (type === "idCard") {
        setIdPreview(reader.result);
        setIdImage(reader.result.split(",")[1]); // Base64 content only
      } else if (type === "face") {
        setFacePreview(reader.result);
        setFaceImage(reader.result.split(",")[1]);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    if (!idImage || !faceImage) {
      alert("Please upload both ID card and face image");
      return;
    }

    setIsLoading(true);

    try {
      // Send ID card request
      const idResponse = await fetch("/api/kyc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doc_base64: idImage,
          req_id: "id-" + Date.now(),
        }),
      });

      if (!idResponse.ok) {
        throw new Error(`ID Card API Error: ${idResponse.status} ${idResponse.statusText}`);
      }

      const idData = await idResponse.json();
      console.log("ID Card Response:", idData);

      // Send face image request
      const faceResponse = await fetch("/api/liveness", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doc_base64: faceImage,
          req_id: "face-" + Date.now(),
        }),
      });

      if (!faceResponse.ok) {
        throw new Error(`Face API Error: ${faceResponse.status} ${faceResponse.statusText}`);
      }

      const faceData = await faceResponse.json();
      console.log("Face Image Response:", faceData);

      // Navigate after successful submission
      router.push("/home");
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Error uploading images. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex flex-1 bg-gray-50 p-4">
        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-8 text-gray-800">Verify your identity</h1>
          <div className="grid gap-8">
            {/* Upload ID Card Image */}
            <div className="border border-gray-300 rounded-lg p-6 w-[300px]">
              <div className="flex gap-2 items-center justify-center mb-2">
                <img src="/Front-ID-Card.svg" alt="id-card" className="w-7 h-7" />
                <p className="text-lg font-medium text-gray-700">ID Card</p>
              </div>
              <label
                htmlFor="id-card"
                className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-lg p-4 cursor-pointer"
              >
                {idPreview ? (
                  <div className="relative w-full h-48">
                    <img
                      src={idPreview}
                      alt="ID Preview"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <>
                    <img src="/Upload.svg" alt="upload" className="w-7 h-7" />
                    <span className="text-sm text-gray-500 mt-2">Upload your ID card</span>
                  </>
                )}
                <input
                  id="id-card"
                  type="file"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, "idCard")}
                  accept="image/*"
                />
              </label>
            </div>

            {/* Upload Face Image */}
            <div className="border border-gray-300 rounded-lg p-6 w-[300px]">
              <div className="flex gap-2 items-center justify-center mb-2">
                <img src="/Face.svg" alt="face-id" className="w-7 h-7" />
                <p className="text-lg font-medium text-gray-700">Face Image</p>
              </div>
              <label
                htmlFor="face-image"
                className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-lg p-4 cursor-pointer"
              >
                {facePreview ? (
                  <div className="relative w-full h-48">
                    <img
                      src={facePreview}
                      alt="Face Preview"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <>
                    <img src="/Upload.svg" alt="upload" className="w-7 h-7" />
                    <span className="text-sm text-gray-500 mt-2">Upload your face image</span>
                  </>
                )}
                <input
                  id="face-image"
                  type="file"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, "face")}
                  accept="image/*"
                />
              </label>
            </div>
          </div>

          <button
            className="mt-8 px-8 py-2 bg-[#2a4f48] text-white rounded hover:bg-slate-500 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={isLoading || !idImage || !faceImage}
          >
            {isLoading ? "Processing..." : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
