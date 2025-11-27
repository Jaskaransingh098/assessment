export default function Pagination({ page, limit, count, onPage }) {
    return (
        <div className="flex items-center justify-center gap-3 my-6 fade-in">

            <button
                onClick={() => onPage(page - 1)}
                disabled={page <= 1}
                className="
                    text-black px-4 py-2 bg-white border rounded-lg shadow-sm 
                    hover:bg-gray-100 active:scale-95 transition
                    disabled:opacity-50 disabled:cursor-not-allowed
                "
            >
                Previous
            </button>


            <span className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow">
                {page}
            </span>


            <button
                onClick={() => onPage(page + 1)}
                disabled={count < limit}
                className="
                    text-black px-4 py-2 bg-white border rounded-lg shadow-sm 
                    hover:bg-gray-100 active:scale-95 transition
                    disabled:opacity-50 disabled:cursor-not-allowed
                "
            >
                Next
            </button>
        </div>
    );
}
