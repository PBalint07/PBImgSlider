export function Header({ currentIndex }) {
    return (
        <div className="mb-4 text-center">
            <h1 className="text-2xl font-bold">Fotógaléria</h1>
            <p className="text-sm text-gray-600">Kép {currentIndex + 1} / 4</p>
        </div>
    )
}