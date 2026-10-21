export function Photo({ currentIndex, images }) {
    return (
        <div className="p-4 w-full">
            <img
                src={images[currentIndex]}
                alt="Kép"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
        </div>
    )
}