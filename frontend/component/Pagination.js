export default function Pagination({ page, onPage }) {
    return (
        <div className="flex items-center justify-center gap-3 my-6 fade-in">
            <button
                onClick={() => onPage(page - 1)}
                disabled={page <= 1}
                className="text-black px-4 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-100 active:scale-95 transition disabled:opacity-80 cursor-pointer"
            >
                Previous
            </button>

            <span className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow">
                {page}
            </span>

            <button
                onClick={() => onPage(page + 1)}
                className=" text-black px-4 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-100 active:scale-95 transition cursor-pointer"
            >
                Next
            </button>
        </div>
    );
}
