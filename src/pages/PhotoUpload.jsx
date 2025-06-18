import { useState, useCallback } from 'react';

const PhotoUpload = ({ onFilesSelected }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = useCallback((e) => {
    if (e.target.files) {
      const validFiles = Array.from(e.target.files).filter((file) => {
        const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
        const maxSize = 5 * 1024 * 1024; // 5MB
        
        if (!validTypes.includes(file.type)) {
          alert(`${file.name} is not a supported image type (JPEG, PNG, GIF only)`);
          return false;
        }
        
        if (file.size > maxSize) {
          alert(`${file.name} is too large (max 5MB)`);
          return false;
        }
        
        return true;
      });

      const filesArray = validFiles.map((file) => ({
        url: URL.createObjectURL(file),
        file
      }));
      
      setSelectedImages((prevImages) => [...prevImages, ...filesArray]);
      if (onFilesSelected) {
        onFilesSelected([...selectedImages.map(img => img.file), ...validFiles]);
      }
    }
  }, [onFilesSelected, selectedImages]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const validFiles = Array.from(e.dataTransfer.files).filter((file) => {
        const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
        return validTypes.includes(file.type);
      });
      
      const filesArray = validFiles.map((file) => ({
        url: URL.createObjectURL(file),
        file
      }));
      
      setSelectedImages((prevImages) => [...prevImages, ...filesArray]);
      if (onFilesSelected) {
        onFilesSelected([...selectedImages.map(img => img.file), ...validFiles]);
      }
    }
  }, [onFilesSelected, selectedImages]);

  const removeImage = useCallback((index) => {
    setSelectedImages((prevImages) => {
      const newImages = prevImages.filter((_, i) => i !== index);
      if (onFilesSelected) {
        onFilesSelected(newImages.map(img => img.file));
      }
      return newImages;
    });
  }, [onFilesSelected]);

  return (
    <div className="space-y-4">
      <div 
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 hover:bg-green-50 transition-colors duration-300"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="file-upload"
          multiple
          accept="image/jpeg, image/png, image/gif"
          onChange={handleImageChange}
          className="hidden"
        />
        <label 
          htmlFor="file-upload" 
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded cursor-pointer transition-colors duration-300 mb-3"
        >
          Choose Photos
        </label>
        <p className="text-gray-500 text-sm">Drag and drop or click to browse</p>
      </div>

      <div className="flex flex-wrap gap-4 min-h-24 items-center justify-center p-3 rounded-lg bg-gray-50">
        {selectedImages.length > 0 ? (
          selectedImages.map((image, index) => (
            <div key={index} className="relative w-36 h-36">
              <img 
                src={image.url} 
                alt="" 
                className="w-full h-full object-cover rounded shadow-sm" 
              />
              <button 
                onClick={() => removeImage(index)} 
                className="absolute top-1 right-1 bg-red-500/70 hover:bg-red-600/90 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm cursor-pointer transition-all duration-200 hover:scale-110"
                aria-label="Remove image"
              >
                ×
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-400 italic">No photos selected yet</p>
        )}
      </div>
    </div>
  );
};

export default PhotoUpload;