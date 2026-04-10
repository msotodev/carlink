import React from 'react';

interface ImageModalProps {
    photos: string[];
    onClose: () => void;
}

export default function CarouselModal(
    { photos, onClose }: ImageModalProps
) {
    if (photos.length === 0) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
                <div className="text-center text-white">No images to display.</div>
            </div>
        );
    }

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl h-[90vh] rounded-xl shadow-2xl overflow-hidden border border-white/20">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 bg-white/20 hover:bg-white/40 rounded-full transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex flex-col h-full">
                    <div className="grow flex items-center justify-center">
                        <img
                            src={photos[currentIndex]}
                            alt={`Image ${currentIndex + 1}`}
                            className="max-w-full max-h-[80vh] object-contain"
                        />
                    </div>
                    {/* Carousel Controls */}
                    <div className="flex justify-between p-4">
                        <button
                            onClick={goToPrev}
                            className="px-4 py-2 border border-white/50 text-gray-200 rounded-lg hover:bg-black/90 transition"
                        >
                            Previous
                        </button>
                        <div className="text-md font-light text-gray-100">
                            {currentIndex + 1} of {photos.length}
                        </div>
                        <button
                            onClick={goToNext}
                            className="px-4 py-2 border border-white/50 text-gray-200 rounded-lg hover:bg-black/90 transition"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};