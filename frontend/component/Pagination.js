export default function Pagination({ page, onPage }) {
    return (
        <div className="flex justify-between mt-4">
            <button
                className="px-3 py-2 border rounded"
                disabled={page <= 1}
                onClick={() => onPage(page - 1)}
            >
                Prev
            </button>

            <button
                className="px-3 py-2 border rounded"
                onClick={() => onPage(page + 1)}
            >
                Next
            </button>
        </div>
    );
}
